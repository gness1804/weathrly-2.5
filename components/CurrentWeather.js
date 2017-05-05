// @flow

import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

const CurrentWeather = ({ ...props }: Object) => {
  const { currentTemp } = props
  return (
    <View>
      <Text>Current temperature: </Text>
      <Text>{Math.floor(currentTemp).toString()} degrees F.</Text>
    </View>
  )
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
};

export default CurrentWeather
