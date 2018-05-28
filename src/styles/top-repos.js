import platform from './platform';
import { StyleSheet } from 'react-native';
import { isIOS, isAndroid } from '../utils/platform';
import { colors } from './index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  headline: {
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  repoItem: {
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    width: '100%'
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  repoWrapper: {
    marginLeft: 25,
    marginRight: 10,
    width: '80%'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '33%',
    paddingVertical: 10,
  },
  nextIcon: {
    width: 50,
    height: 50,
    padding: 15,
    resizeMode: 'center'
  }
});