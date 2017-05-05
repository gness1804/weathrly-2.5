import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../styles/weather-card-styles';

const WeatherCard = ({ ...props }) => {
  const { icon_url, title, fcttext } = props
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
}

WeatherCard.propTypes = {
  icon_url: React.PropTypes.string,
  title: React.PropTypes.string,
  fcttext: React.PropTypes.string,
};

export default WeatherCard;
