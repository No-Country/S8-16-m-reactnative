import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/MainNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NextButton } from '../../components/onboarding/NextButton';
import { EllipseSlider } from '../../components/onboarding/EllipseSlider';

export const Onboarding3Screen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { top } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-bookBlack">
      <View className="items-center justify-center">
        <Image
          source={require('../../../assets/onboarding/onboarding3.png')}
          className="w-[601px] h-[462px] rounded-b-full opacity-70"
        />
      </View>

      <View className="items-center absolute w-full" style={{ top: top + 80 }}>
        <Image
          source={require('../../../assets/logo.png')}
          className="w-[144px] h-[65px]"
        />
      </View>

      <View className="flex-1">
        <View className="items-center justify-center mt-5">
          <Text className="text-base font-bold text-bookWhite text-center">
            También podes realizar{'\n'}
            <Text className="font-black">búsquedas</Text> de libros y elegir
            {'\n'}
            por <Text className="font-black">genero</Text> además de{'\n'}
            aplicar <Text className="font-black">filtros</Text>.{'\n'}
            {'\n'}
            <Text className="font-black">¿Qué estas esperando?</Text>
          </Text>
        </View>

        {/* Button y slide */}
        <View className="flex-1 items-center justify-end pb-5">
          <View className="items-center justify-center mb-10">
            <NextButton
              onPress={() => navigation.navigate('InnerStack')}
              title="Siguiente"
            />
          </View>

          <View className="items-center justify-center flex-row">
            <EllipseSlider color="#4C4C4C" />
            <EllipseSlider color="#4C4C4C" />
            <EllipseSlider color="#FF9A1F" />
          </View>
        </View>
      </View>
    </View>
  );
};
