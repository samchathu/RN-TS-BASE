import {StyleSheet} from 'react-native';
import commonColors from '../../../../styles/colors';
import {scale} from '../../utils/scale';

const styles = StyleSheet.create({
  tesInput: {
    width: '100%',
    height: scale(40),
    borderBottomColor: commonColors.grayF2F2F2,
    borderBottomWidth: 1,
  },
});

export default styles;
