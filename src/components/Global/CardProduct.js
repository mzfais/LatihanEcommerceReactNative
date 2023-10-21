import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
const kaosJpg = require('../../../assets/kaos.jpeg');

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginHorizontal: 6,
    marginVertical: 10,
  },
  // cardbody untuk menghilangkan warning terkait shadow akibat overflow hidden yang muncul jika diterapkan pada parent card
  cardBody: {
    overflow: 'hidden',
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  cardCover: {
    height: 150,
    borderRadius: 0,
  },
  cardTextLabel: {
    fontWeight: '500',
    fontSize: 16,
  },
});
export default function CardProduct() {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.cardBody}>
        <Card.Cover style={styles.cardCover} source={kaosJpg} />
        <Card.Content
          style={{
            padding: 6,
          }}>
          <Text style={styles.cardTextLabel}>Kaos</Text>
          <Text>Rp. 79.000</Text>
        </Card.Content>
      </View>
    </Card>
  );
}
