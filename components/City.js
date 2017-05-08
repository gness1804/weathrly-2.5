// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    AsyncStorage,
} from 'react-native'
import AddCityView from './AddCityView';
import styles from '../styles/city-styles';

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

  componentDidMount = (): void => {
    const id = this.props.id.toString()
    AsyncStorage.getItem(`pinnedCity${id}-name`)
    .then((name) => { this.setState({ name }) })
    AsyncStorage.getItem(`pinnedCity${id}-state`)
    .then((state) => { this.setState({ state }) })
  }

  props: {
    id: number,
  }

  addCity = (city: string, state: string): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, city)
    .then(() => { this.setState({ name: city }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, state)
    .then(() => { this.setState({ state }) })
  }

  deleteCity = (): void => {
    const id = this.props.id.toString()
    AsyncStorage.setItem(`pinnedCity${id}-name`, '')
    .then(() => { this.setState({ name: '' }) })
    AsyncStorage.setItem(`pinnedCity${id}-state`, '')
    .then(() => { this.setState({ state: '' }) })
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
          <TouchableOpacity
            onPress={this.deleteCity}
          >
            <Image
              source={require('../images/cancel-circle.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
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
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
       )
    }
    return (
      <View style={styles.container}>
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
