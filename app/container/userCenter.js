/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Text
} from 'react-native';
import scale from '../util/adaptive'
import * as actions from '../actions/userCenter'

export class UserCenter extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserCenterInfo()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>UserCenter</Text>
      </View>
    );
  }
}


const styles =  scale({
  container: {
    top: 40
  }
})

export default connect(state => ({ data: state.userCenter }), actions)(UserCenter)