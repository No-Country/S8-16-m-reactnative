import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { DatosForm, InnerStackParams } from '../../navigation/MainNavigation';
import { Register3 } from './Register3';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';

interface Register2Props {
  navigation: any;
  route: any;
}

export const Register2: React.FC<Register2Props> = ({ navigation, route }) => {
  const { nameLastname, user, password } = route.params;
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handleCity = (text: string) => {
    setCity(text);
  };

  useEffect(() => {
    console.log('Datos anteriores:', nameLastname, password, user);
    console.log('Nuevos datos:', email, city);
  }, [nameLastname, user, password]);

  const handleSubmit = async () => {
    const usersRef = collection(db, 'usuarios');
    const queryRef = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(queryRef);

    if (!querySnapshot.empty) {
      Alert.alert(
        'Error',
        'Ya existe un usuario registrado con ese correo electrónico'
      );
      console.log(
        'Error',
        'Ya existe un usuario registrado con ese correo electrónico'
      );
    } else {
      try {
        const docRef = await addDoc(collection(db, 'usuarios'), {
          nameLastname,
          user,
          password,
          email,
          city,
        });
        Alert.alert(
          'Registro exitoso',
          'Muchas gracias por elegir Book Change!'
        );
        console.log('Registro exitoso', docRef.id);
        navigation.navigate('Register3', {
          nameLastname,
          user,
          password,
          email,
          city,
        });
      } catch (error) {
        Alert.alert('Error al registrar usuario');
        console.log('Error al registrar usuario', error);
      }
    }
  };
  // const handleSubmit = ()=>{
  //   navigation.navigate('Register3', {
  //     nameLastname,
  //     user,
  //     password,
  //     email,
  //     city
  //   })
  // }

  // const navigation = useNavigation<StackNavigationProp<InnerStackParams>>();

  return (
    <View className="flex-1 justify-center items-center bg-[#1E1E1E]">
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
      ></Image>
      <Text className="text-[#FFFFFF] text-base mb-7 mt-5">
        Ingresa tus datos
      </Text>
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs text-white"
        placeholderTextColor="#4D4D4D"
        onChangeText={handleEmail}
        value={email}
        placeholder="Ingresá tu email"
        keyboardType="email-address"
      />
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-20 w-4/5 rounded-xl text-xs text-white"
        placeholderTextColor="#4D4D4D"
        value={city}
        onChangeText={handleCity}
        placeholder="Ingresá tu localidad aproximada"
      />

      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.8}
        className="bg-[#FF9A1F] px-8 py-4 mb-3 w-4/5 rounded-xl"
      >
        <Text className="text-[#171719] text-xs self-center">SIGUIENTE</Text>
      </TouchableOpacity>
    </View>
  );
};
