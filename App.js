import React from 'react';
import CustomSafeArea from './src/components/CustomSafeArea';
import Routes from './src/routes';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  return (
    <CustomSafeArea>
      <PaperProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <Routes />
        </GestureHandlerRootView>
      </PaperProvider>
    </CustomSafeArea>
  );
}
