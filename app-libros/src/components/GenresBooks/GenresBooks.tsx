import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Image } from 'expo-image';
import CircleWithImages from './CircleWithImages';
import { ListInput } from './ListInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const BookChangeTitle = require('../../../assets/BookChangeTitle.svg');

const image1 = require('../../../assets/GenresBooks/9788416243686.svg');
const image2 = require('../../../assets/GenresBooks/9788415108610.svg');
const image3 = require('../../../assets/GenresBooks/71QYLrc-IQL.svg');

const image4 = require('../../../assets/GenresBooks/97884162436861.svg');
const image5 = require('../../../assets/GenresBooks/97884151086101.svg');
const image6 = require('../../../assets/GenresBooks/71QYLrc-IQL1.svg');
const backArrow = require('../../../assets/GenresBooks/backArrow.svg');

export const listOfGenresIcons: { [key: string]: any } = {
  heart: require('../../../assets/GenresBooks/icons/heart.svg'),
  shootingStar: require('../../../assets/GenresBooks/icons/shootingStar.svg'),
  knife: require('../../../assets/GenresBooks/icons/knife.svg'),
  boxOfPopcorn: require('../../../assets/GenresBooks/icons/boxOfPopcorn.svg'),
  tower: require('../../../assets/GenresBooks/icons/tower.svg'),
  spiral: require('../../../assets/GenresBooks/icons/spiral.svg'),
  ufo: require('../../../assets/GenresBooks/icons/ufo.svg'),
  hatAndGlasses: require('../../../assets/GenresBooks/icons/hatAndGlasses.svg'),
};

export const listOfGenres = [
  { title: 'Amor', icon: 'heart' },
  { title: 'Fantasía', icon: 'shootingStar' },
  { title: 'Terror', icon: 'knife' },
  { title: 'Ficción', icon: 'boxOfPopcorn' },
  { title: 'Historia', icon: 'tower' },
  { title: 'Psicologico', icon: 'spiral' },
  { title: 'Ciencia ficción', icon: 'ufo' },
  { title: 'Misterio', icon: 'hatAndGlasses' },
];

const { width, height } = Dimensions.get('screen');

const creatingKey = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 100; i += 1) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length - 1)
    );
  }
  return result;
};

interface GenresBooksProps {
  navigation: any;
}

export const GenresBooks: React.FC<GenresBooksProps>  = ({ navigation }) => {
  const [listOfGenresInButtons, setListOfGenresInButtons] = useState<
    Array<any>
  >([]);

  const CreateGenreButtons = () => {
    if (listOfGenresInButtons.length === 0) {
      return [];
    }
    const list = listOfGenresInButtons.map((item) => {
      return (
        <TouchableOpacity
          key={creatingKey()}
          className="px-5 py-2 flex-row items-center justify-center"
          onPress={() => {
            const list = listOfGenresInButtons.filter(
              (ite) => ite.title !== item.title
            );
            setListOfGenresInButtons(list);
          }}
          style={{
            backgroundColor: '#FF9A1F',
            gap: 12,
            borderRadius: 999999999999999999,
          }}
        >
          <Image source={listOfGenresIcons[item.icon]} className="h-3 w-3.5" />
          <Text className="text-xs text-black h-4">
            {item.title || item.name}
          </Text>
        </TouchableOpacity>
      );
    });
    return list;
  };

  const [heightList, setHeightList] = useState(0);
  const [want, setWant] = useState<Array<string>>([]); // what you are looking for


  const submit = () => {
    const list = {
      slected: want,
      genres: listOfGenresInButtons,
    };
    navigation.navigate('Register3' as never);
  };

  return (
    <ScrollView
      className="w-full h-full"
      style={{
        backgroundColor: '#171719',
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <View
        style={{
          ...GenresBooksStyles.parentContainer,
          marginBottom: heightList,
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 12,
            marginBottom: 7,
            marginTop: 10,
          }}
        >
          80%
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 21,
          }}
        >
          <Image style={{ height: 15, width: 18 }} source={backArrow} />
          <View
            style={{
              width: (width / 100) * 80 - 20,
              height: 19,
              backgroundColor: '#838383',
              borderRadius: 50,
            }}
          >
            <View
              style={{
                width: '80%',
                height: '100%',
                backgroundColor: '#FF9A1F',
                borderRadius: 50,
              }}
            />
          </View>
        </View>

        <Image
          style={{
            width: (width / 100) * 40,
            height: (width / 100) * 18,
            marginBottom: 26,
            marginTop: 45,
          }}
          source={BookChangeTitle}
        />
        <Text style={{ ...GenresBooksStyles.text, marginBottom: 18 }}>
          ¿Qué buscás?
        </Text>
        <View
          style={{
            width: (width / 100) * 80,
            height: (width / 100) * 41,
            maxWidth: 301 * 2,
            maxHeight: 310,
            display: 'flex',
            flexDirection: 'row',
            gap: (width / 100) * 4,
            marginBottom: 12,
          }}
        >
          <CircleWithImages
            title="Libros"
            images={[image1, image2, image3]}
            style={{ width: '50%' }}
            selected={
              want[0] === 'Libros' ? true : want[1] === 'Libros' ? true : false
            }
            onPress={(e) => {
              if (want[0] === 'Libros' || want[1] === 'Libros') {
                const listSelected = want.filter((item) => item !== e);
                setWant(listSelected);
              } else {
                const listSelected = want.filter((item) => item !== e);
                listSelected.push(e);
                setWant(listSelected);
              }
            }}
          />
          <CircleWithImages
            title="Mangas"
            style={{ width: '50%' }}
            images={[image4, image5, image6]}
            selected={
              want[0] === 'Mangas' ? true : want[1] === 'Mangas' ? true : false
            }
            onPress={(e) => {
              if (want[0] === 'Mangas' || want[1] === 'Mangas') {
                const listSelected = want.filter((item) => item !== e);
                setWant(listSelected);
              } else {
                const listSelected = want.filter((item) => item !== e);
                listSelected.push(e);
                setWant(listSelected);
              }
            }}
          />
        </View>
        <Text style={{ ...GenresBooksStyles.text, marginBottom: 13 }}>
          ¿Qué generos son los que mas te interesan?
        </Text>
        <ListInput
          placeholder="Ejemplo: Terror"
          list={[...listOfGenres, '']}
          layoutChange={(e) => {
            const { heightList } = e;
            setHeightList(heightList);
          }}
          onPressItem={(e) => {
            const lis = listOfGenresInButtons.filter((ite) => ite !== e);
            lis.push(e);
            setListOfGenresInButtons([...lis]);
          }}
          // showAll={[false, 6]} // first value that says if displayedeverything, second value quantity
        />
        <View
          className="flex flex-row flex-wrap w-full px-3 mb-7 mt-7"
          style={{ gap: 10 }}
        >
          {CreateGenreButtons()}
        </View>
        <TouchableOpacity
          style={{
            width: (width / 100) * 80,
            height: (width / 100) * 12.3,
            maxWidth: 500,
            maxHeight: 70,
            backgroundColor: '#FF9A1F',
            borderRadius: (width / 100) * 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.8}
          onPress={submit}
        >
          <Text className="text-xs">Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const GenresBooksStyles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
