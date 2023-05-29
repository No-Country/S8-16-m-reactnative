import React, { useLayoutEffect, useState } from 'react';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { ActivityIndicator, Image, View } from 'react-native';
import { AvatarProps, Bubble, BubbleProps, IMessage, InputToolbar, InputToolbarProps, Send, SendProps, Time, TimeProps } from 'react-native-gifted-chat';
import { db as database } from "../utils/firebaseConfig";
import { Chat } from '../interfaces/chat.interfaces';
import { Octicons } from '@expo/vector-icons';


export const useChat = ({ online, user, image }: Chat) => {

  const onlineColor = online ? '#82DB91' : '#d3230e';

//   console.log(onlineColor);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => { //useLayoutEffect es un hook que se ejecuta antes de que se renderice el componente
    const collectionRef = collection(database, "messages");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => { //onSnapshot es un listener que se ejecuta cada vez que hay un cambio en la colección
      const newMessages = snapshot.docs.map((doc) => ({ // Mapea los documentos de la colección a un array de mensajes, ademas snapshot.docs es un array de documentos
        _id: doc.id,
        text: doc.data().text,
        createdAt: parseDateString(doc.data().createdAt),
        user: {
          _id: doc.data().user._id,
          name: doc.data().user.name,
        },
      })) as IMessage[];
      setMessages(newMessages);
      setIsLoading(false); // loading
    });

    return () => {
      unsubscribe(); // Limpia la suscripción cuando se desmonta el componente
    };
  }, []);

  function parseDateString(dateObj: any) {
    if (!dateObj || typeof dateObj !== 'object') {
      return null; // O un valor predeterminado, dependiendo de tus necesidades
    }
  
    const { seconds, nanoseconds } = dateObj;
  
    // Multiplica los nanosegundos por 0.001 para convertirlo a milisegundos
    const milliseconds = nanoseconds * 0.001;
  
    // Crea un objeto Date utilizando los segundos y milisegundos
    const date = new Date(seconds * 1000 + milliseconds);
  
    return date;
  }

  const onSend = async (newMessages: IMessage[]) => {
    const { text } = newMessages[0];
    const message = {
      text,
      createdAt: new Date(),
      user: {
        _id: '1', // ID del usuario actual
        name: 'Matias Mass', // Nombre del usuario actual
      },
    };
    await addDoc(collection(database, 'messages'), message); // Agrega el mensaje a la colección
  };

  const renderBubble = (props: BubbleProps<IMessage>) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#FF9A1F',
          },
          right: {
            backgroundColor: '#4C4C4C',
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props: InputToolbarProps<IMessage>) => {
    return (
        <InputToolbar 
          {...props} 
          containerStyle={{ 
            backgroundColor: '#252525',
            paddingHorizontal: 10,
            height: 75,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 0,
          }} 
          primaryStyle={{
            backgroundColor: '#1C1C1C',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
          }}
          
        />
    )
  };

  const renderSend = (props: SendProps<IMessage>) => {
    return (
      <Send {...props} containerStyle={{ borderWidth: 0, backgroundColor: '#252525',justifyContent: 'center', alignItems: 'center', paddingStart: 20 }}>
          <Octicons name='paper-airplane' size={24} color='white' />      
      </Send>
    );
  }

  const renderAvatar = (props: AvatarProps<IMessage>) => {
    return (
      <Image source={{ uri: image }} className='w-[35px] h-[35px]' />
    )
  }

  const renderTime = (props: TimeProps<IMessage>) => {
    return (
      <Time
      {...props}
        timeTextStyle={{
          left: {
            color: '#000',
          },
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const Loading = () => {
    return (
        <View className='flex-1 justify-center items-center'>
            <ActivityIndicator color={'#FF9A1F'} size={50} />
        </View>
    )
  }
    
    
  return {
    image,
    user,
    onlineColor,
    online,
    messages,
    onSend,
    renderBubble,
    renderInputToolbar,
    renderSend,
    renderAvatar,
    renderTime,
    isLoading,
    Loading
  }
}

