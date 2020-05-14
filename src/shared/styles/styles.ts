import colors from './colors';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import commonColors from './colors';
import {scale} from '../ui-components/customized/utils/scale';

const {height, width} = Dimensions.get('window');

export const defaultStyles = StyleSheet.create({
  //Flex
  flex1: {
    flex: 1,
  },

  flexGrow1: {
    flexGrow: 1,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  alignCenter: {
    alignItems: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },

  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  //Container
  containerWhite: {
    backgroundColor: commonColors.white,
    flex: 1,
  },

  authWrapper: {
    backgroundColor: commonColors.white,
    padding: scale(28),
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },

  //Colors
  bgColorWhite: {
    backgroundColor: commonColors.white,
  },

  bgColorPrimary: {
    backgroundColor: commonColors.primary,
  },

  bgColorSecondary: {
    backgroundColor: commonColors.secondary,
  },

  colorPrimary: {
    color: commonColors.primary,
  },

  colorSecondary: {
    color: commonColors.secondary,
  },

  colorWhite: {
    color: commonColors.white,
  },

  //Fonts
  fontSize11: {
    fontSize: scale(11),
  },

  fontSize12: {
    fontSize: scale(12),
  },

  fontSize13: {
    fontSize: scale(13),
  },

  fontSize14: {
    fontSize: scale(14),
  },

  fontSize15: {
    fontSize: scale(15),
  },

  fontSize16: {
    fontSize: scale(16),
  },

  fontSize18: {
    fontSize: scale(18),
  },

  fontSize22: {
    fontSize: scale(22),
  },

  fontSize30: {
    fontSize: scale(30),
  },

  ActivityInForPrimaryBtn: {
    marginVertical: 30,
  },
});

export default defaultStyles;
