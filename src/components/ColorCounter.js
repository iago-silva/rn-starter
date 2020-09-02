import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colorName}</Text>
      <Button
        title={`Increase ${colorName}`}
        onPress={onIncrease} />
      <Button
        title={`Decrease ${colorName}`}
        onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
