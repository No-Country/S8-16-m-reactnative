import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/MainNavigation';


export const Register2 = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className='flex-1 justify-center items-center bg-[#1E1E1E]'>
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
      ></Image>
      <Text
        className='text-[#FFFFFF] text-base mb-7 mt-5'
      >Ingresa tus datos</Text>
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs'
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre y apellido "
      />
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-20 w-4/5 rounded-xl text-xs '
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre de usuario"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register3')}
        activeOpacity={0.8}
        className='bg-[#FF9A1F] px-8 py-4 mb-3 w-4/5 rounded-xl'
      >
        <Text className='text-[#171719] text-xs self-center'>
          SIGUIENTE
        </Text>

      </TouchableOpacity>


    </View>
  )
}