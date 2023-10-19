import {
  View,
  TextInput,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

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
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  listCategory: {
    paddingVertical: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(109, 125, 154, 0.08)',
    marginHorizontal: 5,
  },
  title: {
    // fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: 'gray',
  },
});
export default function HomeScreen({navigation}) {
  const {width} = useWindowDimensions();
  const dataCarousel = [
    {
      id: 1,
      imageUrl:
        'https://ae01.alicdn.com/kf/H8e5fa453783741189a6fc522345d1f02g.jpg_640x640Q90.jpg_.webp',
    },
    {
      id: 2,
      imageUrl:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/4/b2df8daa-8c86-4a0f-956e-fa39e093f211.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://s0.bukalapak.com/img/01488152992/s-463-463/270750f7_586e_4774_bda8_3b82ffcccbb2.jpg.webp',
    },
  ];
  return (
    <>
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
      <View style={{...styles.container, marginTop: 0}}>
        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Text style={{...category.title, color: 'rgba(53, 88, 225, 1)'}}>
                Populer
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Fashion Pria</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Fashion Wanita</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Fashion Anak</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Fashion Muslim</Text>
            </View>
            <View style={{...category.item, marginRight: 24}}>
              <Text style={category.title}>Asesoris</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
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
            />
          )}
        />
      </View>
    </>
  );
}
