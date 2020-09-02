import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreem = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          console.log(count);
          setCount(count + 1);
          console.log(count);
        }} />
      <Button
        title="Decrease"
        onPress={() => setCount(count - 1)} />
      <Text>Current count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default CounterScreem;
