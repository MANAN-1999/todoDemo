import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Task from './src/component/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handelAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectinTitle}> Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task Text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskwrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a Task'}
          value={task}
          onChangeText={Text => setTask(Text)}
        />
        <TouchableOpacity onPress={() => handelAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectinTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 10,
  },
  writeTaskwrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#c0c0c0',
    width: 310,
    borderWidth: 1,
    alignItems: 'center',
    fontSize: 17,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
