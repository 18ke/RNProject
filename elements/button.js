/**
 * Created by yanziyang on 2018/6/28.
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

export default class ButtonExample extends Component {
  static navigationOptions = {
    title: 'button',
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f5f4f2', justifyContent: 'center'}}>
        <Button
          raised
          iconRight={{name: 'play', size: 32, type: 'font-awesome'}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 6}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
          onPress={() => console.log("Works!")}
          // iconComponent={<Image source={require('../image/home_icon.pgn')}/>}
        />
      </View>
    );
  }
}