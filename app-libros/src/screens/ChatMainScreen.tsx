import React from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';
import { CardChat } from '../components/Chats/CardChat';
import { ItemSeparator } from '../components/ItemSeparator';
import { SearchInput } from '../components/SearchInput';
import { CHATS } from '../constants/chats';
import { Chat } from '../interfaces/constants.interfaces';
import { useSearch } from '../hooks/useSearch';
import { HeaderFlatList } from '../components/HeaderFlatList';

export const ChatMainScreen = () => {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const { dataFiltered, setTerm } = useSearch<Chat>(CHATS, 'user'); // le pasas la interface, la data y la propiedad por la cual queres buscar

  return (
    <View className="flex-1 bg-bookBlack">
      {/* Header */}
      <View
        className="h-[65px] items-center justify-center border-b border-bookDarkGrey"
        style={{ top: top }}
      >
        <SearchInput
          onDebounce={(value) => setTerm(value)}
          placeholder="Buscá un chat..."
          icon="pencil"
        />
      </View>

      {/* Cuerpo */}
      <View className="container mx-auto px-5 flex-1" style={{ top: top + 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataFiltered}
          keyExtractor={(chat) => chat.id}
          renderItem={({ item }) => (
            <CardChat
              chat={item}
              onPress={() =>
                navigation.navigate('ChatScreen', {
                  user: item.user,
                  id: item.id,
                  min: item.min,
                  image: item.image,
                  online: item.online,
                })
              }
            />
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListHeaderComponent={<HeaderFlatList title="Chats" />}
          ListFooterComponent={<View className="h-[80] justify-center" />}
        />
      </View>
    </View>
  );
};
