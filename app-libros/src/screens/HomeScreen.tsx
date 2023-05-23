import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image,Button, ScrollView, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/MainNavigation';
import { Ionicons } from '@expo/vector-icons';
import {SvgComponent} from '../components/Svg'
import { SafeAreaView } from 'react-native-safe-area-context';



export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const cardsData = [
    { id: 1,  text: '@kapipiola' },
    { id: 2,  text: '@potrero' },
    { id: 3,  text: '@leanfran' },
    { id: 4,  text: 'Card 4' },
    { id: 5,  text: 'Card 4' },
    { id: 6,  text: 'Card 4' },
    { id: 7,  text: 'Card 4' },
    { id: 8,  text: 'Card 4' },
    { id: 9,  text: 'Card 4' },
    { id: 10,  text: 'Card 4' },


  ];

  return (
    <SafeAreaView className='flex-1 bg-background '>

    <View className='flex-1 bg-background justify-start items-center'>
      <View className="bg-background shadow-sm shadow-black h-16 px-4 flex flex-row justify-between items-center">
      <View className="flex flex-row gap-1 items-center">
        <Ionicons name="ios-menu" size={29} color="white" className="" />
        <View className="mr-2" />
        <Ionicons name="ios-search" size={29} color="white" className="" />
      </View>
      <View className="flex items-center flex-grow pr-8 ">
        <SvgComponent  />
      </View>
      <View className="flex flex-row items-center">
        <Ionicons name="ios-person" size={42} color="white" className="mr-2" />
      </View>
    </View>

    <View className="justify-start w-screen pl-4 pt-5">
      <Text className='text-white font-bold text-lg '>Libros en tendencia</Text>
      <ScrollView
      horizontal
      className='p-4'
      showsHorizontalScrollIndicator={false}
    >
      {cardsData.map((card) => (
<View> 
  <Text className='absolute -left-3 top-1 -z-20  text-[60px] font-bold text-[#FF8A00]'>0{card.id}</Text>
        <View
        key={card.id}
        className="mr-4 mt-12 bg-bookGrey  z-10 px-4 pt-4 rounded-2xl h-52 w-32"
        
        >
          
          <View
            className=" "
          >
            <Image
            source={require('../../assets/portada1.png')}
            className=' w-full'
            />
            <View className="">
              <Text className='text-white font-light text-sm'>
                {card.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
      ))}
    </ScrollView>
    </View>
      <Text>HomeScreen</Text>

      <Button
        title='Volver'
        onPress={() => navigation.pop() }
      />
      
      </View>
      </SafeAreaView>
  )
}
