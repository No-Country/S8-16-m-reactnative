import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Cards = () => {
  const genres = [
    {
      id: 1,
      name: "Clásico",
      image: require("../../assets/Cards/Clasico.png"),
      icon: <AntDesign name="hearto" size={24} color="white" />
    },
    {
      id: 2,
      name: "Historia",
      image: require("../../assets/Cards/Historia.png"),
      icon: <AntDesign name="hearto" size={24} color="white" />

    },
    {
      id: 3,
      name: "Misterio",
      image: require("../../assets/Cards/Misterio.png"),
      icon: <AntDesign name="hearto" size={24} color="white" />

    },
    {
      id: 4,
      name: "Fantasía",
      image: require("../../assets/Cards/Fantasia.png"),
      icon: <AntDesign name="hearto" size={24} color="white" />

    },

    {
        id: 5,
        name: "Ficción",
        image: require("../../assets/Cards/Ficcion.png"),
        icon: <AntDesign name="hearto" size={24} color="white" />
      
    },


    {
        id: 6,
        name: `Ciencia ${"\n"} ficción`,
        image: require("../../assets/Cards/CienciaFiccion.png"),
      icon: <AntDesign name="hearto" size={24} color="white" />

      },

    {
        id: 7,
        name: "Psicológico",
        image: require("../../assets/Cards/Psicologico.png"),
        icon: <AntDesign name="hearto" size={24} color="white" />
      
    },
    

  ];
  

  return (
    <View className="flex w-[100%] justify-center items-center">
      <FlatList
      className="flex gap-5"
        data={genres}
        renderItem={({ item }) => (
            <Pressable
                onPress={() => Alert.alert("Presionaste el genero " + item.name)}
            >
          <View
            key={item.id}
            className="flex my-2 flex-row justify-center items-center bg-[#606060] rounded-xl  overflow-hidden"
            // style={{ width: , height: 200 }}
            style={{ width: 300}}
          >
            <View className="flex flex-row justify-center items-center gap-3 p-5 px-10">
              {item.icon}
              <Text 
                className="text-bookWhite text-xs font-bold"
              >{item.name}</Text>
            </View>
            <View className="flex relative">
              <Image
                className="object-cover"
                style={{ width: 150, height: 100 }}
                source={item.image}
              />
              <View className="absolute">
                <Image
                  className="object-cover"
                  style={{ width: 100, height: 100 }}
                  source={require("../../assets/Cards/Rectangle.png")}
                />
              </View>
            </View>
          </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Cards;
