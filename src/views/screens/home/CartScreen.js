import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  cartItem: {
    marginHorizontal: 20,
    backgroundColor: '#ECECED',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cartItemLeft: {
    margin: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cartItemRight: {
    alignItems: 'center',
    margin: 0,
    flexDirection: 'row',
  },

  checkoutBtnContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },

  checkoutButton: {
    marginHorizontal: 20,
    borderRadius: 10,
  },

  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CartScreen(navigation) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Cart Screen</Text>
    </View>
  );
}
