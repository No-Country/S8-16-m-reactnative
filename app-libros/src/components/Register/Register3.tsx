import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Register3Props {
  navigation: any;
  route: any;
}

export const Register3: React.FC<Register3Props> = ({navigation, route}) => {
  
  const { nameLastname, user, password, email, city } = route.params;
  // const navigation = useNavigation<StackNavigationProp<InnerStackParams>>();
  const datos = route.params

  useEffect(() => {
    console.log('Datos anteriores:', nameLastname , password, email, city );
    console.log('Nuevos datos:');
    console.log(datos)
  }, [nameLastname, user, password, email, city])

  return (
    <View className='flex-1 justify-center items-center bg-[#1E1E1E]'>
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
      ></Image>
      <Text
        className='text-[#FFFFFF] text-base mb-7 mt-5 text-center font-bold'
      >¡Listo!{'\n'}
      Una cosita mas</Text>
      <Text
        className='text-[#FFFFFF] text-base mb-16 text-center w-2/4'
      >¿Quéres publicar un libro o manga para vender o hacer truque?</Text>

      <View className='flex flex-row mb-10'>
      <TouchableOpacity
        activeOpacity={0.8}
        className='bg-[#FF9A1F] px-5 py-5 rounded-xl w-32'
      >
        <Text className='text-[#171719] text-xs self-center font-extrabold'>
          SI, QUIERO
        </Text>

      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('HomeScreen')}
        activeOpacity={0.8}
        className='bg-[#272727] px-0 py-5 ml-5 w-32 rounded-xl'
      >
        <Text className='text-[#FF9A1F] text-xs self-center font-extrabold'>
          NO, GRACIAS
        </Text>

      </TouchableOpacity>
      </View>
      <View style={styles.line} />
        <Text className='text-[#4C4C4C] text-xs text-center self-center w-7/12 mt-8'>
        Tranquilo, podes hacerlo despues de creada tu cuenta
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    line: {
      width: 282,
      height: 0,
      borderWidth: 0.3,
      borderColor: '#606060',
    }
  });