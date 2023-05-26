import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';
import { CardChat } from '../components/Chats/CardChat';
import { ItemSeparator } from '../components/ItemSeparator';
import { Chat } from '../interfaces/chat.interfaces';
import { SearchInputChat } from '../components/Chats/SearchInputChat';

const chats: Chat[] = [
    {
        user: 'Lomitojpg',
        min: '15',
        id: '123kjb251lpg3kb123',
        image: 'http://imgfz.com/i/Cq7t4H2.png',
        online: true
    },
    {
        user: 'Michilover',
        min: '20',
        id: '12mgh7b2512l3kb123',
        image: 'http://imgfz.com/i/sxB6cJ4.png',
        online: false
    },
    {
        user: 'Leo Messi',
        min: '45',
        id: '123kjb2512smnsb123',
        image: 'http://imgfz.com/i/WlCJ9ai.png',
        online: false
    },
    {
        user: 'Ana',
        min: '44',
        id: '123kjb2512l3kbmg8',
        image: 'http://imgfz.com/i/yjKHrWn.png',
        online: true
    },
    {
        user: 'Advincula',
        min: '50',
        id: '123kjb2510p3kb123',
        image: 'http://imgfz.com/i/ibvaeFu.png',
        online: false
    },
    {
        user: 'Maria del barrio',
        min: '55',
        id: '123kl92512l3kb123',
        image: 'http://imgfz.com/i/QJvV24R.png',
        online: true
    },
    {
        user: 'Carlos',
        min: '60',
        id: '456lksd7812l3kbmg8',
        image: 'http://imgfz.com/i/oi72ZgX.png',
        online: true
    },
    {
        user: 'Luisa',
        min: '42',
        id: '456lksd7890p3kb123',
        image: 'http://imgfz.com/i/GY96aLO.png',
        online: true
    },
    {
        user: 'Juan',
        min: '38',
        id: '456lk78912l3kb123',
        image: 'http://imgfz.com/i/QJvV24R.png',
        online: false
    }

]

export const ChatMainScreen = () => {

    const { top } = useSafeAreaInsets();

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    const [chatFiltered, setChatFiltered] = useState<Chat[]>([]);
    
    const [term, setTerm] = useState('');

    
    useEffect(() => {
        if (term.length === 0) {
          return setChatFiltered([...chats]);
        }
        
        setChatFiltered(
            chats.filter((chat) =>
                chat.user.toLowerCase().trim().includes(term.toLowerCase().trim())
            )
          );
      }, [term]);

  return (
    <View className='flex-1 bg-bookBlack'>
      
        {/* Header */}
        <View 
            className='h-[65px] items-center justify-center border-b border-bookDarkGrey' 
            style={{ top: top }}
        >
            <SearchInputChat onDebounce={(value) => setTerm(value)} />
        </View>

        {/* Cuerpo */}
        <View className='container mx-auto px-5 flex-1' style={{ top: top + 20 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={chatFiltered}
                keyExtractor={(chat) => chat.id}
                renderItem={({ item, index }) => (
                    <CardChat 
                        chat={item} 
                        onPress={() => 
                            navigation.navigate('ChatScreen', {
                                user: item.user,
                                id: item.id,
                                min: item.min,
                                image: item.image,
                                online: item.online
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
