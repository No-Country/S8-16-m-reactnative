import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { Genre } from '../interfaces/constants.interfaces';
import { AntDesign } from "@expo/vector-icons";

interface Props {
    genre: Genre;
    onPress: () => void;
}

export const CardGenre = ({ genre, onPress }: Props) => {
  return (
    <Pressable
        onPress={onPress}
        className='items-center'
    >
        <View
            key={genre.id}
            className="my-2 flex-row justify-center items-center bg-[#606060] rounded-xl overflow-hidden"
            style={{ width: 300 }}
        >
            <View className="flex-row flex-1 items-center justify-start">
                <View className='flex-row items-center justify-center ml-6'>
                    <AntDesign name={genre.icon as never} size={24} color="white" />
                    <Text 
                        className="text-bookWhite text-xs font-bold pl-3"
                    >{genre.name}</Text>
                </View>
            </View>

            <View className="flex relative">
                <Image
                    className="object-cover"
                    style={{ width: 150, height: 100 }}
                    source={{ uri: genre.image }}
                />
                <View className="absolute">
                    <Image
                    className="object-cover"
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'http://imgfz.com/i/EY4dDI6.png'}}
                    />
                </View>
            </View>

        </View>
    </Pressable>
  )
}