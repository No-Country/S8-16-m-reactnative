import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {SvgComponent} from './Svg'


 const Navbar = () => {
  return (
    <View className="bg-background shadow-sm shadow-black h-16 px-4 flex flex-row justify-between items-center">
    <View className="flex flex-row items-center">
      <Ionicons name="ios-menu" size={24} color="black" className="mr-2" />
      <View className="mr-2" />
      <Ionicons name="ios-search" size={24} color="black" className="mr-2" />
    </View>
    <View className="flex items-center flex-grow pr-8 ">
      <SvgComponent />
    </View>
    <View className="flex flex-row items-center">
      <Ionicons name="ios-person" size={24} color="black" className="mr-2" />
    </View>
  </View>
  )
}
export default Navbar;