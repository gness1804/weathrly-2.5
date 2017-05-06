// @flow

import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import capitalize from '../helpers/capitalize';

const CurrentWeather = ({ ...props }: Object) => {
  const { currentTemp, location } = props
  return (
    <View>
      <Text>Current temperature in {capitalize(location)}: </Text>
      <Text>{Math.round(currentTemp).toString()} degrees F.</Text>
    </View>
  )
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default CurrentWeather
