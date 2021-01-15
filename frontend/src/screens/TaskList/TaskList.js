import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PlusIcon from '../../components/Icons/PlusIcon';
import Task from '../../components/Task';

import styles from './styles';

export default ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('AddTask');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Task navigation={navigation} />
      </ScrollView>
      <PlusIcon onPress={onPressHandler} />
    </SafeAreaView>
  );
};
