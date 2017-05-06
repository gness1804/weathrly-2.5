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
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
          Current temperature in {capitalize(location)}:
      </Text>
      <Text style={styles.degreeReadout}>{Math.round(currentTemp).toString()} &deg; F</Text>
    </View>
  )
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default CurrentWeather
