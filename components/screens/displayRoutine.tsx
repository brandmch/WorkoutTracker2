import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List, Snackbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import newWorkout from "../api/getWorkout";
import { Workout } from "../types/workout.interface";
import SelectMuscleGroup from "../components/selectMuscleGroup";
import WorkoutInstance from "../components/workoutInstance";
import getWorkoutByBodyPart from "../api/getWorkoutByBodyPart";

export default function DisplayRoutine({ navigation, route }: any) {
  const [arrayOfExcersieObjects, setArrayOfExcersieObjects] = useState<
    Workout[]
  >([]);
  const { routine } = route.params;

  let tempArray: Workout[] = [];

  useEffect(() => {
    routine.map((title: string) => {
      getWorkoutByBodyPart(title)
        .then((res) => tempArray.push(res))
        .then(() => {
          if (tempArray.length === routine.length) {
            setArrayOfExcersieObjects(tempArray);
          }
        })
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {arrayOfExcersieObjects.map((exceriseInstance) => {
        return (
          <WorkoutInstance
            workout={exceriseInstance}
            key={exceriseInstance.id}
          />
        );
      })}
    </View>
  );
}
