import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

export const LoginScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>LoginScreen</Text>
    
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeScreen') }
      activeOpacity={0.8}
      className='bg-bookYellow rounded-lg px-5 py-2 mt-2'
    >
      <Text className='text-bookWhite text-xl'>
        Ingresar
      </Text>

    </TouchableOpacity>
    </View>
  )
}
