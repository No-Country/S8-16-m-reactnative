import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { GenresBooks } from '../components/GenresBooks/GenresBooks';
import { ProfileScreen } from '../screens/ProfileScreen'
import { ChatMainScreen } from '../screens/ChatMainScreen';
import { PostBookScreen } from '../screens/PostBookScreen';
import { AskBookScreen } from '../screens/AskBookScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { Chat } from '../interfaces/constants.interfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  ChatScreen: Chat;
  GenresBooks: undefined;
  ProfileScreen: undefined;
  ChatMainScreen: undefined;
  PostBookScreen: undefined;
  AskBookScreen: undefined;
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GenresBooks" component={GenresBooks} />
      <Stack.Screen name="PostBookScreen" component={PostBookScreen} />
      <Stack.Screen name="AskBookScreen" component={AskBookScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='ChatMainScreen' component={ChatMainScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  );
};
