/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import {
  Image,
  View
} from 'react-native';

import HomeView from '../page/home/home';
import OrderView from '../page/order/order';
import MineView from '../page/mine/mine';

class NextScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
      </View>
    );
  }
}

export default class Navigation extends Component {
  render() {
    return (
      <Tabbar />
    );
  }
}

class Tabbar extends Component {
  render() {
    return (
      <TabbarStack/>
    );
  }
}

const TabbarStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Order: OrderStack,
    Mine: MineStack,
  }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeView,
    Next: NextScreen
  },
  navigationStyle,
);

const OrderStack = createStackNavigator(
  {
    Order: OrderView,
    Next: NextScreen
  },
  navigationStyle,
);

const MineStack = createStackNavigator(
  {
    Mine: MineView,
    Next: NextScreen
  },
  navigationStyle,
);

const navigationStyle = {
  navigationOptions: {
    headerBackTitle: null,
    headerBackImage: <Image source={require('../image/back_icon.png')}/>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
