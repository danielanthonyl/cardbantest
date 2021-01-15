import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  screen: {flex: 1, padding: wp('3%')},
  hr: {
    height: 1,
    maxWidth: '100%',
    backgroundColor: colors.black,
  },
});
