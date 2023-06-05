import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import { SvgComponent } from '../components/Svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParams } from '../navigation/StackNavigation';
import { getAllBooks } from '../services/books';
import { AntDesign } from '@expo/vector-icons';
import { Book } from '../interfaces/book.interface';
import ModalHome from '../components/Home/Modal';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [books, setBooks] = useState<Book[]>([]);

  // const cardsData = [
  //   {
  //     id: 1,
  //     text: '@kapipiola',
  //     link: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623078210-la-naranja-mecanica-anthony-burgess-201505261226.jpg?crop=1xw:1xh;center,top&resize=480:*',
  //   },
  //   {
  //     id: 2,
  //     text: '@potrero',
  //     link: 'https://4.bp.blogspot.com/-Gstf39v_5Fk/VYcRdX1F3VI/AAAAAAAA17k/HEDty5lorwM/s1600/HarryPotterMisterioPrincipe.jpg',
  //   },
  //   {
  //     id: 3,
  //     text: '@leanfran',
  //     link: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623080744-41CDgO39Q7L._SL500_.jpg',
  //   },
  //   {
  //     id: 4,
  //     text: '@tulipan',
  //     link: 'https://s-media-cache-ak0.pinimg.com/originals/23/64/31/23643180b97ce3b3129e8ea096fc8a79.jpg',
  //   },
  //   {
  //     id: 5,
  //     text: '@oscar49',
  //     link: 'https://s3.amazonaws.com/virginia.webrand.com/virginia/344/TUjmSfGDgg2/001d5553bc88ae1b412577eba411c8c2.jpg?1660234137',
  //   },
  //   {
  //     id: 6,
  //     text: '@user32',
  //     link: 'https://i.pinimg.com/736x/76/6f/3d/766f3d034ffe6a13acfbe9394553c531--novel-cover-design-book-cover-designs.jpg',
  //   },
  //   {
  //     id: 7,
  //     text: '@fandeharry',
  //     link: 'https://imagessl2.casadellibro.com/a/l/t0/52/9788499086552.jpg',
  //   },
  //   {
  //     id: 8,
  //     text: '@userreal',
  //     link: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-creative-ideas-book-cover-design-template-52f7ec58f53452b9b46a351cea1bd9a1_screen.jpg?ts=1636992082',
  //   },
  //   {
  //     id: 9,
  //     text: '@jose21',
  //     link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSSqqCErh-lvWU_8KVa_O9W4JzlLO6XWAGA&usqp=CAU',
  //   },
  //   {
  //     id: 10,
  //     text: '@Card4',
  //     link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLobvPSOq9fjamuS8pRXKv8ENzjQjB2ACOw&usqp=CAU',
  //   },
  // ];

  // const BOOKS = [
  //   {
  //     id: 1,
  //     title: 'La naranja mecanica',
  //     descripcion: 'Quiero cambiar este libro por uno del genero romantico',
  //     image: require('../../assets/books/naranja-mecanica.png'),
  //   },

  //   {
  //     id: 2,
  //     title: 'El bazar de los malos sueños',
  //     descripcion: 'Quiero cambiar este libro por uno del genero romantico',
  //     image: require('../../assets/books/stephen-king.png'),
  //   },
  // ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getAllBooks().then((initialBooks) => {
      setBooks(initialBooks);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 bg-background justify-start items-center">
        <View className="bg-background shadow-sm shadow-black h-16 px-4 flex flex-row justify-between items-center">
          <View className="flex flex-row gap-1 items-center">
            <Ionicons
              name="options-outline"
              size={29}
              color="white"
              className=""
            />
            <View className="mr-2" />
            <Ionicons
              name="notifications-outline"
              size={29}
              color="white"
              className=""
            />
          </View>
          <View className="flex items-center flex-grow pr-8 ">
            <SvgComponent />
          </View>
          <TouchableOpacity
            className="flex flex-row items-center rounded-full "
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Image
              source={require('../../assets/imgEj/fotoPerfil.png')}
              className="w[44px] h-[44px]"
            />
          </TouchableOpacity>
        </View>

        <View className="justify-start w-screen pl-4 pt-5">
          <Text className="text-white font-bold text-lg ">
            Libros en tendencia
          </Text>
          <ScrollView
            horizontal
            className="p-4"
            showsHorizontalScrollIndicator={false}
          >
            {books.map((book, index) => (
              <View key={index + 1}>
                <Text className="absolute -left-3 top-1 -z-20  text-[60px] font-bold text-[#FF8A00]">
                  0{index + 1}
                </Text>

                <TouchableOpacity
                  onPress={toggleModal}
                  className="mr-4 mt-12 bg-bookGrey  z-10 
                  flex items-center
                  pt-4 rounded-2xl h-52 w-32"
                >
                  <View className="">
                    <Image
                      source={{ uri: book.image }}
                      className="w-[93px] h-[149px]"
                    />
                  </View>

                  <View className="flex flex-row items-center p-1 justify-around w-full">
                    <Text className="text-white font-semibold  text-[11px]">
                      @{book.userName}
                    </Text>

                    <Image
                      source={{ uri: book.userImage }}
                      className=" w-6 h-6"
                    />
                  </View>
                </TouchableOpacity>

                <View className="absolute top-12 z-30  bg-[#252525] rounded-bl-lg rounded-tr-lg right-4 p-3 shadow-sm shadow-black">
                  {/* Agrega aquí el icono que deseas mostrar */}
                  <Ionicons name="bookmark-outline" size={20} color="white" />
                </View>

                <ModalHome
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal}
                  book={book}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="flex-1">
          <Text className="text-white text-lg font-bold ">
            Libros recomendados
          </Text>

          <ScrollView showsHorizontalScrollIndicator={false} className="p-4 ">
            {books.map((book, index) => (
              <View
                key={index + 1}
                className="mt-8 flex flex-row flex-1  bg-[#48484d] w-80 rounded-2xl overflow-hidden"
              >
                <View className="flex w-[30%] bg-[#3A3A3A] p-3 items-center justify-center">
                  <Image
                    source={{ uri: book.image }}
                    className="w-[80px] h-[120px]"
                  />
                </View>

                <View className="flex relative w-[70%] p-2 items-center gap-2">
                  <View
                    className="absolute -top-0 -right-2 p-2 bg-[#252525]"
                    style={{ borderBottomLeftRadius: 15 }}
                  >
                    <Pressable
                      onPress={() => {
                        Alert.alert('Se ha agregado a favoritos');
                      }}
                    >
                      <AntDesign name="hearto" size={24} color="white" />
                    </Pressable>
                  </View>
                  <View className="flex gap-2 mt-5">
                    <Text className="text-bookWhite font-medium text-sm">
                      {book.title}
                    </Text>
                    <Text className="text-bookWhite  text-xs">
                      {book.description}
                    </Text>
                  </View>
                  <View className="flex flex-row items-center p-1 justify-end w-full gap-2">
                    <Text className="text-white font-semibold  text-[11px] justify-end">
                      @{book.userName}
                    </Text>

                    <Image
                      source={{ uri: book.userImage }}
                      className=" w-10 h-10"
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
