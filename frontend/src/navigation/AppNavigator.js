import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../constants/colors';

import TaskList from '../screens/TaskList';
import EditTask from '../screens/EditTask';
import AddTask from '../screens/AddTask';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const TASK_LIST_ROUTE = 'TaskList';
const EDIT_TASK_ROUTE = 'EditTask';
const ADD_TASK_ROUTE = 'AddTask';

const isIos = Platform.OS === 'ios';

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Lista de Tarefas',
          headerStyle: {backgroundColor: isIos ? colors.white : colors.blue},
          headerTintColor: isIos ? colors.blue : colors.white,
        }}
        name={TASK_LIST_ROUTE}
        component={TaskList}
      />

      <Stack.Screen
        options={{title: 'Edição da Tarefa'}}
        name={EDIT_TASK_ROUTE}
        component={EditTask}
      />

      <Stack.Screen
        options={{title: 'Adicionar Nova Tarefa'}}
        name={ADD_TASK_ROUTE}
        component={AddTask}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
