// @flow

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native'
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
  }

  render() {
    const { weather, view, location, state, zip } = this.state
    let locale
    if (view === 'us-city-state') {
      locale = `${location}, ${state}`
    } else {
      locale = `${zip}`
    }
    const list = weather.map((item: Object) => {
      return (<WeatherCard
        {...item}
        key={Date.now() * Math.random()}
      />)
    })
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headline}>Your Forecast For: {locale}</Text>
        {list}
      </ScrollView>
    );
  }
}

export default WeatherView
