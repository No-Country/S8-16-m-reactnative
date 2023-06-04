import { Image } from 'expo-image';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
const pointedOval = require('../../../assets/GenresBooks/pointedOval.svg');
const Ellipse = require('../../../assets/GenresBooks/Ellipse.svg');
const EllipseSelected = require('../../../assets/GenresBooks/EllipseSelected.svg');
const CircleApproval = require('../../../assets/GenresBooks/CircleApproval.svg');

export default function CircleWithImages({
  title = 'CircleWithImages',
  images = [''],
  style = {},
  onPress = (a) => {},
  selected = false,
}: {
  title: string;
  images: Array<any>;
  style: object;
  onPress?: (...arg: any) => any;
  selected?: boolean;
}) {
  return (
    <TouchableOpacity
      style={{
        ...CircleWithImagesStyles.parentContainer,
        ...style,
      }}
      className="flex w-full h-full items-center"
      onPress={() => onPress(title)}
      activeOpacity={0.8}
    >
      <Image
        className="w-full h-full absolute"
        source={selected ? EllipseSelected : Ellipse}
      />
      {selected && (
        <Image
          style={{
            height: '14%',
            width: '14%',
            position: 'absolute',
            right: '13%',
            bottom: '4%',
          }}
          source={CircleApproval}
        />
      )}
      {/* envolver con TouchableOpacity and poner onPress */}
      <Text style={CircleWithImagesStyles.title}>{title}</Text>
      <View className="" style={CircleWithImagesStyles.imageContainer}>
        <Image source={images[0]} style={CircleWithImagesStyles.image} />
        <View
          className="flex absolute items-center w-full h-full top-0 left-0"
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
    </TouchableOpacity>
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
