import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
import { DatosForm, InnerStackParams } from '../../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';

interface FormularioProps {
  navigation: any;
}

export const Register1: React.FC<FormularioProps> = ({ navigation }) => {
  const [nameLastname, setNameLastname] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleNameLastname = (text: string) => {
    setNameLastname(text);
  };

  const handleUser = (text: string) => {
    setUser(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    const usersRef = collection(db, 'usuarios');
    const queryRef = query(usersRef, where('user', '==', user));
    const querySnapshot = await getDocs(queryRef);

    if (!querySnapshot.empty) {
      Alert.alert(
        'Error',
        'Ya existe un usuario registrado con ese nombre de usuario'
      );
      console.log(
        'Error',
        'Ya existe un usuario registrado con ese nombre de usuario'
      );
    } else {
      navigation.navigate('Register2', {
        nameLastname,
        user,
        password,
      });
    }
  };

  // const [data, setData] = useState({
  //   nameLastname: "",
  //   user: "",
  //   password: ""
  // })

  // const datos: DatosForm = {
  //   nameLastname: "",
  //   user: "",
  //   password: "",
  // };

  // const handleInput = (name: string, value: string) => {
  //   setData({ ...data, [name]: value});
  // }

  // const submit = ()=>{
  //   const datos: DatosForm = {
  //     nameLastname: data.nameLastname,
  //     user: data.user,
  //     password: data.password,
  //   };

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
        value={nameLastname}
        onChangeText={handleNameLastname}
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre y apellido "
      />
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs text-white"
        value={user}
        onChangeText={handleUser}
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresá tu nombre de usuario"
      />
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs text-white"
        value={password}
        onChangeText={handlePassword}
        placeholderTextColor="#4D4D4D"
        placeholder="Ingresa tu contraseña"
        secureTextEntry
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
