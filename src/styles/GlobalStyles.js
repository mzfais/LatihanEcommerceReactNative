import {Platform, StatusBar, StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
