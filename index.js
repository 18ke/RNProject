import { AppRegistry } from 'react-native';
import './utility/storage';
import App from './App';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('AwesomeProject', () => App);
