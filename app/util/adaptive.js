import { Dimensions, StyleSheet, PixelRatio } from 'react-native';

let { height, width } = Dimensions.get('window');

/*
 * iphone 5/5s 宽 320
 * iphone 6    宽 375
 *
 * */
let pr = PixelRatio.get();
let rate = width / 750; // 640 为设计图宽度;
function scale(styles) {
  Object.keys(styles).map(item => {
    let target = styles[item];
    Object.keys(target).map(elm => {
      if (elm !== 'flex' && target[elm] === 1) {
        target[elm] = StyleSheet.hairlineWidth
      } else if (target[elm] === +target[elm]) {
        target[elm] = target[elm] * rate
      } else if(elm === 'width' && typeof target[elm] === 'string'){
        target[elm] = width * ( +target[elm])
      }
    })
  })
  return StyleSheet.create(styles)
}

export default scale;
