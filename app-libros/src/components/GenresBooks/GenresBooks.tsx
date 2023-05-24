import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import CircleWithImages from './CircleWithImages';

const BookChangeTitle = require('../../../assets/BookChangeTitle.svg');

const image1 = require('../../../assets/GenresBooks/9788416243686.svg');
const image2 = require('../../../assets/GenresBooks/9788415108610.svg');
const image3 = require('../../../assets/GenresBooks/71QYLrc-IQL.svg');

const image4 = require('../../../assets/GenresBooks/97884162436861.svg');
const image5 = require('../../../assets/GenresBooks/97884151086101.svg');
const image6 = require('../../../assets/GenresBooks/71QYLrc-IQL1.svg');

const heart = require('../../../assets/GenresBooks/heart.svg');

export const GenresBooks = () => {
  const { width } = Dimensions.get('screen');
  return (
    <View className="w-full h-full" style={{ backgroundColor: '#171719' }}>
      <ScrollView className="w-full h-full">
        <View style={GenresBooksStyles.parentContainer}>
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
            />
            <CircleWithImages
              title="Mangas"
              style={{ width: '50%' }}
              images={[image4, image5, image6]}
            />
          </View>
          <Text style={{ ...GenresBooksStyles.text, marginBottom: 13 }}>
            ¿Qué generos son los que mas te interesan?
          </Text>
          <View className="flex flex-row flex-wrap w-full px-3 mb-7">
            <TouchableOpacity
              className="px-5 py-2 flex-row items-center justify-center"
              style={{
                backgroundColor: '#FCF8F4',
                gap: 12,
                borderRadius: 999999999999999999,
              }}
            >
              <Image source={heart} className="h-3 w-3.5" />
              <Text className="text-xs text-black h-4">Amor</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: (width / 100) * 80,
              height: (width / 100) * 12,
              maxWidth: 500,
              maxHeight: 70,
              backgroundColor: '#FF9A1F',
              borderRadius: (width / 100) * 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const GenresBooksStyles = StyleSheet.create({
  parentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
