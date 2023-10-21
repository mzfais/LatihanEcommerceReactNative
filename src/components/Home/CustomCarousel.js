import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default function CustomCarousel({dataCarousel, width}) {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        loop={false} // biar tidak looping
        width={width - 30}
        height={width / 2}
        autoPlay={false} // matikan autoplay
        data={dataCarousel}
        pagingEnabled={true}
        scrollAnimationDuration={1000}
        // onSnap event saat item di scroll
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => (
          <Image
            style={styles.imageCarousel}
            source={{
              uri: item.imageUrl,
            }}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
}
