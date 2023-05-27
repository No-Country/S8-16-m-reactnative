import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  image?: string;
  title: string;
  description: string;
  genre: string;
  type: string;
}

const ModalBook = ({ image, title, description, genre, type }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDescription, setEditDescription] = useState<boolean>(false);
  const [form, setForm] = useState<Props>({
    title: title,
    description: description,
    genre: genre,
    type: type,
  });

  const onChange = (text: string, id: string) => {
    setForm({ ...form, [id]: text });
  };

  return (
    <View style={styles.centeredView} className="justify-self-end">
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View className="flex p-5 m-8 rounded-xl bg-[#171719] w-[90%]">
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="inline-block w-[10%]"
            >
              <Entypo name="cross" size={36} color="white" />
            </Pressable>
            <View className="flex rounded-xl bg-[#212121] p-5 pb-8 m-5">
              <View className="flex justify-center items-center mb-5 gap-2 flex-row">
                <TextInput
                  className={`bg-[#${
                    editTitle ? "606060" : "212121"
                  }] p-2 text-base font-bold text-bookWhite`}
                  placeholderTextColor="#4D4D4D"
                  placeholder="Cambiar titulo"
                  //   editable={false}
                  value={form.title}
                  id="title"
                  onChangeText={(e) => onChange(e, "title")}
                  editable={editTitle}
                />
                {/* <Text className="text-base font-bold text-bookWhite">
                  {title}
                </Text> */}
                <Pressable onPress={() => setEditTitle(!editTitle)}>
                  <View className="relative bg-bookYellow p-2 rounded-full">
                    <Ionicons name="md-pencil" size={28} color="black" />
                  </View>
                </Pressable>
              </View>
              <View className="flex relative justify-center items-center">
                <Image
                  source={require("../../../assets/GenresBooks/harry.png")}
                  style={{ width: 120, height: 200 }}
                />

                <View className="absolute right-10 -bottom-5 bg-bookYellow p-2 rounded-full">
                  <Ionicons name="md-pencil" size={28} color="black" />
                </View>
              </View>
            </View>

            <View className="flex gap-2 m-5 w-[90%]">
              <View className="flex flex-row justify-between items-center">
                <View className="break-words w-[80%]">
                  <TextInput
                    className={`bg-[#${
                      editDescription ? "606060" : "171719"
                    }]  text-bookWhite font-light text-xs px-2 py-1`}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(e) => onChange(e, "description")}
                    value={form.description}
                    editable={editDescription}
                  />
                </View>
                <Pressable onPress={() => setEditDescription(!editDescription)}>
                  <View className="relative bg-bookYellow p-2 rounded-full">
                    <Ionicons name="md-pencil" size={28} color="black" />
                  </View>
                </Pressable>
              </View>
              <View className="flex gap-2 flex-row justify-between ">
                {/* <View className="flex items-center"> */}

                  <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
                    {form.type === "Trueque" ? (
                      <Entypo
                        name="shuffle"
                        size={18}
                        color="black"
                      />
                    ) : (
                      <FontAwesome5 name="coins" size={18} color="black" />
                    )}
                    <Text className="ml-2 text-bookBlack font-semibold">
                      {form.type}
                    </Text>
                  </View>
                {/* </View> */}
                <View className="flex">
                  <Pressable
                  onPress={() => form.type === "Trueque" ? onChange("Compra", "type") : onChange("Trueque", "type")}
                  >

                  
                  <View className="bg-bookYellow p-2 rounded-full">
                    <Ionicons name="md-pencil" size={28} color="black" />
                  </View>
                </Pressable>
                </View>
              </View>
              <View className="flex gap-2 flex-row justify-between ">
                <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
                  <FontAwesome5
                    name="fantasy-flight-games"
                    size={24}
                    color="black"
                  />
                  <Text className="ml-2 text-bookBlack font-semibold">
                    {genre}
                  </Text>
                </View>
                <View className="flex">
                  <View className="bg-bookYellow p-2 rounded-full">
                    <Ionicons name="md-pencil" size={28} color="black" />
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-[#FF9A1F] px-8 py-4 my-3 rounded-xl justify-self-end"
            >
              <Text className="text-[#FFFFFF] text-xs self-center">
                GUARDAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <View className="relative bg-bookYellow p-2 rounded-full">
          <Ionicons name="md-pencil" size={28} color="black" />
        </View>
        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default ModalBook;
