import {View, Text, Button} from 'react-native';
import React from 'react';

export default function DetailScreen({route, navigation}) {
  const {itemId} = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button onPress={() => navigation.goBack()} title="Kembali ke Home" />
    </View>
  );
}
