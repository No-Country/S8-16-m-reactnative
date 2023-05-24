import { Image } from 'expo-image';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const pointedOval = require('../../../assets/GenresBooks/pointedOval.svg');
const Ellipse = require('../../../assets/GenresBooks/Ellipse.svg');

export default function CircleWithImages({
  title = 'CircleWithImages',
  images = [''],
  style = {},
}) {
  return (
    <View
      className="flex w-full h-full items-center"
      style={{ ...CircleWithImagesStyles.parentContainer, ...style }}
    >
      <Image className="w-full h-full absolute" source={Ellipse} />
      <Text style={CircleWithImagesStyles.title}>{title}</Text>
      <View className="" style={CircleWithImagesStyles.imageContainer}>
        <Image source={images[0]} style={CircleWithImagesStyles.image} />
        <View
          className="flex absolute items-center w-full h-full top-0"
          style={{
            width: '136%',
            paddingHorizontal: '12%',
          }}
        >
          <Image source={images[1]} style={CircleWithImagesStyles.image} />
        </View>

        <Image source={images[2]} style={CircleWithImagesStyles.image} />

        <View
          className="flex w-full h-full absolute items-center justify-end"
          style={{
            bottom: '-7.2%',
            paddingBottom: '19%',
            width: '136%',
            height: '134%',
            paddingHorizontal: '12%',
          }}
        >
          <Image
            source={pointedOval}
            style={{
              ...CircleWithImagesStyles.circleShadow,
              bottom: 2,
            }}
          />
          <Image
            source={pointedOval}
            style={{ ...CircleWithImagesStyles.circleShadow }}
          />
        </View>
      </View>
    </View>
  );
}

const CircleWithImagesStyles = StyleSheet.create({
  parentContainer: {},
  title: {
    color: '#FFFFFF',
    fontSize: 13,
    height: '16%',
    paddingTop: '6%',
  },
  imageContainer: {
    width: '100%',
    height: '76%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    zIndex: 2,
    paddingHorizontal: '12%',
    marginTop: '6%',
    paddingBottom: '19%',
  },
  image: {
    height: '90%',
    width: '45%',
    zIndex: 2,
  },
  circleShadow: {
    width: '60%',
    height: '6%',
  },
});
