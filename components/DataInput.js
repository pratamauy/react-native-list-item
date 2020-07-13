import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const DataInput = props => {

    const [dataInput, setDataInput] = useState('');

    const dataInputHandler = (inputText) => {
        setDataInput(inputText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Di isi Bos!"
                style={styles.input}
                onChangeText={dataInputHandler}
                value={dataInput}
            />
            <Button title="ADD" onPress={props.onAddData.bind(this, dataInput)} />
        </View>
    );

};

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

});

export default DataInput; 