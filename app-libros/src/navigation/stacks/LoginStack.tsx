import { createStackNavigator } from '@react-navigation/stack';
import { Register1 } from '../../components/Register/Register1';
import { Register2 } from '../../components/Register/Register2';
import { Register3 } from '../../components/Register/Register3';
import { LoginScreen } from '../../screens/LoginScreen';
import { AskBookScreen } from '../../screens/AskBookScreen';
import { GenresBooks } from '../../components/GenresBooks/GenresBooks';

export type DatosForm = {
  nameLastname: string;
  user: string;
  password: string;
  email: 'valor';
  city: 'valor';
};

// export type InnerStackParams = {
//     Register2: {datos: DatosForm};
//     Register3: {datos: DatosForm};
//     LoginScreen: undefined;
//   };

// const InnerStackNavigator = createStackNavigator<InnerStackParams>();
const InnerStackNavigator = createStackNavigator();

// Configuración del StackNavigator interno
export const InnerStack = () => {
  return (
    <InnerStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen"
    >
      <InnerStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
      <InnerStackNavigator.Screen name="Register1" component={Register1} />
      <InnerStackNavigator.Screen name="Register2" component={Register2} />
      <InnerStackNavigator.Screen name="GenresBooks" component={GenresBooks} />
      <InnerStackNavigator.Screen name="Register3" component={Register3} />
    </InnerStackNavigator.Navigator>
  );
};
