import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useDebounced } from '../hooks/useDebounced';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onDebounce: (value: string) => void;
  icon: 'pencil' | 'sliders';
  placeholder: string;
}

export const SearchInput = ({ onDebounce, icon, placeholder }: Props) => {
  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebounced(textValue);

  const Icon = () => {
    switch (icon) {
      case 'pencil':
        return <Ionicons name="md-pencil-outline" size={20} color="white" />;

      case 'sliders':
        return <Feather name="sliders" size={20} color="white" />;
    }
  };

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View className="container mx-auto px-4 flex-row items-center justify-between mb-2">
      <View className="bg-[#4C4C4C] h-[43px] items-center justify-center rounded-l-lg px-3">
        <Ionicons name="search" size={20} color="white" />
      </View>

      <TextInput
        className="flex-1 rounded-r-lg bg-[#1C1C1C] mr-5 text-[#fff] h-[43px] px-3"
        placeholder={placeholder}
        placeholderTextColor={'#777777'}
        autoCapitalize="none"
        autoCorrect={false}
        value={textValue}
        onChangeText={setTextValue}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-[#4C4C4C] rounded-full w-[35px] h-[35px] items-center justify-center"
        // style={{  backgroundColor: icon === 'pencil' ? '#4C4C4C' : null }}
      >
        <Icon />
      </TouchableOpacity>
    </View>
  );
};
