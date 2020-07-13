import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import DataItem from './components/DataItem';
import DataInput from './components/DataInput';

export default function App() {

  const [addInput, setAddInput] = useState([]);

  const addInputHandler = addTitle => {
    setAddInput(
      currentAdd => [
        ...currentAdd,
        { id: Math.random().toString(), value: addTitle }
      ]);
  };

  const removeHandler = itemId => {
    setAddInput(
      currentAdd => {
        return currentAdd.filter((data) => data.id !== itemId);
      }
    );
  };

  return (
    <View style={styles.screen}>

      <DataInput onAddData={addInputHandler} />

      {/* <ScrollView>
        {
          addInput.map((add) =>
            <View key={add} style={styles.listItem}>
              <Text>{add}</Text>
            </View>
          )
        }
      </ScrollView> */}

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
