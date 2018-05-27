import platform from './platform';
import { StyleSheet } from 'react-native';
import { isIOS, isAndroid } from '../utils/platform';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    width: '100%',
  },
  headline: {
    fontSize: 21,
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: 'pink'
  }
})