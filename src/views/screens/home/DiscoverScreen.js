import {View, StyleSheet, useWindowDimensions, Platform} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import {Card} from 'react-native-paper';

export default function DiscoverScreen() {
  const markers = [
    {
      coordinate: {latitude: 37.8025259, longitude: -122.4351431},
      title: 'Wekea Drop Store',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: {
        latitude: 37.7896386,
        longitude: -122.421646,
      },
      title: 'Wekea Drop Store 2',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: {latitude: 37.7665248, longitude: -122.4161628},
      title: 'Wekea Drop Store 3',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];
  const {width} = useWindowDimensions();
  const LATITUDE = 40.665364;
  const LONGITUDE = -74.213377;
  const LATITUDE_DELTA = 0.0043;
  const LONGITUDE_DELTA = 0.0034;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        // provider={
        //   Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        // }
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Carousel
          loop={false} // biar tidak looping
          width={width - 30}
          height={width / 2}
          autoPlay={false} // matikan autoplay
          data={markers}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            // <Text>{item.image}</Text>
            // <Image source={{uri: item.image}} />
            <Card>
              <Card.Cover source={{uri: item.image}} />
            </Card>
          )}
        />
      </View>
    </View>
  );
}
