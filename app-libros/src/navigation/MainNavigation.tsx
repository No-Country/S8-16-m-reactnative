import { StackView, createStackNavigator } from '@react-navigation/stack';
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
  Register1: undefined;
  Register2: undefined;
  Register3: undefined;
  ChatScreen: undefined;
  GenresBooks: undefined;
  ProfileScreen: undefined
};
  
const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Navigator>
        <Stack.Screen name='Register1' component={Register1}/>
        <Stack.Screen name='Register2' component={Register2}/>
        <Stack.Screen name='Register3' component={Register3}/>
      </Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GenresBooks" component={GenresBooks} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

