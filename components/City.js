// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    AsyncStorage,
    Alert,
} from 'react-native'
import axios from 'axios';
import AddCityView from './AddCityView';
import formatTemp from '../helpers/formatTemp'
import styles from '../styles/city-styles';
import findDegreeStyleCity from '../helpers/findDegreeStyleCity'
import capitalize from '../helpers/capitalize';
import WeatherView from './WeatherView'

class City extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      name: '',
      state: '',
      showAddCityView: false,
      showWeatherView: false,
      currentTemp: 0,
      fullForecast: [],
    }
  }

  state: {
    name: string,
    state: string,
    showAddCityView: boolean,
    showWeatherView: boolean,
    currentTemp: number,
    fullForecast: Array<Object>,
  }

  componentDidMount = (): void => {
    const id = this.props.id.toString()
    AsyncStorage.getItem(`pinnedCity${id}-name`)
    .then((name: string): void => { this.setState({ name }) })
    AsyncStorage.getItem(`pinnedCity${id}-state`)
    .then((state: string): void => { this.setState({ state }) })
    .then(() => {
      if (this.state.name && this.state.state) {
        this.makeAPICall()
      }
    })
  }

  addCity = (city: string, state: string): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, city)
    .then(() => { this.setState({ name: city }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, state)
    .then(() => { this.setState({ state }) })
    .then(() => { this.makeAPICall() })
  }

  deleteCity = (): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, '')
    .then(() => { this.setState({ name: '' }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, '')
    .then(() => { this.setState({ state: '' }) })
  }

  getFullForecast = (): void => {
    const city = this.state.name.toLowerCase();
    const state = this.state.state;
    const url = `http://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${state}/${city}.json`
    if (!city || !state) {
      Alert.alert('Error: you must enter both a city and a state.')
      return
    }
    axios.get(url)
    .then((data: Object): void => {
      this.setState({ fullForecast: data.data.forecast.txt_forecast.forecastday })
    })
    .then((): void => { this.setState({ showWeatherView: true }) })
    .catch((err: string): void => { throw new Error(err) })
  }

  props: {
    id: number,
  }

  hideAddCityView = (): void => {
    this.setState({ showAddCityView: false })
  }

  hideWeatherView = (): void => {
    this.setState({ showWeatherView: false })
  }

  makeAPICall = (): void => {
    const city = this.state.name.toLowerCase();
    const state = this.state.state;
    const url = `http://api.wunderground.com/api/47fe8304fc0c9639/conditions/q/${state}/${city}.json`
    axios.get(url)
    .then((data: Object): void => {
      const currentTemp = data.data.current_observation.temp_f
      this.setState({ currentTemp })
    })
    .catch((): void => { this.throwBogusDataError(city, state) })
  }

  showAddCityView = (): void => {
    this.setState({ showAddCityView: true })
  }

  throwBogusDataError = (city: string, state: string): void => {
    Alert.alert(`Error: ${capitalize(city)}, ${state} is not a valid location. Please try again.`)
    this.deleteCity()
  }

  render() {
    const { name, state, showAddCityView, currentTemp, showWeatherView, fullForecast } = this.state
    let view
    if (name) {
      view = (
        <View>
          <Text style={styles.name} onPress={this.getFullForecast}>{capitalize(name)},</Text>
          <Text style={styles.state}>{state}</Text>
          {currentTemp ? <Text style={findDegreeStyleCity(currentTemp)}>{formatTemp(currentTemp)} &deg; F</Text> : <Text>Loading...</Text>}
          <TouchableOpacity
            onPress={this.deleteCity}
          >
            <Image
              source={require('../images/cancel-circle.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
       )
    } else {
      view = (
        <View>
          <Text>Add City</Text>
          <TouchableOpacity
            onPress={this.showAddCityView}
          >
            <Image
              source={require('../images/plus-icon-small.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
       )
    }
    return (
      <View style={styles.container}>
        <Modal
          visible={showAddCityView}
          onRequestClose={() => { this.hideAddCityView() }}
        >
          <AddCityView
            addCity={this.addCity}
            hideAddCityView={this.hideAddCityView}
          />
        </Modal>
        {view}
        <Modal
          visible={showWeatherView}
          onRequestClose={() => { this.hideWeatherView() }}
        >
          <WeatherView
            weather={fullForecast}
            location={name}
            state={state}
            view="us-city-state"
            hideWeatherView={this.hideWeatherView}
          />
        </Modal>
      </View>
    );
  }
}

export default City;
