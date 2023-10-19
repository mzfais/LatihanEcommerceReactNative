import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../views/screens/detail/Detail';
import HomeTabs from './tabs';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          options={{title: 'E-commerce | Detail', headerShown: true}}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
