import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./containers/Main"; 

const AppNavigator = createStackNavigator({
    Main: {
      screen: MainScreen
    }
  });
  
export default createAppContainer(AppNavigator);