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
    setUser(text.toLowerCase());
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const validateUser = (user: string) => {
    return !user.includes(' ');
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    const usersRef = collection(db, 'usuarios');
    const queryRef = query(usersRef, where('user', '==', user));
    const querySnapshot = await getDocs(queryRef);
    
    if(nameLastname.trim() == ''){
      Alert.alert('Error', 'Ingrese un su nombre y apellido');
      return;
    }

    if (!validateUser(user)) {
      Alert.alert('Error', 'El usuario no debe contener espacios en blanco');
      return;
    } else if(user.trim() == ''){
      Alert.alert('Error', 'Ingrese un usuario');
      return;
    }

    if(password.trim() == ''){
      Alert.alert('Error', 'Ingrese una contraseña');
      return;
    }else if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y tener un mínimo de 8 caracteres.'
      );
      return;
    }

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
