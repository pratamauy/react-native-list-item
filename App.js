import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';

import DataItem from './components/DataItem';
import DataInput from './components/DataInput';

export default function App() {

  const [addInput, setAddInput] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addInputHandler = addTitle => {
    setAddInput(
      currentAdd => [
        ...currentAdd,
        { id: Math.random().toString(), value: addTitle }
      ]);
    setIsAddMode(false);
  };

  const removeHandler = itemId => {
    setAddInput(
      currentAdd => {
        return currentAdd.filter((data) => data.id !== itemId);
      }
    );
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>

      <Button title="Add New Data" onPress={() => setIsAddMode(true)} />

      <DataInput
        visible={isAddMode}
        onAddData={addInputHandler}
        onCancel={cancelHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addInput}
        renderItem={itemData => (
          <DataItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeHandler.bind(this, itemData.item.id)}
          />
        )}
      />

    </View>
  );

}

const styles = StyleSheet.create({

  screen: {
    padding: 50
  },

});
