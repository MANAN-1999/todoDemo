import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.Text}</Text>
      </View>
      <TouchableOpacity >
        <AntDesign name="delete" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontWeight:'bold',
    fontSize

  },
});
