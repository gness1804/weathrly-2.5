// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import City from './City';

class PinnedCities extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      cities: [],
    }
  }

  state: {
    cities: Array<Object>,
  }

  render() {
    // const { cities } = this.state
    return (
      <View>
        <City
          id="1"
        />
        <City
          id="2"
        />
        <City
          id="3"
        />
      </View>
    );
  }
}

export default PinnedCities;
