import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {addTask, getTasks} from '../../axios/axios';
import ConfirmIcon from '../../components/Icons/ConfirmIcon';
import styles from './styles';

export default ({navigation}) => {
  const [titleInput, setTitleInput] = React.useState('');
  const [descriptionInput, setDescriptionInput] = React.useState('');
  const [dateInput, setDateInput] = React.useState('');

  const onPressHandler = async () => {
    const tasks = await getTasks();
    id = tasks.length + 1;

    const data = {
      id,
      title: titleInput,
      description: descriptionInput,
      date: dateInput,
      completed: false,
      created_at: '2020-12-14',
    };

    const response = await addTask(data);
    navigation.navigate('TaskList');
    return response;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.header}>Título</Text>
        <TextInput
          placeholder="Insira um titulo"
          style={styles.titleInput}
          value={titleInput}
          onChangeText={(value) => setTitleInput(value)}
        />
        <View style={styles.hr} />
      </View>

      <View>
        <Text>Descrição</Text>
        <TextInput
          placeholder="Insira uma descrição"
          value={descriptionInput}
          onChangeText={(value) => setDescriptionInput(value)}
        />
        <View style={styles.hr} />
      </View>

      <View>
        <Text>Data e hora de conclusão</Text>
        <TextInput
          placeholder="Insira uma data"
          value={dateInput}
          onChangeText={(value) => setDateInput(value)}
        />
        <View style={styles.hr} />
      </View>

      <ConfirmIcon onPress={onPressHandler} />
    </SafeAreaView>
  );
};
