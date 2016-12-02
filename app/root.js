import App from './container/app'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

const store = configureStore()
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root