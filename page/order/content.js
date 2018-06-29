/**
 * Created by yanziyang on 2018/6/25.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class ItemContent extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <View style={styles.content}>
        <Text style={styles.title}>{'title'}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.line} />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    color: '#333333',
    fontSize: 26,
  },
  text: {
    margin: 10,
    color: '#666666',
    fontSize: 20,
  },
});
