import {View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        gap: 20,
        margin: 20,
      }}>
      <TextInput label="Email" />
      {/* mode="text" menampilkan button dalam mode text, contained seperti button */}
      <Button
        mode="contained"
        icon="arrow-right-circle"
        onPress={() => navigation.navigate('Detail', {itemId: 40})}>
        Menuju ke Detail
      </Button>
    </View>
  );
}
