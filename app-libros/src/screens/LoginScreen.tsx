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
import { RootStackParams } from '../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { DocumentData, Query, addDoc, collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (text: string) => {
    setUser(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

 /* const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const userRef = collection(db, 'users');
      const querySnapshot = await getDocs(query(userRef, where('googleId', '==', userInfo.user.id), limit(1)));

      if (querySnapshot.empty) {
        // No se encontró el usuario en Firestore, por lo que se creará uno nuevo
        const newUserRef = await addDoc(userRef, {
          googleId: userInfo.user.id,
          name: userInfo.user.name,
          email: userInfo.user.email,
          // Otros datos que desees guardar
        });
        console.log('Usuario creado con ID:', newUserRef.id);
      } else {
        // El usuario ya existe en Firestore
        // Aquí puedes actualizar los datos del usuario si es necesario
        querySnapshot.forEach((doc) => {
          console.log('Usuario existente con ID:', doc.id);
        });
      }

      // El usuario ha iniciado sesión con éxito y se ha guardado en Firestore
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Error', 'El inicio de sesión fue cancelado por el usuario')
        // El inicio de sesión fue cancelado por el usuario
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Error', 'Ya hay un inicio de sesión en progreso')
        // Ya hay un inicio de sesión en progreso
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Los servicios de Google Play no están disponibles')
        // Los servicios de Google Play no están disponibles
      } else {
        Alert.alert('Error', 'Ocurrio un error durante el inicio de sesion con google, vuelva a intentarlo')
        // Otro tipo de error
      }
    }
  }; */

  const handleLogin = async () => {
    try {
      const usersRef = collection(db, 'usuarios');
      const queryRef = query(usersRef, where('user', '==', user));
      const querySnapshot = await getDocs(queryRef);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          navigation.navigate('StackNavigation' as never);
        } else {
          Alert.alert('Error', 'Contraseña incorrecta. Vuelve a intentarlo');
          console.log("contraseña incorrecta")
        }
      } else {
        Alert.alert(
          'Error',
          'No se ha encontrado ninguna cuenta de Book Change asociada a este usuario. Vuelve a intentarlo o crea una cuenta.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error durante el inicio de sesión');
    }
  };

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className="flex-1 justify-center items-center bg-[#1E1E1E]">
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 154, height: 69 }}
      ></Image>
      <Text className="text-[#FFFFFF] text-base mb-7 mt-5">¡Bienvenido!</Text>
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-6 w-4/5 rounded-xl text-xs text-white"
        placeholderTextColor="#4D4D4D"
        value={user}
        onChangeText={handleUser}
        placeholder="Ingresa tu usuario"
      />
      <TextInput
        className="bg-[#272727] px-8 py-3 mb-7 w-4/5 rounded-xl text-xs text-white"
        placeholderTextColor="#4D4D4D"
        value={password}
        onChangeText={handlePassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.8}
        className="bg-[#0F0F0F] px-8 py-4 mb-3 w-4/5 rounded-xl"
      >
        <Text className="text-[#FFFFFF] text-xs self-center">INGRESAR</Text>
      </TouchableOpacity>
      <Text className="text-[#606060] text-xs self-center">
        Iniciar sesion con
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen' as never)}
        activeOpacity={0.8}
        className="bg-[#4C4C4C] px-8 py-4 mt-3 w-4/5 rounded-xl"
      >
        <Text className="text-[#FFFFFF] text-xs self-center">
          INGRESAR CON GOOGLE
        </Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.circle} />
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register1' as never)}
        activeOpacity={0.8}
      >
        <Text className="text-[#4C4C4C] text-xs self-center">Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 35,
  },
  line: {
    width: 100,
    height: 0,
    borderWidth: 0.3,
    borderColor: '#606060',
  },
  circle: {
    marginLeft: 17,
    marginRight: 17,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#606060',
    marginHorizontal: 5,
  },
});
function firestore() {
  throw new Error('Function not implemented.');
}

function isEmpty(querySnapshot: Query<DocumentData>) {
  throw new Error('Function not implemented.');
}

