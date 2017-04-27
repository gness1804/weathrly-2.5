import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../styles/weather-card-styles';

const WeatherCard = ({ ...props }) => {
  const pic = props.icon_url
  return (
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={{ uri: `${pic}` }}
      />
      <Text style={styles.timePeriod}>Time Period: {props.title}</Text>
      <Text style={styles.forecast}>
        <Text style={styles.textSpan}>Forecast:</Text> {props.fcttext}</Text>
    </View>
  );
}

export default WeatherCard;
