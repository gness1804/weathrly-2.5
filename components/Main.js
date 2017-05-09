// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  Picker,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import WeatherView from './WeatherView'
import CurrentWeather from './CurrentWeather'
import PinnedCities from './PinnedCities'
import styles from '../styles/main-styles';
import zipCodeIsValid from '../helpers/zipCodeValidation';
import commonElements from '../styles/commonElements';
import capitalize from '../helpers/capitalize';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      weather: [],
      location: 'Austin',
      state: 'TX',
      zip: '',
      view: 'us-city-state',
      showWeatherView: false,
      currentTemp: 0,
    }
  }

  state: {
      weather: Array<Object>,
      location: string,
      state: string,
      zip: string,
      view: string,
      showWeatherView: boolean,
      currentTemp: number,
  }

  componentDidMount(): void {
    this.fillCityAndStateData()
  }

  getWeather = (): void => {
    if (this.state.view === 'us-city-state') {
      const city = this.state.location.toLowerCase();
      const state = this.state.state;
      const url = `http://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${state}/${city}.json`
      if (!city || !state) {
        Alert.alert('Error: you must enter both a city and a state.')
        return
      }
      axios.get(url)
      .then((data: Object): void => {
        this.setState({ weather: data.data.forecast.txt_forecast.forecastday })
      })
      .then((): void => { this.setState({ showWeatherView: true }) })
      .then((): void => { AsyncStorage.setItem('city', city) })
      .then((): void => { AsyncStorage.setItem('state', state) })
      .then((): void => { this.makeAPICallForCurrentTemp() })
      .catch((): void => { this.throwBogusDataErrorCity(city, state) })
    }

    if (this.state.view === 'us-zip') {
      const { zip } = this.state
      const url = `http://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${zip}.json`
      if (!zipCodeIsValid(zip)) {
        Alert.alert('Error: you must enter a valid five digit US zip code.')
        return
      }
      axios.get(url)
      .then((data: Object): void => {
        this.setState({ weather: data.data.forecast.txt_forecast.forecastday })
      })
      .then((): void => { this.setState({ showWeatherView: true }) })
      .then((): void => { AsyncStorage.setItem('zip', zip) })
      .then((): void => { this.makeZipAPICall() })
      .catch((): void => { this.throwBogusDataErrorZip(zip) })
    }
  }

  clearLocationState = (): void => {
    this.setState({ location: '' })
  }

  clearZipState = (): void => {
    this.setState({ zip: '' })
  }

  fillCityAndStateData = (): void => {
    AsyncStorage.getItem('city').then((city: string):void => {
      if (city) {
        this.setState({ location: capitalize(city) })
      } else {
        this.setState({ location: 'Austin' })
      }
    })
    AsyncStorage.getItem('state').then((state: string):void => {
      if (state) {
        this.setState({ state })
      } else {
        this.setState({ state: 'TX' })
      }
    }).then((): void => { this.makeAPICallForCurrentTemp() })
    AsyncStorage.getItem('zip').then((zip: string):void => {
      if (zip) {
        this.setState({ zip })
      } else {
        this.setState({ zip: '78745' })
      }
    })
  }

  hideWeatherView = (): void => {
    this.setState({ showWeatherView: false })
  }

  makeAPICallForCurrentTemp = (): void => {
    const city = this.state.location.toLowerCase();
    const state = this.state.state;
    const url = `http://api.wunderground.com/api/47fe8304fc0c9639/conditions/q/${state}/${city}.json`
    axios.get(url)
    .then((data: Object): Object => {
      const currentTemp = data.data.current_observation.temp_f
      this.setState({ currentTemp })
      return data
    })
    .then((data: Object): void => {
      const { zip } = data.data.current_observation.display_location
      this.setState({ zip })
    })
    .catch((err: string): void => { throw new Error(err) })
  }

  makeZipAPICall = (): void => {
    const { zip } = this.state
    const url = `http://api.wunderground.com/api/47fe8304fc0c9639/conditions/q/${zip}.json`
    axios.get(url)
    .then((data: Object): Object => {
      const { city } = data.data.current_observation.display_location
      const { state } = data.data.current_observation.display_location
      this.setState({ location: city })
      this.setState({ state })
      return { city, state }
    })
    .then((obj): void => {
      AsyncStorage.setItem('city', obj.city)
      AsyncStorage.setItem('state', obj.state)
    })
    .then((): void => { this.makeAPICallForCurrentTemp() })
    .catch((err: string): void => { throw new Error(err) })
  }

  thereIsData = (): boolean => {
    const { view, location } = this.state
    let result
    if (view === 'us-city-state' && location) {
      result = true
    } else {
      result = false
    }
    return result
  }

  throwBogusDataErrorCity = (city: string, state: string): void => {
    Alert.alert(`Error: ${capitalize(city)}, ${state} is not a valid location. Please try again.`)
  }

  throwBogusDataErrorZip = (zip: string): void => {
    Alert.alert(`Error: ${zip} is not a valid US zip code. Please try again.`)
  }

  render() {
    const { location, state, weather, view, zip, showWeatherView, currentTemp } = this.state
    let mode

    if (view === 'us-city-state') {
      mode = (
        <View>
          <Text style={styles.instructions}>
            --Choose your city and state (US only)--
          </Text>
          <View style={styles.locationInputContainer}>
            <TextInput
              placeholder="Enter City"
              placeholderTextColor={commonElements.placeholder.color}
              value={location || ''}
              style={styles.locationInput}
              onChangeText={(text) => { this.setState({ location: text }) }}
            />
            <TouchableOpacity
              onPress={this.clearLocationState}
            >
              <Image
                source={require('../images/cancel-circle.png')}
              />
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={state}
            onValueChange={(choice) => { this.setState({ state: choice }) }}
            style={styles.statePicker}
          >
            <Picker.Item label="Alabama" value="AL" />
            <Picker.Item label="Alaska" value="AK" />
            <Picker.Item label="Arizona" value="AZ" />
            <Picker.Item label="Arkansas" value="AR" />
            <Picker.Item label="California" value="CA" />
            <Picker.Item label="Colorado" value="CO" />
            <Picker.Item label="Connecticut" value="CT" />
            <Picker.Item label="Delaware" value="DE" />
            <Picker.Item label="District of Columbia" value="DC" />
            <Picker.Item label="Florida" value="FL" />
            <Picker.Item label="Georgia" value="GA" />
            <Picker.Item label="Hawaii" value="HI" />
            <Picker.Item label="Idaho" value="ID" />
            <Picker.Item label="Illinois" value="IL" />
            <Picker.Item label="Indiana" value="IN" />
            <Picker.Item label="Iowa" value="IA" />
            <Picker.Item label="Kansas" value="KS" />
            <Picker.Item label="Kentucky" value="KY" />
            <Picker.Item label="Louisiana" value="LA" />
            <Picker.Item label="Maine" value="ME" />
            <Picker.Item label="Maryland" value="MD" />
            <Picker.Item label="Massachusetts" value="MA" />
            <Picker.Item label="Michigan" value="MI" />
            <Picker.Item label="Minnesota" value="MN" />
            <Picker.Item label="Mississippi" value="MS" />
            <Picker.Item label="Missouri" value="MO" />
            <Picker.Item label="Montana" value="MT" />
            <Picker.Item label="Nebraska" value="NE" />
            <Picker.Item label="Nevada" value="NV" />
            <Picker.Item label="New Hampshire" value="NH" />
            <Picker.Item label="New Jersey" value="NJ" />
            <Picker.Item label="New Mexico" value="NM" />
            <Picker.Item label="New York" value="NY" />
            <Picker.Item label="North Carolina" value="NC" />
            <Picker.Item label="North Dakota" value="ND" />
            <Picker.Item label="Ohio" value="OH" />
            <Picker.Item label="Oklahoma" value="OK" />
            <Picker.Item label="Oregon" value="OR" />
            <Picker.Item label="Pennsylvania" value="PA" />
            <Picker.Item label="Rhode Island" value="RI" />
            <Picker.Item label="South Carolina" value="SC" />
            <Picker.Item label="South Dakota" value="SD" />
            <Picker.Item label="Tennessee" value="TN" />
            <Picker.Item label="Texas" value="TX" />
            <Picker.Item label="Utah" value="UT" />
            <Picker.Item label="Vermont" value="VT" />
            <Picker.Item label="Virginia" value="VA" />
            <Picker.Item label="Washington (state)" value="WA" />
            <Picker.Item label="West Virginia" value="WV" />
            <Picker.Item label="Wisconsin" value="WI" />
            <Picker.Item label="Wyoming" value="WY" />
          </Picker>
        </View>
      )
    }

    if (view === 'us-zip') {
      mode = (
        <View>
          <Text style={styles.instructions}>
            --Enter US Zip Code (5 digits only)--
          </Text>
          <View style={styles.zipInputContainer}>
            <TextInput
              placeholder="Enter Zip"
              placeholderTextColor={commonElements.placeholder.color}
              value={zip}
              onChangeText={(text) => { this.setState({ zip: text }) }}
              style={styles.zipInput}
            />
            <TouchableOpacity
              onPress={this.clearZipState}
            >
              <Image
                source={require('../images/cancel-circle.png')}
              />
            </TouchableOpacity>
          </View>
        </View>)
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.thereIsData() &&
          <CurrentWeather
            currentTemp={currentTemp}
            location={location}
          />
        }
        <View
          style={styles.topPart}
        >
          {mode}
          <Text style={styles.selectModeText}>Select Mode:</Text>
          <Picker
            selectedValue={view}
            style={styles.selectModeDropdown}
            onValueChange={(choice) => { this.setState({ view: choice }) }}
          >
            <Picker.Item label="US City and State" value="us-city-state" />
            <Picker.Item label="US Zip Code" value="us-zip" />
          </Picker>
          <View style={styles.mainButton}>
            <Button
              title="Get Weather"
              color={commonElements.button.color}
              onPress={() => { this.getWeather() }}
            />
          </View>
        </View>
        <ScrollView
          style={styles.weatherCardsList}
        >
          <Modal
            visible={showWeatherView}
            onRequestClose={() => { this.hideWeatherView() }}
          >
            <WeatherView
              weather={weather}
              location={location}
              state={state}
              view={view}
              zip={zip}
              hideWeatherView={this.hideWeatherView}
            />
          </Modal>
        </ScrollView>
        <PinnedCities />
      </ScrollView>
    );
  }

}

export default Main;
