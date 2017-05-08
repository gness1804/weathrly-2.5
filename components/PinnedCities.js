// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native'

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
    return (
      <View>
        <Text>I am the pinned cities component.</Text>
      </View>
    );
  }
}

export default PinnedCities;
