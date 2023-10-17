import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
});
export default function HomeScreen({navigation}) {
  return (
    <View>
      <View>
        <Icon name="search" size={12} />
        <TextInput placeholder="Mau cari barang apa?" />
      </View>
    </View>
  );
}
