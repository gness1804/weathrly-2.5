// @flow

import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/header-styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Welcome to Weathrly</Text>
      <Text style={styles.tagline}>Your World, Your Weather.</Text>
      <TouchableOpacity
        onPress={() => { Linking.openURL('https://www.wunderground.com/') }}
      >
        <Image
          style={styles.pic}
          source={{ uri: 'https://icons.wxug.com/logos/PNG/wundergroundLogo_4c.png' }}
        />
      </TouchableOpacity>
      <Text style={styles.credit}>Data courtesy of Weather Underground.</Text>
    </View>
  );
}

export default Header;
