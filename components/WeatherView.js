// @flow

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
} from 'react-native';
import WeatherCard from './WeatherCard';
import styles from '../styles/weather-view-styles';
import commonElements from '../styles/commonElements';
import capitalize from '../helpers/capitalize'

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

  hideWeatherView = (): void => {
    this.props.hideWeatherView()
  }

  render() {
    const { weather, view, location, state, zip } = this.state
    let locale
    let list

    if (view === 'us-city-state') {
      locale = `${capitalize(location)}, ${state}`
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
          Loading... (If this takes more than a few seconds, go back to the home view and try again.)
             </Text>)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Your Forecast For: {locale}</Text>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {list}
        </ScrollView>
        <View style={styles.homeButton}>
          <Button
            title="Back to Home"
            onPress={this.hideWeatherView}
            color={commonElements.button.color}
          />
        </View>
      </View>
    );
  }
}

export default WeatherView
