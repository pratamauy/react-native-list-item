import React, { useState } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Modal
} from 'react-native';

const DataInput = props => {

    const [dataInput, setDataInput] = useState('');

    const dataInputHandler = (inputText) => {
        setDataInput(inputText);
    }

    const addDataInputHandler = () => {
        props.onAddData(dataInput);
        setDataInput('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Di isi Bos!"
                    style={styles.input}
                    onChangeText={dataInputHandler}
                    value={dataInput}
                />
                <View style={styles.buttonContainer}>
                    <View>
                    <Button title="ADD" onPress={addDataInputHandler} />
                    </View>
                    <View></View>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%'
    },

    button:{
        width:'40%'
    }

});

export default DataInput; 