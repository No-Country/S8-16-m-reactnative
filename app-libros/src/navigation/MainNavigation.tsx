import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { InnerStack } from './stacks/LoginStack';
import { StackNavigation } from './StackNavigation';
import { OnboardingStack } from './stacks/OnboardingStack';

export type RootStackParams = {
  InnerStack: undefined;
  StackNavigation: undefined;
  OnboardingStack: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnboardingStack"
      >
        <Stack.Screen name='OnboardingStack' component={OnboardingStack} />
        <Stack.Screen name='InnerStack' component={InnerStack} />
        <Stack.Screen name='StackNavigation' component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

