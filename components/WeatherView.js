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
    }
  }

  state: {
      weather: Array<Object>,
  }

  props: {
      weather: Array<Object>,
  }

  render() {
    const { weather } = this.state
    const list = weather.map((item: Object) => {
      return (<WeatherCard
        {...item}
        key={Date.now() * Math.random()}
      />)
    })
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headline}>Your Forecast For: </Text>
        {list}
      </ScrollView>
    );
  }
}

export default WeatherView
