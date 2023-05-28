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
  
export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  InnerStack: undefined;
  ChatScreen: undefined;
  GenresBooks: undefined;
  ProfileScreen: undefined
};

export type InnerStackParams = {
  Register1: undefined;
  Register2: {datos: datosForm};
  Register3: undefined;
};

type datosForm = {
  nameLastname: string,
  user: string,
  password: string
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
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InnerStack" component={InnerStack} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GenresBooks" component={GenresBooks} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

