// @flow

import React from 'react';
import { ScrollView } from 'react-native'
import City from './City';
import styles from '../styles/pinned-city-styles';

const PinnedCities = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
    >
      <City
        id={1}
      />
      <City
        id={2}
      />
      <City
        id={3}
      />
    </ScrollView>
  );
}

export default PinnedCities;
