import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { ChatScreen } from '../screens/ChatScreen'

export type RootStackParams = {
    HomeScreen: undefined
    LoginScreen: undefined
    ChatScreen: undefined
}
const Stack = createStackNavigator<RootStackParams>()

export const MainNavigation = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
            initialRouteName='LoginScreen'
            >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='ChatScreen' component={ChatScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
    )
}