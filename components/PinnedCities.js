// @flow

import React from 'react';
import { View } from 'react-native'
import City from './City';
import styles from '../styles/pinned-city-styles';

const PinnedCities = () => {
  return (
    <View style={styles.container}>
      <City
        id={1}
      />
      <City
        id={2}
      />
      <City
        id={3}
      />
    </View>
  );
}

export default PinnedCities;
