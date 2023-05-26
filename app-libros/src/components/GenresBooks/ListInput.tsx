import { Image } from 'expo-image';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
const downArrow = require('../../../assets/GenresBooks/downArrow.svg');

export function ListInput({
  list,
  placeholder,
  layoutChange = (a) => {},
  style = {},
  onPressItem = (e) => {},
}: {
  list: Array<{}> | [];
  placeholder: string;
  layoutChange?: (args: any) => any;
  style?: {}; //
  onPressItem?: (args: any) => any;
}) {
  const buttonRef: {} | any = useRef(null);

  const [touchableOpacitySize, setTouchableOpacitySize] = useState({
    width: 0,
    height: 0,
  });
  const heightList = (touchableOpacitySize.height / 100) * 90 * list.length;

  const animationTranslateY = useState(new Animated.Value(0))[0];
  const animationIconRotateZ = useState(new Animated.Value(0))[0];
  const [seeList, setSeeList] = useState(false);
  const [isOpenSeeList, setIsOpenSeeList] = useState(false);

  useEffect(() => {
    function init() {
      setTimeout(() => {
        buttonRef.current.measure(
          (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number
          ) => {
            setTouchableOpacitySize({ width, height });

            if (width === 0 || height === 0) {
              init();
            }
          }
        );
      }, 1000);
    }
    init();
  }, []);

  useEffect(() => {
    if (seeList) {
      setIsOpenSeeList(true);
      layoutChange({ closed: false, heightList });
    }
  }, [seeList]);

  let listTranslateY = animationTranslateY.interpolate({
    inputRange: [0, 1],
    outputRange: [-(heightList + 10), 0],
  });

  let iconRotateZ = animationIconRotateZ.interpolate({
    inputRange: [0, 1],
    outputRange: ['-0deg', '-180deg'],
  });

  const renderItemList = () => {
    const listReturn = list.map((item: any) => {
      return (
        <TouchableOpacity
          key={item.title + 'list'}
          onPress={() => onPressItem(item)}
          style={{
            width: '100%',
            height: (touchableOpacitySize.height / 100) * 90,
            borderBottomWidth: 2,
            borderBottomColor: item.title
              ? '#606060'
              : item === ''
              ? 'transparent'
              : '#606060',
            paddingLeft: 30,
            justifyContent: 'flex-end',
            paddingBottom: '2%',
          }}
        >
          <Text className="text-xs text-white">
            {item.title ? item.title : item}
          </Text>
        </TouchableOpacity>
      );
    });
    return listReturn;
  };

  const isOpenList = () => {
    const toValue = seeList ? 0 : 1;
    Animated.spring(animationTranslateY, {
      toValue: toValue,
      useNativeDriver: true,
      overshootClamping: true,
      mass: 10,
    }).start(() => {
      if (seeList) {
        setIsOpenSeeList(false);
        layoutChange({ closed: true, heightList: 0 });
      }
    });

    Animated.timing(animationIconRotateZ, {
      toValue,
      duration: 700,
      useNativeDriver: true,
    }).start();

    setSeeList(!seeList);
  };

  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: (touchableOpacitySize.width / 100) * 15,
        ...ListInputStyles.parentContainer,
        borderRadius: (touchableOpacitySize.width / 100) * 2,

        borderBottomLeftRadius: seeList
          ? 0
          : (touchableOpacitySize.width / 100) * 2,
        borderBottomRightRadius: seeList
          ? 0
          : (touchableOpacitySize.width / 100) * 2,
        ...style,
      }}
      activeOpacity={1}
      ref={buttonRef}
      onPress={isOpenList}
    >
      <Text className="text-xs">{placeholder}</Text>
      <Animated.View
        style={{
          transform: [{ rotateZ: iconRotateZ }],
        }}
      >
        <Image className="w-2.5 h-3.5" source={downArrow} />
      </Animated.View>
      {list && (
        <View
          style={{
            position: 'absolute',
            width: touchableOpacitySize.width,
            top: '100%',
            height: isOpenSeeList ? heightList : 0,
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
              width: '100%',
              backgroundColor: '#272727',
              top: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              transform: [{ translateY: listTranslateY }],
              borderTopWidth: 2,
              borderTopColor: '#606060',
            }}
          >
            {renderItemList()}
          </Animated.View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const ListInputStyles = StyleSheet.create({
  parentContainer: {
    maxWidth: 500,
    maxHeight: 70,
    backgroundColor: '#272727',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 19,
    position: 'relative',
    zIndex: 999999999999999999999999999999999999999999999999,
  },
});
