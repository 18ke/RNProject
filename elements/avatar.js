/**
 * Created by yanziyang on 2018/6/27.
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {
  Avatar
} from 'react-native-elements';



export default class AvatarExample extends Component {
  static navigationOptions = {
    title: 'avatar',
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f5f4f2'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Avatar
            small
            rounded
            // title="MT"
            icon={{name: 'home'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{backgroundColor: 'red'}}
          />
          <Avatar
            medium
            // title="BP"
            source={{uri: '../image/home_icon.png'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            large
            // title="LW"
            onPress={() => console.log("Works!")}
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
            activeOpacity={0.7}
          />
          <Avatar
            xlarge
            rounded
            title="CR"
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>

      </View>
    );
  }
}
