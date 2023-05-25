import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ChatMainScreen = () => {

    const { top } = useSafeAreaInsets();

  return (
    <View className='flex-1 bg-bookBlack'>
      
        {/* Header */}
        <View 
            className='h-[65px] items-center justify-center border-b border-bookDarkGrey' 
            style={{ top: top }}
        >

            <View className='container mx-auto px-4 flex-row items-center justify-between mb-2'>

                <View className='bg-[#4C4C4C] h-[43px] items-center justify-center rounded-l-lg px-3'>
                    <Ionicons name="search" size={20} color="white" />
                </View>

                <TextInput 
                    className='flex-1 rounded-r-lg bg-[#1C1C1C] mr-5 text-[#fff] h-[43px] px-3'
                    placeholder='Buscá un chat...'
                    placeholderTextColor={'#777777'}
                />

                <TouchableOpacity activeOpacity={0.7} className='bg-[#4C4C4C] rounded-full w-[35px] h-[35px] items-center justify-center'>
                    <Ionicons name="md-pencil-outline" size={20} color="white" />
                </TouchableOpacity>

            </View>
        </View>

        {/* Cuerpo */}
        <ScrollView className='container mx-auto px-4' style={{ top: top + 20 }}>
            
            {/* Card */}
            <View className='px-1 mb-5'>

                <View className='flex-row items-center justify-between mb-4'>

                <Image 
                    source={require('../../assets/user.png')}
                    className='w-[46px] h-[46px]'
                />

                <View className='ml-6'>
                    <Text className='font-semibold text-base text-[#EBEBEB]'>Lomitojpg</Text>
                    <Text className='font-normal text-sm text-bookGrey'>Enviado hace 15min</Text>
                </View>

                <View className='flex-1' />

                <TouchableOpacity activeOpacity={0.7}>
                    <Ionicons name="trash" size={20} color="white" />
                </TouchableOpacity>
                </View>

                <View className='items-center justify-center'>
                    <View className='border-b border-[#1C1C1C] w-3/4' />
                </View>
            </View>

            {/* Card */}
            <View className='px-1 mb-5'>

                <View className='flex-row items-center justify-between mb-4'>

                <Image 
                    source={require('../../assets/user.png')}
                    className='w-[46px] h-[46px]'
                />

                <View className='ml-6'>
                    <Text className='font-semibold text-base text-[#EBEBEB]'>Lomitojpg</Text>
                    <Text className='font-normal text-sm text-bookGrey'>Enviado hace 15min</Text>
                </View>

                <View className='flex-1' />

                <TouchableOpacity activeOpacity={0.7}>
                    <Ionicons name="trash" size={20} color="white" />
                </TouchableOpacity>
                </View>

                <View className='items-center justify-center'>
                    <View className='border-b border-[#1C1C1C] w-3/4' />
                </View>
            </View>
            
        </ScrollView>

    </View>
  )
}
