// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
} from 'react-native'
import AddCityView from './AddCityView';

class City extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      name: '',
      state: '',
      showAddCityView: false,
    }
  }

  state: {
    name: string,
    state: string,
    showAddCityView: boolean,
  }

  addCity = (city: string, state: string): void => {
    this.setState({ name: city })
    this.setState({ state })
  }

  hideAddCityView = (): void => {
    this.setState({ showAddCityView: false })
  }

  showAddCityView = (): void => {
    this.setState({ showAddCityView: true })
  }

  render() {
    const { name, state, showAddCityView } = this.state
    let view
    if (name) {
      view = (
        <View>
          <Text>{name}</Text>
          <Text>{state}</Text>
        </View>
       )
    } else {
      view = (
        <View>
          <Text>Add City</Text>
          <TouchableOpacity
            onPress={this.showAddCityView}
          >
            <Image
              source={require('../images/plus-icon-small.png')}
            />
          </TouchableOpacity>
        </View>
       )
    }
    return (
      <View>
        <Modal
          visible={showAddCityView}
          onRequestClose={() => { this.hideAddCityView() }}
        >
          <AddCityView
            addCity={this.addCity}
            hideAddCityView={this.hideAddCityView}
          />
        </Modal>
        {view}
      </View>
    );
  }
}

export default City;
