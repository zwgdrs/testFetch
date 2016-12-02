/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Root from './app/root'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class testFetch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('testFetch', () => testFetch);
