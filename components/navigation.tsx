import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import DisplayWorkout from "./screens/displayWorkout";
import CreateWorkoutRoutine from "./screens/createWorkoutRoutine";
import DisplayRoutine from "./screens/displayRoutine";

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateWorkoutRoutine">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
        <Stack.Screen
          name="DisplayRoutine"
          component={DisplayRoutine}
          options={{}}
        />
        <Stack.Screen
          name="CreateWorkoutRoutine"
          component={CreateWorkoutRoutine}
          options={{}}
        />
        <Stack.Screen
          name="DisplayWorkout"
          component={DisplayWorkout}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
