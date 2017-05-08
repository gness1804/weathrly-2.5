// @flow

import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import capitalize from '../helpers/capitalize';
import styles from '../styles/current-weather-styles';
import formatTemp from '../helpers/formatTemp'
import findDegreeStyleCurrent from '../helpers/findDegreeStyleCurrent'

const CurrentWeather = ({ ...props }: Object) => {
  const { currentTemp, location } = props
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
          Current temperature in {capitalize(location)}:
      </Text>
      {currentTemp ? <Text style={findDegreeStyleCurrent(currentTemp)}>{formatTemp(currentTemp)} &deg; F</Text> : <Text>Loading...</Text>}
    </View>
  )
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default CurrentWeather
