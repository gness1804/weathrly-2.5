import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../styles/weather-card-styles';

const WeatherCard = ({ ...props }: Object) => {
  const { icon_url, title, fcttext } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={{ uri: `${icon_url}` }} //eslint-disable-line
      />
      <Text style={styles.timePeriod}>Time Period: {title}</Text>
      <Text style={styles.forecast}>
        <Text style={styles.textSpan}>Forecast:</Text> {fcttext}</Text>
    </View>
  );
};

export default WeatherCard;
