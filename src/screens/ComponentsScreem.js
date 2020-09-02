import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreem = () => {
  const name = 'Iago'

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Natice</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreem
