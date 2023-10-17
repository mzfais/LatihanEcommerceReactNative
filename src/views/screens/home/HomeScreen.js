import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper';

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
    paddingVertical: 6, // padding dibedakan agar textinput tidak tertutup elemen view
    paddingHorizontal: 10,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  searchInput: {
    paddingVertical: 1, // untuk menghindari elemen tidak terlihat di emulator android
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
    <View style={styles.container}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Icon name="search" size={12} />
        <TextInput
          placeholder="Mau cari barang apa?"
          style={styles.searchInput}
        />
      </View>
      <IconButton icon="menu" />
    </View>
  );
}
