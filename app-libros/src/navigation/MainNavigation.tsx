import { StackView, createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { GenresBooks } from '../components/GenresBooks/GenresBooks';
import { ProfileScreen } from '../screens/ProfileScreen'
import { ChatMainScreen } from '../screens/ChatMainScreen';
import { Chat } from '../interfaces/chat.interfaces';
  

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  ChatScreen: Chat;
  GenresBooks: undefined;
  ProfileScreen: undefined;
  ChatMainScreen: undefined;
};
  
const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ChatMainScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GenresBooks" component={GenresBooks} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='ChatMainScreen' component={ChatMainScreen} />
    </Stack.Navigator>
  );
};

