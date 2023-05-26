import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDebounced } from '../../hooks/useDebounced';

interface Props {
    onDebounce: (value: string) => void;
  }

export const SearchInputChat = ({ onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebounced(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
      }, [debouncedValue]);

  return (
    <View className='container mx-auto px-4 flex-row items-center justify-between mb-2'>

        <View className='bg-[#4C4C4C] h-[43px] items-center justify-center rounded-l-lg px-3'>
            <Ionicons name="search" size={20} color="white" />
        </View>

        <TextInput 
            className='flex-1 rounded-r-lg bg-[#1C1C1C] mr-5 text-[#fff] h-[43px] px-3'
            placeholder='Buscá un chat...'
            placeholderTextColor={'#777777'}
            autoCapitalize='none'
            autoCorrect={false}
            value={textValue}
            onChangeText={setTextValue}
        />

        <TouchableOpacity activeOpacity={0.7} className='bg-[#4C4C4C] rounded-full w-[35px] h-[35px] items-center justify-center'>
            <Ionicons name="md-pencil-outline" size={20} color="white" />
        </TouchableOpacity>

    </View>
  )
}
