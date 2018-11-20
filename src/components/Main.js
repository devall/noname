import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  }

  render() {
    console.tron.log("adsa");

    return (
      <View>
        <Text>Inshallah!</Text>
      </View>
    );
  }
}

export default Main;
