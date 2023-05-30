import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./src/navigation/MainNavigation";
import { TabNavigation } from "./src/navigation/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
        {/* <TabNavigation /> */}
      </NavigationContainer>
    </Provider>
  );
}
