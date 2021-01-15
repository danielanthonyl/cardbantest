import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {getTasks} from '../../axios';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import moment from 'moment';

export default (props) => {
  const [tasks, setTasks] = React.useState([]);
  const [checkedTasks, setCheckedTasks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await getTasks();
      setTasks(response);
    })();
  }, [tasks]);

  const onPressHandler = (id, title, description, date) => {
    props.navigation.navigate('EditTask', {
      data: {
        id,
        title,
        description,
        date,
      },
    });
  };

  const handleChange = (value, id) => {
    console.log(value);
    if (value) return setCheckedTasks([...checkedTasks, id]);
    return setCheckedTasks(checkedTasks.filter((x) => x !== id));
  };

  return tasks.map(({id, title, description, date}) => {
    const dateSplit = date.split(' ');
    moment.locale('br');
    const time = moment(dateSplit[0]).format('ddd, MMM DD YYYY');

    return (
      <View
        onPress={() => onPressHandler(id, title, description, date)}
        key={id}
        style={styles.task}>
        <CheckBox
          value={checkedTasks.includes(id)}
          onValueChange={(value) => {
            handleChange(value, id);
          }}
        />
        <TouchableOpacity style={styles.taskTextContainer}>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <Text>{time}</Text>
        </TouchableOpacity>
      </View>
    );
  });
};
