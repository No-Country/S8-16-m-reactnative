import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const genres = [
  'Clásico', 'Fantasía', 'Terror', 'Ficción', 'Historia', 'Misterio', 'Psicológico', 'Ciencia Ficción',
];

export const PostBookScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState([]);
  const [barter, setBarter] = useState(false);
  const [sell, setSell] = useState(false);

  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ top: top }}>
      <View className='flex-1 justify-center items-center bg-[#1E1E1E] mb-5' >
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 154, height: 69 }}
          className='mt-5'
        />
        <Text className='text-[#FFFFFF] text-base mb-7 mt-5'>
          ¿Cuál es el titulo de tu libro?</Text>
        <TextInput
          className='bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs'
          placeholderTextColor="#4D4D4D"
          onChangeText={setTitle}
          placeholder={'Ingresa un titulo'}
        />
        <TextInput
          className='bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs'
          placeholderTextColor="#4D4D4D"
          onChangeText={setDescription}
          placeholder={'Ingresa una breve descripción del libro que propones a cambio de él...'}
          multiline
        />
        <Text className='text-[#FFFFFF] text-base mb-5'>
          ¿Cuál es el género de tu libro?</Text>
        <Text className='text-[#4D4D4D] mb-5'>Podés elegir varios géneros</Text>
        {/* SELECT GENRES */}
        {/* <View className='bg-[#272727] w-full flex-row items-center flex-wrap'>
          {genres?.map((genre, index) => {
            return <Text key={index} className='bg-[#FF9A1F] px-8 py-2 m-2 rounded-full text-xs'>{genre}</Text>
          })}
        </View> */}
        <Text className='text-[#FFFFFF] text-base mb-2 mt-5'>
          ¿Queres hacer un trueque o venderlo?</Text>
        <View className='flex-row mb-5'>
          <TouchableOpacity
            onPress={() => setBarter(!barter)}
            style={{ elevation: 2 }}
            className={`px-4 py-4 m-2 rounded-xl text-xs flex-row items-center bg-[#${barter ? 'FF9A1F' : '1E1E1E'}]`}
            activeOpacity={0.8}
          >
            <Entypo name='shuffle' size={18} color={`#${barter ? '1E1E1E' : 'FF9A1F'}`} />
            <Text className={`text-[#${barter ? '1E1E1E' : 'FF9A1F'}] mx-2`}>Trueque</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSell(!sell)}
            style={{ elevation: 2 }}
            className={`px-4 py-4 m-2 rounded-xl text-xs flex-row items-center bg-[#${sell ? 'FF9A1F' : '1E1E1E'}]`}
            activeOpacity={0.8}
          >
            <FontAwesome5 name='coins' size={18} color={`#${sell ? '1E1E1E' : 'FF9A1F'}`} />
            <Text className={`text-[#${sell ? '1E1E1E' : 'FF9A1F'}] mx-2`}>Venta</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.8}
          className='bg-[#FF9A1F] px-8 py-4 mb-3 rounded-xl w-[80vw]'
        >
          <Text className='text-[#1E1E1E] self-center'>
            SIGUIENTE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};
