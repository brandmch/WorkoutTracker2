import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List, Snackbar, Divider } from "react-native-paper";
import SelectMuscleGroup from "../components/selectMuscleGroup";
import SelectMuscleGroupAndNumber from "../components/selectMuscleGroup+Number";
import Workout from "../interfaces/workout";

let i = 0;
let j = 0;
export default function CreateWorkoutRoutine({ navigation }: any) {
  const [numberOfWorkouts, setNumberOfWorkouts] = useState<number[]>([]);
  const [routine, setRoutine] = useState<string[]>([]);
  const [goDisabled, setGoDisabled] = useState<boolean>(true);

  const [numberOfBodyGroups, setNumberOfBodyGroups] = useState<number[]>([]);
  const [workoutObjectList, setWorkoutObjectList] = useState<Workout[]>([]);

  if (goDisabled && routine.length > 0) {
    setGoDisabled(false);
  }
  if (!goDisabled && routine.length === 0) {
    setGoDisabled(true);
  }

  return (
    <ScrollView>
      <Button
        onPress={() => {
          setNumberOfBodyGroups([
            ...numberOfBodyGroups,
            numberOfBodyGroups.push(j),
          ]);
          j++;
        }}
        onLongPress={() => {
          setNumberOfBodyGroups([]);
        }}
      >
        Add Body Group
      </Button>
      {numberOfBodyGroups.map((bodyGroup) => {
        return (
          <View key={bodyGroup}>
            <SelectMuscleGroupAndNumber
              locationInRoutine={bodyGroup - 1}
              setWorkoutObjectList={setWorkoutObjectList}
              workoutObjectList={workoutObjectList}
            />
          </View>
        );
      })}
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("DisplayRoutine", { routine: routine })
        }
      >
        GO!
      </Button>
    </ScrollView>
  );
}
