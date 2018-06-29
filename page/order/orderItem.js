/**
 * Created by yanziyang on 2018/6/25.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableHighlight,
} from 'react-native';

import px2dp from '/Users/yanziyang/AwesomeProject/utility/px2dp'
import ItemContent from './content';

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  _handlePress = () => {
    this.props.action();
  };

  render() {
    return (
    <TouchableHighlight style={{backgroundColor: '#fff'}} onPress={this._handlePress}>
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.image} />
          <ItemContent text={this.props.text}/>
        </View>
        <View style={styles.line} />
      </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    marginLeft: 10,
    backgroundColor: '#f00',
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 10,
    color: '#333333',
    fontSize: 26,
  },
  text: {
    margin: 10,
    color: '#666666',
    fontSize: 20,
  },
  line: {
    backgroundColor: '#e5e5e5',
    height: 1,
  },
});
