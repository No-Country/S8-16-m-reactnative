import { StackView, createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import GenresBooks from '../components/GenresBooks/GenresBooks';

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  GenresBooks: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false
        }
      }
      initialRouteName="GenresBooks"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GenresBooks" component={GenresBooks} />
    </Stack.Navigator>
  );
};
