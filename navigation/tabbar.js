/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import {
  Image,
  View,
} from 'react-native';

import HomeView from '../page/home/home';
import OrderView from '../page/order/order';
import MineView from '../page/mine/mine';
import LoginView from '../page/login/login';
import AuthLoadingScreen from '../page/login/auth';
import AvatarExample from '../elements/avatar';
import ButtonExample from '../elements/button'
import CardExample from '../elements/card';

class NextScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    title: '测试',
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
      </View>
    );
  }
}

const navigationStyle = {
  navigationOptions: {
    headerBackTitle: null,
    headerBackImage: <Image style={{marginLeft: 13}} source={require('../image/back_icon.png')}/>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const HomeStack = createStackNavigator(
  {
    Home: HomeView,
    Next: NextScreen,
    Avatar: AvatarExample,
    Button: ButtonExample,
    Card: CardExample,
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

export default class Tabbar extends Component {
  render() {
    return (
      <MainStack/>
    );
  }
}

const TabbarStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Order: OrderStack,
    Mine: MineStack,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          if (routeName === 'Home') {
            iconName = require('../image/home_icon.png');
          } else if (routeName === 'Order') {
            iconName = require('../image/order_icon.png');
          } else if (routeName === 'Mine') {
            iconName = require('../image/mine_icon.png');
          }

          return <Image source={iconName}/>;
        },
      }
    },

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
    },
  }
);

const MainStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabbarStack,
    Auth: LoginView,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return hideTabbar(navigation);
};

OrderStack.navigationOptions = ({ navigation }) => {
  return hideTabbar(navigation);
};

MineStack.navigationOptions = ({ navigation }) => {
  return hideTabbar(navigation);
};

function hideTabbar(navigation) {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  }
}
