import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 100,
    height: 50,
  },
});

export default function Category() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(10)).map((item, index) => (
          <IconButton
            key={index}
            icon={({size, color}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon name="home-outline" size={size} color={color} />
                <Text style={{fontSize: 12}}>Home</Text>
              </View>
            )}
            style={styles.iconButton}
          />
        ))}
      </ScrollView>
    </View>
  );
}
