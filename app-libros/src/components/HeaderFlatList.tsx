import React from 'react';
import { Text } from 'react-native';

interface Props {
    title: string
}

export const HeaderFlatList = ({ title }: Props) => {
  return (
    <Text className='font-bold text-base text-white mb-5'>{title}</Text>
  )
}
