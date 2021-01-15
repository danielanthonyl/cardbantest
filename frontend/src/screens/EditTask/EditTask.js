import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrashIcon from '../../components/Icons/TrashIcon';

import {deleteTask, updateTask} from '../../axios/axios';
import ConfirmIcon from '../../components/Icons/ConfirmIcon';
import styles from './styles';

export default ({route, navigation}) => {
  const {id, title, description, date} = route.params.data;
  const [titleInput, setTitleInput] = React.useState(title);
  const [descriptionInput, setDescriptionInput] = React.useState(description);
  const [dateInput, setDateInput] = React.useState(date);
  const [checked, setChecked] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TrashIcon onPress={deleteTaskHandler} />,
    });
  }, [navigation]);

  const deleteTaskHandler = async () => {
    const response = await deleteTask(id);
    navigation.navigate('TaskList');
    return response;
  };

  const editTaskHandler = async () => {
    const data = {
      title: titleInput,
      description: descriptionInput,
      date: dateInput,
      completed: checked,
      created_at: date,
    };
    const response = await updateTask(data);
    console.log(response);
    navigation.navigate('TaskList');
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
          value={descriptionInput}
          onChangeText={(value) => setDescriptionInput(value)}
        />
        <View style={styles.hr} />
      </View>

      <View>
        <Text>Data e hora de conclusão</Text>
        <TextInput
          value={dateInput}
          onChangeText={(value) => setDateInput(value)}
        />
        <View style={styles.hr} />
      </View>

      <View>
        <CheckBox value={checked} onValueChange={() => setChecked(!checked)} />
        <Text>Completada?</Text>
      </View>
      <ConfirmIcon onPress={editTaskHandler} />
    </SafeAreaView>
  );
};
