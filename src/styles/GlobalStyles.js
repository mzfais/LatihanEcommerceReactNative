import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  productTextHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
