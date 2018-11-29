import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main',
  }

  render() {

    return (
      <View>
        <Text>Inshallah!</Text>
      </View>
    );
  }
}

export default MainScreen;
