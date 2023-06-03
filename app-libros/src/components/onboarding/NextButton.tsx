import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    onPress: () => void;
    title: string;
}

export const NextButton = ({ onPress, title } : Props) => {
    return (
            <TouchableOpacity 
                className='bg-bookYellow items-center justify-center px-6 py-4 rounded-xl'
                activeOpacity={0.8}
                onPress={onPress}
            >
                <Text className='text-bookBlack uppercase font-bold'>{ title }</Text>
            </TouchableOpacity>
    )
}
