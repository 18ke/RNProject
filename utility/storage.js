/**
 * Created by yanziyang on 2018/6/27.
 */

import {
  AsyncStorage
} from 'react-native';

import Storage from 'react-native-storage';

let storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

global.storage = storage;
