import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../styles/GlobalStyles';
import CardProduct from '../Global/CardProduct';

export default function Popular() {
  return (
    <View>
      <Text style={GlobalStyles.productTextHeader}>Terlaris</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(10)).map((item, index) => (
          <CardProduct key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
