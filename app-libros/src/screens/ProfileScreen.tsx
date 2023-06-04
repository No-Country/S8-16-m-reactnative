import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParams } from '../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ModalBook from '../components/Profile/Modal';

export const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [image, setImage] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    // bg-bookBlack
    <ScrollView>
      <View className="flex flex-1 py-7 bg-bookBlack h-full">
        <View className="flex justify-center items-center">
          <View className="relative">
            {/* Arreglar tamano de imagen */}
            {/* <Image source={require("../../assets/profile.png")} /> */}

            <Image
              source={
                image ? { uri: image } : require('../../assets/profile.png')
              }
              style={{ width: 180, height: 180, borderRadius: 100 }}
            />

            {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
            <TouchableOpacity onPress={pickImage}>
              <View className="absolute right-3 -bottom-1 bg-bookYellow p-2 rounded-full">
                <Ionicons name="md-pencil" size={28} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center m-5">
            <Text className="text-xl text-bookWhite mb-2 font-semibold">
              Capipiola
            </Text>
            <Text className="text-sm text-bookWhite font-semibold">
              @Kapipiola
            </Text>
          </View>
        </View>
        <View className="flex my-5">
          <Text className="text-bookWhite mb-10 pl-3 text-base font-medium">
            Libros publicados
          </Text>
          <ScrollView horizontal={true} className="flex">
            <View className="flex flex-1 gap-5 flex-row p-5 bg-bookDarkGrey">
              <View
                className="flex  rounded-xl p-3 bg-bookGrey"
                style={{ width: 120, height: 180 }}
              >
                <View
                  style={styles.bookContainer}
                  className="flex border-dashed border-2 border-bookWhite justify-center items-center"
                >
                  <Feather name="plus" size={50} color="white" />
                  <Text className="my-1 text-bookWhite text-center text-xs">
                    Subir Nuevo Libro
                  </Text>
                </View>
              </View>

              <View
                className="flex flex-1 flex-row bg-[#171719] overflow-hidden rounded-xl"
                style={{ width: 400 }}
              >
                <View className="flex justify-center items-center w-[30%]  p-3 bg-bookGrey">
                  <Image
                    className="object-fit"
                    source={require('../../assets/GenresBooks/harry.png')}
                    style={{ width: 100, height: 150 }}
                  />
                </View>
                <View className="flex w-[70%] p-5 relative items-center ">
                  <View className="flex gap-2 ">
                    <Text className="text-bookWhite text-base font-medium">
                      Harry Potter
                    </Text>

                    <Text className="text-bookWhite text-sm break-words font-light">
                      Quiero cambiar este libro por uno del genero romantico
                    </Text>
                  </View>

                  <ModalBook
                    image="../../assets/GenresBooks/harry.png"
                    title="Harry Potter"
                    genre="Fantasia"
                    description="Quiero cambiar este libro por uno del genero romantico"
                    type="Trueque"
                  />
                </View>
              </View>

              {/*  */}
            </View>
          </ScrollView>
        </View>

        {/*  */}

        <View className="flex flex-1">
          <Text className="text-bookWhite mb-10 pl-3 text-base font-medium">
            Chat comenzados
          </Text>
          <View className="flex flex-1 justify-center items-center gap-5 flex-row flex-wrap">
            <View className="flex  bg-bookGrey rounded-2xl overflow-hidden justify-between">
              <View className="flex p-4 justify-center items-center">
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
              >
                <View className="flex gap-2 justify-center items-center py-2 px-4  flex-row bg-bookDarkGrey">
                  <Text className="text-bookWhite text-xs">
                    Seguir conversando
                  </Text>
                  <FontAwesome name="arrow-right" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex  bg-bookGrey rounded-2xl overflow-hidden justify-between">
              <View className="flex p-4 justify-center items-center">
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
              >
                <View className="flex gap-2 justify-center items-center py-2 px-4  flex-row bg-bookDarkGrey">
                  <Text className="text-bookWhite text-xs">
                    Seguir conversando
                  </Text>
                  <FontAwesome name="arrow-right" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex  bg-bookGrey rounded-2xl overflow-hidden justify-between">
              <View className="flex p-4 justify-center items-center">
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
              >
                <View className="flex gap-2 justify-center items-center py-2 px-4  flex-row bg-bookDarkGrey">
                  <Text className="text-bookWhite text-xs">
                    Seguir conversando
                  </Text>
                  <FontAwesome name="arrow-right" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex  bg-bookGrey rounded-2xl overflow-hidden justify-between">
              <View className="flex p-4 justify-center items-center">
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
              >
                <View className="flex gap-2 justify-center items-center py-2 px-4  flex-row bg-bookDarkGrey">
                  <Text className="text-bookWhite text-xs">
                    Seguir conversando
                  </Text>
                  <FontAwesome name="arrow-right" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            {/*  */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  booksContainer: {
    width: '100%',
    height: 50,
  },
  bookContainer: {
    height: '100%',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    objectFit: 'cover',
  },
});
