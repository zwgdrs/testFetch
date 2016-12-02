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
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Text,
  Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'
import Around from './around'
import BookCenter from './bookCenter'
import Home from './home'
import UserCenter from './userCenter'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          title="主页"
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../imgs/ic_tab_home.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_home_press.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="书籍中心"
          selected={this.state.selectedTab === 'bookCenter'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../imgs/ic_tab_order.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_order_press.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'bookCenter' })}>
          <BookCenter {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="周围"
          selected={this.state.selectedTab === 'around'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../imgs/ic_tab_cart.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_cart_press.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'around' })}>
          <Around {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="用户中心"
          selected={this.state.selectedTab === 'userCenter'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../imgs/ic_tab_center.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_center_press.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'userCenter' })}>
          <UserCenter {...this.props}/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
const styles=StyleSheet.create({
  iconStyle:{
    width:26,
    height:26,
  },
  textStyle:{
    color:'#999',
  },
  selectedTextStyle:{
    color:'black',
  }
});

export default App
