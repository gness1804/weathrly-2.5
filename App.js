import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles/App-styles';
// import Header from './components/Header';
// import Main from './components/Main';

export default class App extends React.Component {
   render() {
    return (
      <View style={styles.container}>
        <Text>Hello world. Header and Main go here.</Text>
      </View>
    );
  }
}
