import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
  chat: {
    user?: string;
    image?: string;
    min?: string;
  };
}

export const CardChat = ({ onPress, chat: { image, min, user } }: Props) => {
  return (
    <TouchableOpacity className="px-1" activeOpacity={0.75} onPress={onPress}>
      <View className="flex-row items-center justify-between mb-4">
        <Image source={{ uri: image }} className="w-[46px] h-[46px]" />

        <View className="ml-6">
          <Text className="font-semibold text-base text-[#EBEBEB] mb-1">
            {user}
          </Text>
          <Text className="font-normal text-sm text-bookGrey">
            Enviado hace {min}min
          </Text>
        </View>

        <View className="flex-1" />

        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
