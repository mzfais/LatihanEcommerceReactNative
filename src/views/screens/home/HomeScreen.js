import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
  LogBox,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import SearchBar from '../../../components/Global/SearchBar';
import CustomCarousel from '../../../components/Home/CustomCarousel';
import Category from '../../../components/Home/Category';
import AdsPromotion from '../../../components/Home/AdsPromotion';
import Popular from '../../../components/Home/Popular';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10, // jarak antar elemen 10px
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

const renderBottomPaddingForAndroid = () => {
  if (Platform.OS === 'android') {
    return <View style={{marginTop: '15%'}} />;
  }
};
export default function HomeScreen({navigation}) {
  useEffect(() => {
    // ignore pesan eror karena terdapat flatlist di dalam scrollview
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
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
    <ScrollView contentInset={{bottom: 50}}>
      <View style={styles.mainContainer}>
        <SearchBar />
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
        <CustomCarousel dataCarousel={dataCarousel} width={width} />
        <Category />
        <AdsPromotion />
        <Popular />
      </View>
      {/* tambah view kosong untuk menangani komponen paling bawah tertutup navigation saat di scroll ke bawah */}
      {renderBottomPaddingForAndroid()}
    </ScrollView>
  );
}
