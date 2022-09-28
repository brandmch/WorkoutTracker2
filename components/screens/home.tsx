import { View } from "react-native";
import { Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Howdy!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
