import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { SearchInput } from '../components/SearchInput';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSearch } from '../hooks/useSearch';
import { GENRES } from '../constants/genres';
import { Genre } from '../interfaces/constants.interfaces';
import { HeaderFlatList } from '../components/HeaderFlatList';
import { CardGenre } from '../components/CardGenre';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    const { dataFiltered, setTerm } = useSearch<Genre>(GENRES, 'name'); // le pasas la interface, la data y la propiedad por la cual queres buscar

  return (
    <View className='flex-1 bg-bookBlack'>
      
        {/* Header */}
        <View 
            className='h-[65px] items-center justify-center border-b border-bookDarkGrey' 
            style={{ top: top }}
        >
            <SearchInput 
                onDebounce={(value) => setTerm(value)}
                placeholder='Buscá un libro....'
                icon='sliders'
            />
        </View>

        {/* Cuerpo */}
        <View className='container mx-auto px-5 flex-1' style={{ top: top + 20 }}>
            <HeaderFlatList title='Etiquetas'/>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataFiltered}
                    keyExtractor={(gnre) => gnre.id}
                    renderItem={({ item }) => (
                        <CardGenre 
                            genre={item} 
                            onPress={() => Alert.alert("Presionaste el genero " + item.name)}
                        />
                    )}
                    ListFooterComponent={<View className='h-[80] justify-center' />}
            />
        </View>

    </View>
  )
}
