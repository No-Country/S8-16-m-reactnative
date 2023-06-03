import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { RootStackParams } from "../../navigation/stacks/OnboardingStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EllipseSlider } from "../../components/onboarding/EllipseSlider";
import { NextButton } from "../../components/onboarding/NextButton";

export const Onboarding1Screen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { top } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-bookBlack">
      <View className="items-center justify-center">
        <Image
          source={require("../../../assets/onboarding/onboarding1.png")}
          className="w-[601px] h-[462px] rounded-b-full opacity-70"
        />
      </View>

      <View
        className="items-center absolute w-full py-1"
        style={{ top: top + 80 }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          className="w-[144px] h-[65px]"
        />
      </View>

      <View className="flex-1">
        <View className="items-center justify-center mt-5">
          <Text className="text-base font-bold text-bookWhite text-center">
            ¡La app creada para que{"\n"}
            realicés <Text className="font-black">trueques</Text> y{" "}
            <Text className="font-black">vendas</Text>
            {"\n"}
            tus libros con el estilo mas{"\n"}
            copado!
          </Text>
        </View>

        {/* Button y slide */}
        <View className="flex-1 items-center justify-end pb-5">
          <View className="items-center justify-center mb-10">
            <NextButton
              onPress={() => navigation.navigate("Onboarding2Screen")}
              title="Siguiente"
            />
          </View>

          <View className="items-center justify-center flex-row">
            <EllipseSlider color="#FF9A1F" />
            <EllipseSlider color="#4C4C4C" />
            <EllipseSlider color="#4C4C4C" />
          </View>
        </View>
      </View>
    </View>
  );
};
