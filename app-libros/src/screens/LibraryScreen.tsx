import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const LibraryScreen = () => {
  const { top } = useSafeAreaInsets();

  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);

  return (
    <View
      className="flex-1 bg-bookBlack container mx-auto px-4"
      style={{ paddingTop: top + 20 }}
    >
      <View className="mb-7">
        <Text className="text-white font-bold text-base">Mi biblioteca</Text>
      </View>

      {/* Mis libros */}
      <View className="mb-5">
        <View className="mb-3 flex-row items-center justify-start">
          <Feather name="bookmark" size={20} color="white" />
          <Text className="font-medium text-sm text-white ml-2">
            Mis libros
          </Text>
        </View>

        {/* Card libro */}
        <View
          className="flex flex-row bg-[#171719] w-full rounded-2xl overflow-hidden"
          style={styles.shadow}
        >
          <View className="flex w-[30%] bg-[#606060] p-3 items-center justify-center">
            <Image
              source={require('../../assets/books/naranja-mecanica.png')}
              className="w-[80px] h-[120px]"
            />
          </View>

          <View className="flex relative w-[70%] p-2 items-center gap-2">
            <View className="flex gap-2 mt-5">
              <Text className="text-bookWhite font-medium text-sm">
                La naranja mecanica
              </Text>
              <Text className="text-bookWhite  text-xs">
                Quiero cambiar este libro por uno de el genero romantico
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Favoritos */}
      <View className="mb-5">
        <View className="mb-3 flex-row items-center justify-start">
          <MaterialIcons name="favorite-outline" size={24} color="white" />
          <Text className="font-medium text-sm text-white ml-2">Favoritos</Text>
        </View>

        {/* Card favorito */}
        <View
          className="flex flex-row bg-[#171719] w-full rounded-2xl overflow-hidden"
          style={styles.shadow}
        >
          <View className="flex w-[30%] bg-[#606060] p-3 items-center justify-center">
            <Image
              source={require('../../assets/books/el-superviviente.png')}
              className="w-[80px] h-[120px]"
            />
          </View>

          <View className="flex relative w-[70%] p-2 items-center gap-2">
            <View
              className="absolute -top-0 -right-2 p-3 bg-[#252525] z-10"
              style={{ borderBottomLeftRadius: 15 }}
            >
              <Pressable onPress={() => setFavorite1(!favorite1)}>
                <AntDesign
                  name={favorite1 ? 'hearto' : 'heart'}
                  size={20}
                  color="white"
                />
              </Pressable>
            </View>
            <View className="flex gap-2 mt-5">
              <Text className="text-bookWhite font-medium text-sm">
                El superviviente
              </Text>
              <Text className="text-bookWhite  text-xs">
                Quiero cambiar este libro por uno de acción
              </Text>
            </View>
            <View className="flex flex-row items-center p-1 justify-end w-full gap-2">
              <Text className="text-white font-semibold  text-[11px] justify-end">
                @Kapipiola
              </Text>

              <Image
                source={require('../../assets/profile.png')}
                className=" w-10 h-10"
              />
            </View>
          </View>
        </View>

        {/* Card favorito */}
        <View
          className="mt-8 flex flex-row bg-[#171719] w-full rounded-2xl overflow-hidden"
          style={styles.shadow}
        >
          <View className="flex w-[30%] bg-[#606060] p-3 items-center justify-center">
            <Image
              source={require('../../assets/books/stephen-king.png')}
              className="w-[80px] h-[120px]"
            />
          </View>

          <View className="flex relative w-[70%] p-2 items-center gap-2">
            <View
              className="absolute -top-0 -right-2 p-3 bg-[#252525] z-10"
              style={{ borderBottomLeftRadius: 15 }}
            >
              <Pressable onPress={() => setFavorite2(!favorite2)}>
                <AntDesign
                  name={favorite2 ? 'hearto' : 'heart'}
                  size={20}
                  color="white"
                />
              </Pressable>
            </View>
            <View className="flex gap-2 mt-5">
              <Text className="text-bookWhite font-medium text-sm">
                El bazar de los malos sueños
              </Text>
              <Text className="text-bookWhite  text-xs">
                Quiero cambiar este libro por uno del genero romantico
              </Text>
            </View>
            <View className="flex flex-row items-center p-1 justify-end w-full gap-2">
              <Text className="text-white font-semibold  text-[11px] justify-end">
                @Kapipiola
              </Text>

              <Image
                source={require('../../assets/profile.png')}
                className=" w-10 h-10"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
