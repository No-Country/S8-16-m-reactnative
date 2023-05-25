import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { RootStackParams } from '../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';


export const LoginScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className='flex-1 justify-center items-center bg-[#1E1E1E]'>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
      ></Image>
      <Text
        className='text-[#FFFFFF] text-base mb-7 mt-5'
      >¡Bienvenido!</Text>
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs'
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresa tu usuario"
      />
      <TextInput
        className='bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs '
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresa tu contraseña"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        activeOpacity={0.8}
        className='bg-[#0F0F0F] px-8 py-4 mb-3 w-4/5 rounded-xl'
      >
        <Text className='text-[#FFFFFF] text-xs self-center'>
          INGRESAR
        </Text>

      </TouchableOpacity>
      <Text className='text-[#606060] text-xs self-center'>
        Iniciar sesion con
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        activeOpacity={0.8}
        className='bg-[#4C4C4C] px-8 py-4 mt-3 w-4/5 rounded-xl'
      >
        <Text className='text-[#FFFFFF] text-xs self-center'>
          INGRESAR CON GOOGLE
        </Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.circle} />
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register1')}
        activeOpacity={0.8}
      >
        <Text className='text-[#4C4C4C] text-xs self-center'>
          Registrarme
        </Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 35,
  },
  line: {
    width: 100,
    height: 0,
    borderWidth: 0.3,
    borderColor: '#606060',
  },
  circle: { 
    marginLeft: 17,
    marginRight: 17,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#606060',
    marginHorizontal: 5,
  },
});
