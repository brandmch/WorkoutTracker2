import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List, Snackbar } from "react-native-paper";
import SelectMuscleGroup from "../components/selectMuscleGroup";

let i = 0;
export default function CreateWorkoutRoutine({ navigation }: any) {
  const [numberOfWorkouts, setNumberOfWorkouts] = useState<number[]>([]);
  const [routine, setRoutine] = useState<string[]>([]);
  const [goDisabled, setGoDisabled] = useState<boolean>(true);

  console.log("routine", routine);

  if (goDisabled && routine.length > 0) {
    setGoDisabled(false);
  }
  if (!goDisabled && routine.length === 0) {
    setGoDisabled(true);
  }

  return (
    <View>
      <Button
        onPress={() => {
          setNumberOfWorkouts([...numberOfWorkouts, numberOfWorkouts.push(i)]);
          i++;
        }}
        onLongPress={() => {
          setNumberOfWorkouts([]);
          setRoutine([]);
        }}
      >
        Add Excerise
      </Button>
      {numberOfWorkouts.map((exceriseInstance) => {
        return (
          <SelectMuscleGroup
            key={exceriseInstance}
            locationInRoutine={exceriseInstance - 1}
            setRoutine={setRoutine}
            routine={routine}
          />
        );
      })}
      <Button
        onPress={() =>
          navigation.navigate("DisplayRoutine", { routine: routine })
        }
        mode="contained"
        disabled={goDisabled}
      >
        GO!
      </Button>
    </View>
  );
}
