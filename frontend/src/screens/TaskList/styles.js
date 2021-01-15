import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  screen: {
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('2%'),
    flex: 1,
  },
});
