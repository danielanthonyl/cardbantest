import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.circle}>
    <FontAwesomeIcon icon={faPlus} size={wp('6%')} color={colors.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  circle: {
    marginLeft: 'auto',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: 500,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
