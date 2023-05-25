import React from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';
import { CardChat } from '../components/Chats/CardChat';
import { ItemSeparator } from '../components/ItemSeparator';
import { Chat } from '../interfaces/chat.interfaces';

export const ChatMainScreen = () => {

    const { top } = useSafeAreaInsets();

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    const chats: Chat[] = [
        {
            user: 'Lomitojpg',
            min: '15',
            id: '123kjb251lpg3kb123',
            image: 'http://imgfz.com/i/Cq7t4H2.png'
        },
        {
            user: 'Michilover',
            min: '20',
            id: '12mgh7b2512l3kb123',
            image: 'http://imgfz.com/i/sxB6cJ4.png'
        },
        {
            user: 'Leo Messi',
            min: '45',
            id: '123kjb2512smnsb123',
            image: 'http://imgfz.com/i/WlCJ9ai.png'
        },
        {
            user: 'Ana',
            min: '44',
            id: '123kjb2512l3kbmg8',
            image: 'http://imgfz.com/i/yjKHrWn.png'
        },
        {
            user: 'Advincula',
            min: '50',
            id: '123kjb2510p3kb123',
            image: 'http://imgfz.com/i/ibvaeFu.png'
        },
        {
            user: 'Maria del barrio',
            min: '55',
            id: '123kl92512l3kb123',
            image: 'http://imgfz.com/i/QJvV24R.png'
        },
        {
            user: 'Carlos',
            min: '60',
            id: '456lksd7812l3kbmg8',
            image: 'http://imgfz.com/i/oi72ZgX.png'
        },
        {
            user: 'Luisa',
            min: '42',
            id: '456lksd7890p3kb123',
            image: 'http://imgfz.com/i/GY96aLO.png'
        },
        {
            user: 'Juan',
            min: '38',
            id: '456lk78912l3kb123',
            image: 'http://imgfz.com/i/QJvV24R.png'
        }

    ]

  return (
    <View className='flex-1 bg-bookBlack'>
      
        {/* Header */}
        <View 
            className='h-[65px] items-center justify-center border-b border-bookDarkGrey' 
            style={{ top: top }}
        >

            <View className='container mx-auto px-4 flex-row items-center justify-between mb-2'>

                <View className='bg-[#4C4C4C] h-[43px] items-center justify-center rounded-l-lg px-3'>
                    <Ionicons name="search" size={20} color="white" />
                </View>

                <TextInput 
                    className='flex-1 rounded-r-lg bg-[#1C1C1C] mr-5 text-[#fff] h-[43px] px-3'
                    placeholder='Buscá un chat...'
                    placeholderTextColor={'#777777'}
                />

                <TouchableOpacity activeOpacity={0.7} className='bg-[#4C4C4C] rounded-full w-[35px] h-[35px] items-center justify-center'>
                    <Ionicons name="md-pencil-outline" size={20} color="white" />
                </TouchableOpacity>

            </View>
        </View>

        {/* Cuerpo */}
        <View className='container mx-auto px-5 flex-1' style={{ top: top + 20 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={chats}
                keyExtractor={(chat) => chat.id}
                renderItem={({ item, index }) => (
                    <CardChat 
                        chat={item} 
                        onPress={() => 
                            navigation.navigate('ChatScreen', {
                                user: item.user,
                                id: item.id,
                                min: item.min,
                                image: item.image
                            })
                        }
                    />
                )}

                ItemSeparatorComponent={() => <ItemSeparator />}

                ListFooterComponent={() => <View className='h-[80] justify-center' /> }

            />
        </View>

    </View>
  )
}
