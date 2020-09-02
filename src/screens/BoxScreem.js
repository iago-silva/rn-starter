import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreem = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle} />
            <View style={styles.textTwoStyle} />
            <View style={styles.textThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
    },
    textOneStyle: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    },
    textTwoStyle: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        alignSelf: 'flex-end'
        
    },
    textThreeStyle: {
        backgroundColor: 'purple',
        height: 100,
        width: 100
    }
});

export default BoxScreem;