import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreem = () => {
  const [count, setCount] = useState(1);

  return (
    <View>
      <Button
        title="Go!"
        onPress={() => setCount(count + 1)} />

      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score={9} />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score={7} />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={10} />
    </View>
  );
};

const styles = StyleSheet.create({})

export default ImageScreem;

