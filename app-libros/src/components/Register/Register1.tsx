import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { InnerStackParams } from '../../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';


export const Register1 = () => {

  const [data, setData] = useState({
    nameLastname: "",
    user: "",
    password: ""
  })

  const handleInput = (name: any, value: any) => {
    setData({ ...data, [name]: value});
  }

  const navigation = useNavigation<StackNavigationProp<InnerStackParams>>();

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
        onChangeText={ (value)=>{
          handleInput('nameLastname', value)
        } }
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre y apellido "
      />
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs '
        onChangeText={ (value)=>{
          handleInput('user', value)
        } }
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre de usuario"
      />
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs '
        onChangeText={ (value)=>{
          handleInput('password', value)
        } }
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresa tu contraseña"
      />

      <TouchableOpacity
        onPress={() =>{ 
          navigation.navigate('Register2')
          console.log(data)
      } }
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