/**
 * Created by yanziyang on 2018/6/22.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import OrderItem from './orderItem';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class OrderView extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: '订单',
      headerRight: (
        <Button
          title="我的"
          onPress={ () => navigation.navigate('MyModal') }
          color='#fff'
        />
      ),
    };
  };

  _handlePress = () => {
    this.props.navigation.navigate('Next');
  };

  _refreshing(){
    let timer =  setTimeout(()=>{
      clearTimeout(timer);
      alert('刷新成功')
    },1500)
  }
  _onload(){
    let timer =  setTimeout(()=>{
      clearTimeout(timer);
      alert('加载成功')
    },1500)
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', "NO-ID");
    const desc = navigation.getParam('desc', 'oh my god!oh my god oh my godoh my godoh my godoh my godoh my godoh my god');

    return (
      <SafeAreaView style={styles.container}>
        <SwipeListView
          useFlatList
          data={[
            {key: JSON.stringify(itemId), action: this._handlePress},
            {key: desc, action: this._handlePress},
            {key: 'My name is James, and I am a good man. Do you like me?', action: this._handlePress},
            {key: 'Joel', action: this._handlePress},
            {key: 'John', action: this._handlePress},
            {key: 'Jillian', action: this._handlePress},
            {key: 'Jimmy', action: this._handlePress},
            {key: 'Julie', action: this._handlePress},
          ]}
          refreshing={false}
          onRefresh={this._refreshing}
          // onEndReached={this._onload}
          renderItem={({item}) => <OrderItem text={item.key} action={item.action}/>}
          style={styles.list}
          recalculateHiddenLayout={true}
          renderHiddenItem={ (rowData, rowMap) => {
            return (
            <View style={styles.rowBack}>
              <Text>left</Text>
              <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={ _ => rowMap[rowData.item.key].closeRow() }>
                <Text style={{color: '#fff'}}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => rowMap[rowData.item.key].closeRow() }>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>

            );
          }}
          disableRightSwipe={true}
          rightOpenValue={-150}
        />
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0
  },
});
