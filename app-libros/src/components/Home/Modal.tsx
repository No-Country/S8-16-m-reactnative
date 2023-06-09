import { useRef } from 'react';
import { Book } from '../../interfaces/book.interface';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

const equis = require('../../../assets/modal/equis.png');

function ModalHome({
  isModalVisible,
  toggleModal,
  book,
}: {
  isModalVisible: boolean;
  toggleModal: () => void;
  book: Book | any;
}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View className="justify-end h-full">
        <TouchableOpacity
          className="absolute h-full w-full bg-[#171719] opacity-40"
          onPress={toggleModal}
        />
        <View className="bg-[#171719] rounded-2xl ">
          <View className="flex items-center bg-bookGrey p-5 pt-4 rounded-t-2xl">
            <TouchableOpacity
              onPress={toggleModal}
              className="absolute left-0 top-0 pl-6 pt-4"
            >
              <Image source={equis} />
            </TouchableOpacity>
            <Image
              source={{ uri: book.image }}
              // source={require('../../assets/books/naranja-mecanica.png')}

              className="w-[160px] h-[270px] shadow-md shadow-black"
            />
            <View className="absolute top-0 z-30  bg-[#252525] rounded-bl-lg rounded-tr-lg right-0 p-3 shadow-sm shadow-black">
              {/* Agrega aquí el icono que deseas mostrar */}
              <Ionicons name="bookmark-outline" size={20} color="white" />
            </View>
            <View className="flex justify-center items-center bg-[#FF9A1F] w-[160px] p-2 rounded-xl my-4 mb-3.5">
              <Text className="font-medium">Estado: {book.status}</Text>
            </View>
            <View className="w-full flex flex-row justify-center items-center gap-3">
              <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
                {book.type === 'Trueque' ? (
                  <MaterialIcons
                    name="compare-arrows"
                    size={24}
                    color="black"
                  />
                ) : (
                  <FontAwesome5 name="coins" size={24} color="black" />
                )}
                <Text className="ml-2 text-bookBlack font-semibold">
                  {book.type}
                </Text>
              </View>
              <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
                <FontAwesome5
                  name="fantasy-flight-games"
                  size={24}
                  color="black"
                />
                <Text className="ml-2 text-bookBlack font-semibold">
                  {book.genre}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex  justify-between ">
            <View className="flex  gap-1 p-5 justify-center">
              <Text className="text-bookWhite font-semibold text-lg">
                {book.title}
              </Text>
              <Text className="text-bookWhite font-light">
                {book.description}
              </Text>
            </View>

            <View className="flex justify-between flex-row">
              <View
                className="flex-row bg-[#252525] w-[160px] h-[45px] justify-center items-center"
                style={{ borderTopRightRadius: 15, gap: 15 }}
              >
                <Text className="text-white font-semibold  text-[11px] justify-end">
                  @{book.userName}
                </Text>

                <Image source={{ uri: book.userImage }} className=" w-8 h-8 " />
              </View>

              <Pressable
                onPress={() => {
                  navigation.navigate<any>('ChatMainScreen');
                  toggleModal();
                }}
                // className="flex flex-row justify-center items-end w-[160px] h-[45px]"
                className="flex flex-row justify-center items-center bg-[#FF9A1F]  w-[160px] h-[45px]"
                style={{ borderTopLeftRadius: 15, gap: 15 }}
              >

                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={20}
                    color="black"
                  />
                  <Text className=" text-[#171719] font-semibold">
                    Conversar
                  </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalHome;
