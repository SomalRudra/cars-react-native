import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export function normalizeWidth(width:number) {
  const ratio = (width / 360) * SCREEN_WIDTH;
  return ratio;
}

export function normalizeHeight(height:number) {
  const ratio = (height / 800) * SCREEN_HEIGHT;
  return ratio;
}

export function getScreenWidth() {
  return SCREEN_WIDTH;
}

export function getScreenHeight() {
  return SCREEN_HEIGHT;
}

export function normalizeCircularRadius(height:number, width:number) {
  const heightN = normalizeHeight(height);
  const widthN = normalizeWidth(width);
  const mean = (heightN + widthN) / 2;
  const radius = normalizeHeight(mean / 2);
  return radius;
}