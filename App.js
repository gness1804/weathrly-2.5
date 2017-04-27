import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles/App-styles';
import Header from './components/Header';
// import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}
