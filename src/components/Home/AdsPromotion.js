import {View, Text, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../styles/GlobalStyles';
const adsPromosi = require('../../../assets/ads.png');

const styles = StyleSheet.create({
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  pressableImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray',
  },
});
export default function AdsPromotion() {
  return (
    <View>
      <Text style={GlobalStyles.productTextHeader}>Promosi Minggu ini</Text>
      <FlatList
        style={{marginTop: 6}}
        data={Array(4)}
        keyExtractor={(item, index) => item + index.toString()}
        numColumns={2}
        renderItem={() => (
          <Pressable style={styles.pressableComponent}>
            <Image source={adsPromosi} style={styles.pressableImg} />
          </Pressable>
        )}
      />
    </View>
  );
}
