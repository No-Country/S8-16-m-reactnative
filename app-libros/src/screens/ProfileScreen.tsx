import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaViewComponent,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    // bg-bookBlack
    <ScrollView>
      <View className="flex flex-1 py-5 bg-bookBlack h-full">
        <View className="flex justify-center items-center">
          <View className="relative">
            {/* Arreglar tamano de imagen */}
            <Image source={require("../../assets/profile.png")} />
            <View className="absolute right-3 -bottom-1 bg-bookYellow p-2 rounded-full">
              <Ionicons name="md-pencil" size={28} color="black" />
            </View>
          </View>
          <View className="flex justify-center items-center m-5">
            <Text className="text-xl text-bookWhite">Capiola</Text>
            <Text className="text-sm text-bookWhite">#Kapipiola</Text>
          </View>
        </View>
        <View className="flex my-5" >
          <Text className="text-bookWhite mb-10 pl-3 text-base">
            Libros publicados
          </Text>
          <ScrollView horizontal={true} className="flex">
            <View className="flex flex-basis-0 gap-5 flex-row p-5 bg-bookDarkGrey" >
                {/*  bg-bookDarkGrey */}
              <View
                className="flex  rounded-xl p-3 bg-bookGrey"
                style={{ width: 150, height: 250 }}
              >
                <View
                  style={styles.bookContainer}
                  className="flex border-dashed border-2 border-bookWhite justify-center items-center"
                >
                  <Feather name="plus" size={50} color="white" />
                </View>
              </View>
              <View
                className="flex  rounded-xl p-3 bg-bookGrey"
                style={{ width: 150, height: 250 }}
              >
                <View
                  style={styles.bookContainer}
                  className="flex border-dashed border-2 border-bookWhite justify-center items-center"
                >
                  <Feather name="plus" size={50} color="white" />
                </View>
              </View>
              <View
                className="flex  rounded-xl p-3 bg-bookGrey"
                style={{ width: 150, height: 250 }}
              >
                <View
                  style={styles.bookContainer}
                  className="flex border-dashed border-2 border-bookWhite justify-center items-center"
                >
                  <Feather name="plus" size={50} color="white" />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="flex flex-1">
          <Text className="text-bookWhite mb-10 pl-3 text-base">
            Chat comenzados
          </Text>
          <View className="flex justify-center items-center gap-5 flex-1 flex-row flex-wrap">
            <View
              className="flex p-2   rounded-2xl bg-bookGrey overflow-hidden justify-between"
              style={{ height: 125 }}
            >
              <View className="flex justify-center items-center">
                <Image
                  source={require("../../assets/profile.png")}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <View
                className="flex gap-2  flex-row bg-bookDarkGrey"
                style={{ width: "120%" }}
              >
                <Text className="text-bookWhite text-sm">
                  Seguir conversando
                </Text>
                <FontAwesome name="arrow-right" size={24} color="white" />
              </View>
            </View>
            <View
              className="flex p-2   rounded-2xl bg-bookGrey overflow-hidden justify-between"
              style={{ height: 125 }}
            >
              <View className="flex justify-center items-center">
                <Image
                  source={require("../../assets/profile.png")}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <View
                className="flex gap-2  flex-row bg-bookDarkGrey"
                style={{ width: "120%" }}
              >
                <Text className="text-bookWhite text-sm">
                  Seguir conversando
                </Text>
                <FontAwesome name="arrow-right" size={24} color="white" />
              </View>
            </View>

            <View
              className="flex p-2   rounded-2xl bg-bookGrey overflow-hidden justify-between"
              style={{ height: 125 }}
            >
              <View className="flex justify-center items-center">
                <Image
                  source={require("../../assets/profile.png")}
                  style={styles.imageStyle}
                />
                <Text className="text-bookWhite">@#Kapipiola</Text>
              </View>
              <View
                className="flex gap-2  flex-row bg-bookDarkGrey"
                style={{ width: "120%" }}
              >
                <Text className="text-bookWhite text-sm">
                  Seguir conversando
                </Text>
                <FontAwesome name="arrow-right" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  booksContainer: {
    width: "100%",
    height: 50,
  },
  bookContainer: {
    height: "100%",
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    objectFit: "cover",
  },
});
