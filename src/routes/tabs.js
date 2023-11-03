import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/screens/home/HomeScreen';
import CartScreen from '../views/screens/home/CartScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductScreen from '../views/screens/home/ProductScreen';
import DiscoverScreen from '../views/screens/home/DiscoverScreen';

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
          headerTitle: 'Omah Klambi Yunita | Home', // title pada header
          tabBarLabel: 'Home', // title pada bottom tab
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'map' : 'map-outline'}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Discover',
          tabBarLabel: 'Discover',
        }}
        name="Discover"
        component={DiscoverScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Cart',
          tabBarLabel: 'Cart',
        }}
        name="Favorite"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'list' : 'list-outline'}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Product',
          tabBarLabel: 'Product',
        }}
        name="Product"
        component={ProductScreen}
      />
    </Tab.Navigator>
  );
}
