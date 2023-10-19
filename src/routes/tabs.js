import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/screens/home/HomeScreen';
import FavoriteScreen from '../views/screens/home/Favorite';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true, // tampilkan header title
        tabBarShowLabel: false, // sembunyikan label pada bottom tab
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 15,
          borderTopWidth: 0,
          backgroundColor: 'rgba(34,36,40,1)',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'lightgray',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Ecommerce | Home', // title pada header
          tabBarLabel: 'Home', // title pada bottom tab
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Favourite',
          tabBarLabel: 'Favourite',
        }}
        name="Favorite"
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
}
