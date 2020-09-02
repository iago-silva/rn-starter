import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
  const { type, payload } = action;

  if (payload < 0 || payload > 255)
    return state;

  switch (type) {
    case 'red':
      return { ...state, red: payload };
    case 'green':
      return { ...state, green: payload };
    case 'blue':
      return { ...state, blue: payload };
    default:
      return state;
  }
}

const SquareScreem = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      {/* 'type' and 'payload' are comunity conventions */}
      <ColorCounter
        colorName="red"
        onIncrease={() => dispatch({ type: 'red', payload: red + COLOR_INCREMENT }) }
        onDecrease={() => dispatch({ type: 'red', payload: red - COLOR_INCREMENT }) }
      />
      <ColorCounter
        colorName="green"
        onIncrease={() => dispatch({ type: 'green', payload: green + COLOR_INCREMENT }) }
        onDecrease={() => dispatch({ type: 'green', payload: green - COLOR_INCREMENT }) }
      />
      <ColorCounter
        colorName="blue"
        onIncrease={() => dispatch({ type: 'blue', payload: blue + COLOR_INCREMENT }) }
        onDecrease={() => dispatch({ type: 'blue', payload: blue - COLOR_INCREMENT }) }
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreem;
