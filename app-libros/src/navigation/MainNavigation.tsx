import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { LoginScreen } from '../screens/LoginScreen'

export type RootStackParams = {
    HomeScreen: undefined
    LoginScreen: undefined
}
const Stack = createStackNavigator<RootStackParams>()

export const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            // headerShown: false
        }}
            initialRouteName='LoginScreen'
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} // Ocultar la barra de navegación en la pantalla Home
            />
        </Stack.Navigator>
    )
}