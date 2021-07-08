import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Fb from './screens/fb';
import In from './screens/in';
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
  return (
  
      <AppContainer/>
   
  );

}
}


  const tabNavigator=createBottomTabNavigator({
    FaceBook:{screen:Fb},
    Instagram:{screen:In},
  })
  
  const AppContainer=createAppContainer(tabNavigator);

