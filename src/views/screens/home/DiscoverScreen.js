import {View, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function DiscoverScreen() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject} />
      <View style={{position: 'absolute', top: 100, left: 50}} />
    </View>
  );
}
