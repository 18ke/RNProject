/**
 * Created by yanziyang on 2018/6/22.
 */

import {Dimensions} from 'react-native';

// device width/height
const deviceWidthDp = Dimensions.get('window').width;
// design width/height
const uiHeightPx = 375;

export default function px2dp(uiElementPx) {
  return uiElementPx *  deviceWidthDp / uiHeightPx;
}
