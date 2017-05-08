// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    AsyncStorage,
} from 'react-native'
import AddCityView from './AddCityView';
import styles from '../styles/city-styles';
import axios from 'axios';

class City extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      name: '',
      state: '',
      showAddCityView: false,
      currentTemp: 0,
    }
  }

  state: {
    name: string,
    state: string,
    showAddCityView: boolean,
    currentTemp: number,
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

  props: {
    id: number,
  }

  addCity = (city: string, state: string): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, city)
    .then(() => { this.setState({ name: city }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, state)
    .then(() => { this.setState({ state }) })
  }

  deleteCity = (): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, '')
    .then(() => { this.setState({ name: '' }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, '')
    .then(() => { this.setState({ state: '' }) })
  }

  hideAddCityView = (): void => {
    this.setState({ showAddCityView: false })
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
    .catch((err: string): void => { throw new Error(err) })
  }

  showAddCityView = (): void => {
    this.setState({ showAddCityView: true })
  }

  render() {
    const { name, state, showAddCityView, currentTemp } = this.state
    let view
    if (name) {
      view = (
        <View>
          <Text>{name}</Text>
          <Text>{state}</Text>
          <Text>{Math.round(currentTemp).toString()} &deg; F</Text>
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
      </View>
    );
  }
}

export default City;
