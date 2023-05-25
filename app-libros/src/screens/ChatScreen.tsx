import React from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';


interface Props extends StackScreenProps<RootStackParams, 'ChatScreen'> {}

export const ChatScreen = ({ route }: Props) => {

  const { top } = useSafeAreaInsets();

  const { user, image } = route.params;

  return (
    <View className='flex-1 bg-bookBlack '>

        {/* Header */}
        <View className='border-b-2 border-black py-2' style={{ top: top }}>
            <View className='container mx-auto px-4 flex-row items-center justify-between'>

              <View className='flex-row items-center justify-center'>
                <Image
                  source={{ uri: image }}
                  className='w-[42] h-[41]'
                />

                <Text className='font-medium text-base text-[#EBEBEB] mx-3'>{user}</Text>
              </View>

                <View className='bg-[#1E1E1E] rounded-full w-[43] h-[43] flex-col justify-center items-center'>
                  <Text className='text-[#82DB91] font-medium text-[9px] text-center'>Online</Text>
                  <View className='bg-[#82DB91] rounded-full w-[12] h-[12] mt-1' />

                </View>
            </View>
        </View>

        {/* Cuerpo */}
        <View className='mb-56' style={{ top: top + 20 }}>

          <View className='items-center'>
            <View className='border-b-2 border-bookGrey mb-2 w-3/4' />
          </View>

          <Text className='text-bookWhite text-center font-light text-xs'>10/5/2023</Text>

          {/* mensajes */}
          <ScrollView className='container mx-auto px-4 mt-10'>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>
                        <View className='bg-bookYellow rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookBlack text-[14px]'>¿Hola que onda?</Text>
                        </View>
                        <View className='flex-1' />
                      </View>

                      <View className='items-start'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:15hs AM</Text>
                      </View>

                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                    <View className='flex-row'>
                      <View className='bg-bookYellow rounded-lg py-3 px-4 mb-1'>
                          <Text className='text-bookBlack text-[14px]'>¿Hola que onda?</Text>
                      </View>
                      <View className='flex-1' />
                    </View>

                    <View className='items-start'>
                      <Text className='text-bookWhite font-light text-[12px]'>10:15hs AM</Text>
                    </View>

                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto ?? */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda???</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

                    {/* Caja texto */}
                    <View className='flex-col mb-2'>

                      <View className='flex-row'>

                        <View className='flex-1' />

                        <View className='bg-bookGrey rounded-lg py-3 px-4 mb-1'>
                            <Text className='text-bookWhite text-[14px]'>¿Hola que onda?</Text>
                        </View>
                      </View>

                      <View className='items-end'>
                        <Text className='text-bookWhite font-light text-[12px]'>10:16hs AM</Text>
                      </View>
                    </View>

          </ScrollView>
        </View>

        {/* Input */}
        <View className='bg-[#252525] absolute bottom-0 w-full h-[65px] justify-center'>

          <View className='container mx-auto px-4 flex-row items-center justify-between'>
            <TextInput 
              className='flex-1 px-5 py-2 rounded-lg bg-[#1C1C1C] mr-5 text-bookWhite'
              placeholder='Escribí algo bonito..'
              placeholderTextColor={'#606060'}
            />

              <Octicons 
                name='paper-airplane' 
                size={24} 
                color='white' 
              />

          </View>
        </View>
    </View>
  )
}
