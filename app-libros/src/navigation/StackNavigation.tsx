import { createStackNavigator } from '@react-navigation/stack';

import { ChatScreen } from '../screens/ChatScreen';

import { ProfileScreen } from '../screens/ProfileScreen'

import { TabNavigation } from './TabNavigation';

export type RootStackParams = {
    TabNavigation: undefined;
    ChatScreen: undefined;
    ProfileScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TabNavigation"
    >
        <Stack.Screen 
            name='TabNavigation'
            component={TabNavigation}
            options={{ headerShown: false }}
        />

        {/* Screens secundarias - derivan de las principales del tab */}
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />

    </Stack.Navigator>
  );
};

