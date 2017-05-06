// @flow

import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import capitalize from '../helpers/capitalize';
import styles from '../styles/current-weather-styles';

const CurrentWeather = ({ ...props }: Object) => {
  const { currentTemp, location } = props
  let degreeStyle
  if (currentTemp < 50) {
    degreeStyle = styles.cold
  } else if (currentTemp < 65) {
    degreeStyle = styles.chilly
  } else if (currentTemp < 80) {
    degreeStyle = styles.ideal
  } else {
    degreeStyle = styles.hot
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
          Current temperature in {capitalize(location)}:
      </Text>
      <Text style={degreeStyle}>{Math.round(currentTemp).toString()} &deg; F</Text>
    </View>
  )
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default CurrentWeather
