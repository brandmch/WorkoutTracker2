import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import DisplayWorkout from "./screens/displayWorkout";

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
        <Stack.Screen
          name="DisplayWorkout"
          component={DisplayWorkout}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
