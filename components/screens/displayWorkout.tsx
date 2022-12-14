import { View, ScrollView, Platform, Image } from "react-native";
import { Text } from "react-native-paper";
import { useState, useEffect } from "react";
import { Workout } from "../types/workout.interface";
import getWorkoutByBodyPart from "../api/getWorkoutByBodyPart";
import capitalize from "../utills/uppercase";

export default function DisplayWorkout({ navigation, route }: any) {
  const [workout, setWorkout] = useState<Workout>();
  useEffect(() => {
    getWorkoutByBodyPart(route.params.part)
      .then((res: Workout) => setWorkout(res))
      .catch((error) => console.log(error));
  }, []);

  const workoutName = () => capitalize(workout?.name);

  return (
    <ScrollView>
      <Text variant="headlineLarge">{workoutName()}</Text>
      <Text>{workout?.bodyPart}</Text>
      <Text>{workout?.equipment}</Text>
      <Text>{workout?.target}</Text>
      {Platform.OS === "android" && (
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: `${workout?.gifUrl}` }}
        />
      )}
    </ScrollView>
  );
}
