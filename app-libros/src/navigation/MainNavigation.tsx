import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { InnerStack } from './stacks/LoginStack';
import { StackNavigation } from './StackNavigation';

export type RootStackParams = {
  InnerStack: undefined;
  StackNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="InnerStack"
      >
        <Stack.Screen name="InnerStack" component={InnerStack} />
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
