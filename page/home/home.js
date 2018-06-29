/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  SafeAreaView,
  Dimensions,
  Modal,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  ButtonGroup,
  Avatar,
} from 'react-native-elements';

import SplashScreen from 'react-native-splash-screen'

const defaultFun = () => {};

export default class HomeView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '首页',
      headerRight: (
        <Button
          title="下一页"
          onPress={ navigation.getParam('pushOrder') === undefined ? defaultFun : navigation.getParam('pushOrder')}
          color='#fff'
        />
      ),
    };

  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ pushOrder: this._handlePress });
    //3秒后关闭启动页
    // setTimeout(()=>{SplashScreen.hide()}, 1000);
    // SplashScreen.hide();
  }

  _handlePress = () => {
    this.props.navigation.navigate('Next', {
      itemId: 86,
      desc: 'some text'
    });
  };

  _handleUpdateTitle = () => {
    this.props.navigation.setParams({
      title: 'update',
    });
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  _hideModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  _buttonAction = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
    });

    switch (selectedIndex) {
      case 0:
      {
        this.props.navigation.navigate('Avatar');
      }
      break;
      case 1:
      {
        this.props.navigation.navigate('Button');
      }
      break;
      case 2:
      {
        this.props.navigation.navigate('Card');
      }
      break;
      case 3:
      {

      }
      break;
    }
  }
  ;

  render() {
    const {width, height, scale} = Dimensions.get('window');
    const buttons = ['Avatar', 'Button', 'Card', 'CheckBox'];
    return (
      <SafeAreaView style={styles.container}>

        <ButtonGroup
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
          onPress={this._buttonAction}
        />

        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              width: 182,
              height: 100,
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 6,
            }}>
              <Text style={{top: 15}}>Hello World!</Text>

              <TouchableHighlight onPress={this._hideModal}>
                <Text style={{top: 35}}>Hide Modal</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <Text>
          屏幕的宽度：{width + '\n'}
          屏幕的高度：{height + '\n'}
          屏幕的分辨率：{scale + '\n'}
        </Text>
        <Text style={styles.content}>home view</Text>
        <Button title="logout" onPress={this._signOutAsync}/>
        <Button title="show" onPress={this._showModal}/>
      </SafeAreaView>
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
