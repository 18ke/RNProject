/**
 * Created by yanziyang on 2018/6/28.
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Card,
  ListItem,
  Button,
} from 'react-native-elements';

export default class CardExample extends Component {
  static navigationOptions = {
    title: 'card',
  };

  render() {
    const users = [
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },

    ];
    return (
      <Card title="CARD WITH DIVIDER">
        {
          users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })
        }
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});