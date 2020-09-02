import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreem = () => {
    const [ password, setPassword ] = useState('');
    const textWarning = <Text>password need to be greather then 5</Text>

    return (
        <View>
            <Text>Enter your password:</Text>
            <TextInput 
                style={styles.input}
                autoCaptalize="none"
                autoCorrect={false}
                onChangeText={newValue => setPassword(newValue)}
            />
            { password.length <= 5 && textWarning }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreem; 