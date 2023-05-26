import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigation';

// chat
import { GiftedChat } from 'react-native-gifted-chat';
import { useChat } from '../hooks/useChat';
// chat

interface Props extends StackScreenProps<RootStackParams, 'ChatScreen'> {};

export const ChatScreen = ({ route }: Props) => {

  const { top } = useSafeAreaInsets();

  const { 
    online,
    user,
    image,
    onlineColor, 
    messages, 
    onSend, 
    renderAvatar, 
    renderBubble, 
    renderInputToolbar, 
    renderSend, 
    renderTime,
    isLoading ,
    Loading
  } = useChat(route.params);


  return (
    
    <View className='flex-1 bg-bookBlack'>
      {/* Header */}
      <View className='border-b-2 border-black py-2 z-50 bg-bookBlack' style={{ top: top }}>
          <View className='container mx-auto px-4 flex-row items-center justify-between'>

            <View className='flex-row items-center justify-center'>
              <Image
                source={{ uri: image }}
                className='w-[42] h-[41]'
              />
              <Text className='font-medium text-base text-[#EBEBEB] mx-3'>{user}</Text>
            </View>

            <View className='bg-[#1E1E1E] rounded-full w-[43] h-[43] flex-col justify-center items-center'>
                <Text 
                  className={`text-[9px] text-center font-medium`}
                  style={{ color: onlineColor }}
                >
                  {online ? 'Online' : 'Offline'}
                </Text>
                <View 
                  className={`rounded-full w-[12] h-[12] mt-1`}  
                  style={{ backgroundColor: onlineColor }}
                />
            </View>
          </View>
      </View>

      {/* Chat */}
      <View style={{ flex: 1, top: top, marginBottom: top }}>

        {
          isLoading
          ? <Loading />
          : <GiftedChat 
              messages={messages} 
              onSend={onSend} 
              user={{ _id: '1' }} // ID del usuario actual
              
              alwaysShowSend // siempre se ve el boton enviar
              showAvatarForEveryMessage

              minInputToolbarHeight={75}
              placeholder='Escribí algo bonito..'
              
              // renders
              renderInputToolbar={renderInputToolbar}
              renderBubble={renderBubble}
              renderSend={renderSend}
              renderAvatar={renderAvatar}
              renderTime={renderTime}
            />
        }
        
      </View>
    </View>
  )
}

