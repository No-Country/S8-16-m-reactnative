import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 12
      },
      tabBarActiveTintColor: '#606060',
      tabBarInactiveTintColor: '#000'
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
      options={{

        title: 'Home',
        tabBarIcon: ({focused}) => (

          <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color='#606060'/>

        ),

      }}/>
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{

        title: 'Login'

      }}/>
    </Tab.Navigator>
  )
}

