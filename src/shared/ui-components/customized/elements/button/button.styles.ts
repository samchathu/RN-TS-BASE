import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';
import commonColors from '../../../../styles/colors';

const styles = StyleSheet.create({
  blockButton: {
    width: '100%',
  },

  buttonSmall: {
    borderRadius: 5,
    height: scale(40),
  },

  buttonLarge: {
    borderRadius: 12,
    marginTop: scale(19),
    marginBottom: scale(19),
    height: scale(58),
  },

  borderButton: {
    borderWidth: scale(1),
    borderColor: commonColors.grayEDEBF5,
  },

  iconText: {
    marginLeft: scale(5),
  },
});

export default styles;
