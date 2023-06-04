import { Book } from '../../interfaces/book.interface';
import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

function ModalHome({
  isModalVisible,
  toggleModal,
  book,
}: {
  isModalVisible: boolean;
  toggleModal: () => void;
  book: Book;
}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Modal
      isVisible={isModalVisible}
      className="flex justify-start bg-background max-h-[80vh] mt-12 rounded-2xl overflow-hidden"
      onBackdropPress={toggleModal}
    >
      <View className="flex items-center bg-bookGrey p-5">
        <Image
          source={{ uri: book.image }}
          // source={require('../../assets/books/naranja-mecanica.png')}

          className="w-[160px] h-[270px] shadow-md shadow-black"
        />
        <View className="absolute top-0 z-30  bg-[#252525] rounded-bl-lg rounded-tr-lg right-0 p-3 shadow-sm shadow-black">
          {/* Agrega aquí el icono que deseas mostrar */}
          <Ionicons name="bookmark-outline" size={20} color="white" />
        </View>
        <View className="flex justify-center items-center bg-[#FF9A1F] w-[160px] p-2 rounded-xl my-5">
          <Text className="font-medium">Estado: {book.status}</Text>
        </View>
        <View className="w-full flex flex-row justify-center items-center gap-3">
          <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
            {book.type === 'Trueque' ? (
              <MaterialIcons name="compare-arrows" size={24} color="black" />
            ) : (
              <FontAwesome5 name="coins" size={24} color="black" />
            )}
            <Text className="ml-2 text-bookBlack font-semibold">
              {book.type}
            </Text>
          </View>
          <View className="flex flex-row justify-center items-center px-5 py-3 rounded-3xl bg-bookWhite">
            <FontAwesome5 name="fantasy-flight-games" size={24} color="black" />
            <Text className="ml-2 text-bookBlack font-semibold">
              {book.genre}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-1 justify-between h-full ">
        <View className="flex flex-1 gap-1 p-5 justify-center">
          <Text className="text-bookWhite font-semibold text-lg">
            {book.title}
          </Text>
          <Text className="text-bookWhite font-light">{book.description}</Text>
        </View>
        <View className="flex justify-between flex-row">
          <View
            className="bg-[#252525] p-5 w-[160px]"
            style={{ borderTopRightRadius: 15 }}
          >
            <View className="flex flex-row items-center p-1 justify-end w-full gap-2">
              <Text className="text-white font-semibold  text-[11px] justify-end">
                @{book.userName}
              </Text>

              <Image source={{ uri: book.userImage }} className=" w-10 h-10" />
            </View>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('ChatMainScreen');
              toggleModal();
            }}
            className="flex flex-row justify-center items-center h-full bg-[#FF9A1F]"
            style={{ borderTopLeftRadius: 15 }}
          >
            <View className="flex flex-row justify-center items-center bg-[#FF9A1F] p-5 w-[160px] ">
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
              />
              <Text className="ml-3 text-[#171719] font-semibold">
                Conversar
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default ModalHome;
