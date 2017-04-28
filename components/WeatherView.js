// @flow

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
} from 'react-native';
import WeatherCard from './WeatherCard';
import styles from '../styles/weather-view-styles'

class WeatherView extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      weather: this.props.weather,
      view: this.props.view,
      location: this.props.location,
      state: this.props.state,
      zip: this.props.zip,
    }
  }

  state: {
      weather: Array<Object>,
      location: string,
      state: string,
      view: string,
      zip: string,
  }

  props: {
      weather: Array<Object>,
      location: string,
      state: string,
      view: string,
      zip: string,
      hideWeatherView: Function,
  }

  // thanks to this Stack Overflow post for this function: https://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
  capitalize = (location: string): string => {
    return location.toLowerCase().replace(/(^| )(\w)/g, (char: string) => {
      return char.toUpperCase();
    });
  }

  hideWeatherView = (): void => {
    this.props.hideWeatherView()
  }

  render() {
    const { weather, view, location, state, zip } = this.state
    let locale
    let list

    if (view === 'us-city-state') {
      locale = `${this.capitalize(location)}, ${state}`
    } else {
      locale = `${zip}`
    }

    if (weather) {
      list = weather.map((item: Object) => {
        return (<WeatherCard
          {...item}
          key={Date.now() * Math.random()}
        />)
      })
    } else {
      list = (<Text>
          Loading... (If this takes more than a few seconds, go back to the main view and try again.)
             </Text>)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Your Forecast For: {locale}</Text>
        <ScrollView>
          {list}
        </ScrollView>
        <Button
          title="Back to Home"
          onPress={this.hideWeatherView}
        />
      </View>
    );
  }
}

export default WeatherView
