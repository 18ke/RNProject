/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  Alert,
} from 'react-native';

class FadeInView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Animated.View
        style={{
          opacity: this.props.fadeAnim,
          width: 250,
          height: 50,
          backgroundColor: 'powderblue'
        }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </Animated.View>
    );
  }
}

export default class MineView extends Component {
  static navigationOptions = {
    title: '我的',
  };

  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  _showView = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
      },
    ).start();
  };

  _hideView = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
      },
    ).start();
  };

  _saveData = () => {
    storage.save({
      key: 'someData',
      data: {
        name: 'yzy',
        age: '21',
      },
    });
  };

  _loadData = () => {
    storage.load({
      key: 'someData',
      syncInBackground: true,
    }).then(result => {
      Alert.alert(result.name, result.age);
    }).catch(error => {

    });
  };

  _updateData = () => {
    storage.load({
      key: 'someData',
    }).then(result => {
      newData = {...result, age: '23'};
      storage.save({
        key: 'someData',
        data: newData,
      });
    }).catch(error => {

    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>mine view</Text>
        <Button title="save" onPress={this._saveData}/>
        <Button title="load" onPress={this._loadData}/>
        <Button title="update" onPress={this._updateData}/>
        <Button title="show" onPress={this._showView}/>
        <Button title="hide" onPress={this._hideView}/>
        <FadeInView fadeAnim={this.state.fadeAnim}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    height: 30,
    fontSize: 20,
    justifyContent: 'center',
  },

});