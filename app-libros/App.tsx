import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation/MainNavigation';
import { TabNavigation } from './src/navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
}
