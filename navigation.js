/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import StackNavigator from 'react-navigation';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StackNavigator/>
    );
  }
}