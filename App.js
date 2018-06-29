/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Tabbar from './navigation/tabbar'

import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  componentDidMount() {
    // 1秒后关闭启动页
    setTimeout(()=>{SplashScreen.hide()}, 500);
  }

  render() {
    return (
      <Tabbar/>
    )
  }
}
