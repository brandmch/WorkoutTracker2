import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List, Snackbar } from "react-native-paper";
import SelectMuscleGroup from "../components/selectMuscleGroup";

let i = 0;
export default function CreateWorkoutRoutine({ navigation }: any) {
  const [numberOfWorkouts, setNumberOfWorkouts] = useState<number[]>([]);
  const [bodyPart, setBodyPart] = useState<string>();
  const [routine, setRoutine] = useState<string[]>([]);
  const [goDisabled, setGoDisabled] = useState<boolean>(true);

  useEffect(() => {
    {
      bodyPart && setRoutine([...routine, bodyPart]);
    }
  }, [bodyPart]);

  if (goDisabled && routine.length > 0) {
    setGoDisabled(false);
  }

  return (
    <View>
      <Button
        onPress={() => {
          setNumberOfWorkouts([...numberOfWorkouts, numberOfWorkouts.push(i)]);
          i++;
        }}
        onLongPress={() => setNumberOfWorkouts([])}
      >
        Add Excerise
      </Button>
      {numberOfWorkouts.map((exceriseInstance) => {
        return (
          <SelectMuscleGroup
            key={exceriseInstance}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
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
