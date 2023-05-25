import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/MainNavigation';

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>HomeScreen</Text>

      <Button
        title='Volver'
        onPress={() => navigation.pop() }
      />
      <Button
        title='Perfil'
        onPress={() => navigation.navigate('ProfileScreen') }
    />
    </View>
  )
}
