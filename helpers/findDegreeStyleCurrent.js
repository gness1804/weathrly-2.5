// @flow

import styles from '../styles/current-weather-styles';

const findDegreeStyle = (temp: number): Object => {
  let result
  if (temp < 50) {
    result = styles.cold
  } else if (temp < 65) {
    result = styles.chilly
  } else if (temp < 80) {
    result = styles.ideal
  } else {
    result = styles.hot
  }
  return result
}

export default findDegreeStyle
