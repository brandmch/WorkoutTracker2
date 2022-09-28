import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Nav from "./components/navigation";

const theme = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Nav />
    </PaperProvider>
  );
}
