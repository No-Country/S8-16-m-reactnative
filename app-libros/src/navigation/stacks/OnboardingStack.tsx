import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding1Screen } from '../../screens/onboarding/Onboarding1Screen';
import { Onboarding2Screen } from '../../screens/onboarding/Onboarding2Screen';
import { Onboarding3Screen } from '../../screens/onboarding/Onboarding3Screen';

export type RootStackParams = {
  Onboarding1Screen: undefined;
  Onboarding2Screen: undefined;
  Onboarding3Screen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding1Screen" component={Onboarding1Screen} />
      <Stack.Screen name="Onboarding2Screen" component={Onboarding2Screen} />
      <Stack.Screen name="Onboarding3Screen" component={Onboarding3Screen} />
    </Stack.Navigator>
  );
};
