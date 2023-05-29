import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';

export const AskBookScreen = () => {

  const { top } = useSafeAreaInsets();

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={{ top: top }} className='flex-1 justify-center items-center bg-[#1E1E1E] mb-5 h-screen' >
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
        className='mt-5'
      />
      <Text className='text-[#FFFFFF] text-base mt-5 mb-7 text-center font-bold'>{'¡Listo!\nUna cosita más'}</Text>
      <Text className='text-[#FFFFFF] text-base text-center'>{'¿Querés publicar un libro \n o manga para vender o \n hacer trueque?'}</Text>
      <View className='flex-row mt-5'>
        <TouchableOpacity
          className='px-4 py-4 m-2 rounded-xl text-xs flex-row items-center bg-[#FF9A1F]'
          onPress={() => navigation.navigate('AskBookScreen')}
          activeOpacity={0.8}
        >
          <Text className='text-[#1E1E1E]'>
            SI, QUIERO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='px-4 py-4 m-2 rounded-xl text-xs flex-row items-center bg-[#272727]'
          onPress={() => null}
          activeOpacity={0.8}
        >
          <Text className='text-[#FF9A1F]'>
            NO, GRACIAS
          </Text>
        </TouchableOpacity>
      </View>
      <View className='border-[#4D4D4D] border-b w-4/5 mt-5' />
      <Text className='text-[#4D4D4D] text-center mt-5'>{'Tranquilo, podés hacerlo después de\ncrear tu cuenta'}</Text>
    </View>
  )
};
