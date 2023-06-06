import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchScreen } from '../screens/SearchScreen';
import { ChatMainScreen } from '../screens/ChatMainScreen';
import { LibraryScreen } from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#606060',
        },
        tabBarActiveTintColor: '#606060',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#212121',
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color="#606060"
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Buscar',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'ios-search' : 'ios-search-outline'}
              size={22}
              color="#606060"
            />
          ),
        }}
      />

      <Tab.Screen
        name="ChatMainScreen"
        component={ChatMainScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              size={22}
              color="#606060"
            />
          ),
        }}
      />

      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'library' : 'library-outline'}
              size={22}
              color="#606060"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
