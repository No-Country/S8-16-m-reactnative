import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/MainNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

export const LoginScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>LoginScreen</Text>

      <Button
        title='Ingresar'
        onPress={() => navigation.navigate('HomeScreen') }
      />
    </View>
  )
}
