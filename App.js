import React, { Component } from 'react';
import {
  Platform,
  StatusBar
} from 'react-native';

import Home from './components/Home'
import PlayLogic from './components/PlayLogic'
import Instructions from './components/Instructions'
import HighScore from './components/HighScore'

import {StackNavigator} from 'react-navigation';

// Example
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


StatusBar.setHidden(true);
const App = StackNavigator({
  Home: { screen:Home },
  PlayArea: { screen:PlayLogic },
  Instructions: { screen:Instructions },
  HighScore: { screen:HighScore }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

export default App;
