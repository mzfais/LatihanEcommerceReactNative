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
import {Card, IconButton} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
const kaosJpg = require('../../../../assets/kaos.jpeg');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10, // jarak antar elemen 10px
  },
  searchBarContainer: {
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
    // marginHorizontal: 5,
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
    paddingVertical: 6,
  },
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 100,
    height: 50,
  },
  productTextHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 150,
    marginRight: 12,
    // overflow: 'hidden',
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
    fontWeight: 500,
    fontSize: 16,
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
    <View style={styles.mainContainer}>
      {/* searchbar component */}
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Icon name="search" size={12} />
          <TextInput
            placeholder="Mau cari barang apa?"
            style={styles.searchInput}
          />
        </View>
        <IconButton icon="menu" />
      </View>
      {/* mini list category component */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={category.item}>
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
          <View style={{...category.item, marginRight: 16}}>
            <Text style={category.title}>Asesoris</Text>
          </View>
        </ScrollView>
      </View>
      {/* carousel component */}
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
      {/* category component */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from(Array(10)).map(index => (
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
      {/* Product component */}
      <View>
        <Text style={styles.productTextHeader}>Terbaru</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 10}}>
          {Array.from(Array(10)).map(index => (
            <Card key={index} style={styles.cardContainer}>
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
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
