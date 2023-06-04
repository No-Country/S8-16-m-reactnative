import { Image } from 'expo-image';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  View,
  PanResponder,
} from 'react-native';
const downArrow = require('../../../assets/GenresBooks/downArrow.svg');

export function ListInput({
  list,
  placeholder,
  layoutChange = () => {},
  style = {},
  onPressItem = () => {},
  closeAutomatically = true,
  labelStyle = {},
  showAll = [true],
  itemListStyle = {}
}: {
  list: Array<{}> | [];
  placeholder: string;
  layoutChange?: (...args: any) => any;
  style?: {};
  onPressItem?: (...args: any) => any;
  closeAutomatically?: boolean;
  labelStyle?:{};
  showAll?: Array<boolean | number | any>;
  itemListStyle?: {};
}) {

  const buttonRef: {} | any = useRef(null);

  const [touchableOpacitySize, setTouchableOpacitySize] = useState({
    width: 0,
    height: 0,
  });
  const heightList = showAll[0]
    ? (touchableOpacitySize.height / 100) * 90 * list.length
    : ((touchableOpacitySize.height / 100) * 90 + 1.2) * showAll[1];
  const heightListAll = (touchableOpacitySize.height / 100) * 90 * list.length;

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
      }, 500);
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
    const listReturn = list.map((item: any, index: number) => {
      return (
        <TouchableOpacity
          key={item.title || item.name + 'list'}
          onPress={() => {
            if (item !== '') {
              onPressItem(item);
              closeAutomatically && isOpenList();
            }
          }}
          style={{
            width: '100%',
            borderTopWidth: 2,
            borderTopColor: index === 0 ? '#606060' : 'transparent',
            borderBottomWidth: 2,
            borderBottomColor:
              item.title || item.name
                ? '#606060'
                : item === ''
                ? 'transparent'
                : '#606060',
            paddingLeft: 30,
            justifyContent: 'flex-end',
            paddingBottom: '2%',
            ...itemListStyle,
            height:
              index === 0
                ? (touchableOpacitySize.height / 100) * 90 + 2
                : (touchableOpacitySize.height / 100) * 90,
          }}
        >
          <Text className="text-xs text-white">
            {item.title ? item.title : item.name ? item.name : item}
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

  const scrollViewAnim = useState(new Animated.Value(0))[0];
  const transformScrollAnim = scrollViewAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -heightList],
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_: any, gestureState: any) => {
      const { dy } = gestureState;
      let dragOffset = (dy / heightList) * -1;
      dragOffset = dragOffset + scrollPosition;
      if (
        dragOffset >= 0 &&
        !showAll[0] &&
        heightListAll - dragOffset * heightList >= heightList
      ) {
        scrollViewAnim.setValue(dragOffset);
        gestureState.dragOffset = dragOffset;
      } else if (dragOffset < 0) {
        scrollViewAnim.setValue(0);
        gestureState.dragOffset = 0;
      }
    },
    onPanResponderRelease: (e: any, gestureState: any) => {
      const { dragOffset } = gestureState;
      if (dragOffset) {
        setScrollPosition(dragOffset);
      }
    },
  });

  return (
    <View
      ref={buttonRef}
      style={{
        width: '80%',
        borderRadius: (touchableOpacitySize.width / 100) * 2,
        ...ListInputStyles.parentContainer,
        borderBottomLeftRadius: seeList
          ? 0
          : (touchableOpacitySize.width / 100) * 2,
        borderBottomRightRadius: seeList
          ? 0
          : (touchableOpacitySize.width / 100) * 2,
        ...style,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: (touchableOpacitySize.width / 100) * 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#272727',
          paddingLeft: 30,
          paddingRight: 19,
          borderRadius: (touchableOpacitySize.width / 100) * 2,
          borderBottomLeftRadius: isOpenSeeList
            ? 0
            : (touchableOpacitySize.width / 100) * 2,
          borderBottomRightRadius: isOpenSeeList
            ? 0
            : (touchableOpacitySize.width / 100) * 2,
          ...labelStyle,
        }}
        onPress={isOpenList}
      >
        <Text
          className="text-xs"
          style={{
            color: '#4D4D4D',
          }}
        >
          {placeholder}
        </Text>
        <Animated.View
          style={{
            transform: [{ rotateZ: iconRotateZ }],
          }}
        >
          <Image className="w-2.5 h-3.5" source={downArrow} />
        </Animated.View>
      </TouchableOpacity>

      {list && (
        <View
          style={{
            position: 'absolute',
            width: touchableOpacitySize.width,
            top: '100%',
            height: isOpenSeeList ? heightList : 0,
            overflow: 'hidden',
            backgroundColor: 'transparent',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
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
              overflow: 'hidden',
              height: heightList,
            }}
          >
            <Animated.View
              style={{ transform: [{ translateY: transformScrollAnim }] }}
              {...panResponder.panHandlers}
            >
              {renderItemList()}
            </Animated.View>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const ListInputStyles = StyleSheet.create({
  parentContainer: {
    maxWidth: 500,
    maxHeight: 70,
    zIndex: 999999999999999999999999999999999999999999999999,
    backgroundColor: '#272727',
  },
});
