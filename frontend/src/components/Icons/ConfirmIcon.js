import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../constants/colors';

export default ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.circle}>
    <FontAwesomeIcon icon={faCheck} size={wp('6%')} color={colors.white} />
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
