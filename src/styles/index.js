import platform from './platform';
import { StyleSheet } from 'react-native';
import { isIOS, isAndroid } from '../utils/platform';

export const colors = {
  silver: '#F7F7F7',
  gray: '#666666',
  grayFC: '#FCFCFC',
  darkGray: '#333333',
  lightBlack: '#464646',
  grayLight: '#939393',
  grayFont: '#868686',
  silverLight: '#7A7A7A',
  grayBorder: '#DBDBDB',
  black: '#000000',
  lighterBlack: '#111111',
  opBlue: 'rgba(0, 160, 223, 0.86)',
  pink: '#F55183',
  purple: '#707FE7',
  green: '#74BE5B',
  teal: '#0E9D9F',
  yellow: '#FFC000',
  orange: '#FB8134',
  opBlack: 'rgba(0, 0, 0, 0.6)',
  opWhite: 'rgba(255, 255, 255, 0.9)',
  opWhiteLight: 'rgba(255, 255, 255, 0.6)',
  opGrey: 'rgba(34,34,34, 0.9)',
  transparent: 'rgba(255, 255, 255, 0)',
  opGray: 'rgba(0,0,0,0.3)',
  deleteOverlay: 'rgba(110, 110, 110, 0.6)',
  lightGray: '#B5B5B5',
  redError: '#d0021b',
  orangeMaterial: '#F4511E',
  greenMaterial: '#009688',
  hokiMaterial: '#607D8B',
  gainsboroMaterial: '#DADADA',
  mtgThick: '#D8D8D8',
  silverMaterial: '#B7B7B7',
  darkSilver: '#898989',
  borderSilver: '#E6E6E6',
  whiteMaterial: '#FAFAFA',
  neroMaterial: '#202020',
  lightGrayEC: '#ececec',
  lightGrayMTG: '#9C9C9C',
  darkGrey: '#222222',
  borderGrey: '#cccccc',
  fontGrey: '#555555',
  formGhostFont: '#AAAAAA',
  noteText: '#777777',
  actionBar: '#F3F3F3',
  selectedRowColor: 'rgba(21, 171, 255, 0.2)',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.whiteMaterial,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  searchContainer: {
    width: '95%',
    marginTop: isIOS ? 22.7 : 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 8,
    backgroundColor: 'orange'
  },
  searchField: {
    flex: 1,
    fontSize: 16
  },
  searchIcon: {
    marginHorizontal: 5,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  cancelIcon: {
    width: 12,
    height: 12,
  },
  headline: {
    fontSize: 20,
    fontWeight: '500',
    margin: 15,
    textAlign: 'center',
  }
});