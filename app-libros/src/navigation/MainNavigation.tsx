import { StackView, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { GenresBooks } from '../components/GenresBooks/GenresBooks';
import { ProfileScreen } from '../screens/ProfileScreen'
import { Register1 } from '../components/Register/Register1';
import { Register2 } from '../components/Register/Register2';
import { Register3 } from '../components/Register/Register3';
import { ChatMainScreen } from '../screens/ChatMainScreen';
import { PostBookScreen } from '../screens/PostBookScreen';
import { AskBookScreen } from '../screens/AskBookScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { Chat } from '../interfaces/constants.interfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  InnerStack: undefined;
  ChatScreen: Chat;
  GenresBooks: undefined;
  ProfileScreen: undefined;
  ChatMainScreen: undefined;
  PostBookScreen: undefined;
  AskBookScreen: undefined;
  SearchScreen: undefined;
};

export type InnerStackParams = {
  Register1: undefined;
  Register2: {datos: DatosForm};
  Register3: {datos: DatosForm};
};

export type DatosForm = {
  nameLastname: string,
  user: string,
  password: string,
  email: 'valor'
  city: 'valor'
}

const Stack = createStackNavigator<RootStackParams>();

const InnerStackNavigator = createStackNavigator<InnerStackParams>();

// Configuración del StackNavigator interno
const InnerStack = () => {
  return (
    <InnerStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Register1"
    >
      <InnerStackNavigator.Screen name="Register1" component={Register1} />
      <InnerStackNavigator.Screen name="Register2" component={Register2} />
      <InnerStackNavigator.Screen name="Register3" component={Register3} />
    </InnerStackNavigator.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InnerStack" component={InnerStack} />
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
