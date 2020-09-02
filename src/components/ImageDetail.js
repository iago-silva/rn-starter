import React, {useState} from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
  const [count, setCount] = useState(1);

  console.log('opa');

  return (
    <View>
      <Button
        title="Go!"
        onPress={() => setCount(count + 1)} />
      <Text>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ImageDetail;
