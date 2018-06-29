/**
 * Created by yanziyang on 2018/6/25.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

export default class LoginView extends Component {
  static navigationOptions = {
    title: '登录',
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    // fontSize: 20
  }
});
