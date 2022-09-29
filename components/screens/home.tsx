import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List, Snackbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import newWorkout from "../api/getWorkout";
import { Workout } from "../types/workout.interface";
import SelectMuscleGroup from "../components/selectMuscleGroup";
import WorkoutInstance from "../components/workoutInstance";

export default function HomeScreen({ navigation }: any) {
  const [bodyPart, setBodyPart] = useState<string>();
  const [numOfWorkouts, setNumOfSorkouts] = useState<number[]>([]);
  const [snackbarVisible, setSnackBarVisible] = useState<boolean>(false);
  let i = 0;

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <SelectMuscleGroup
        navigation={navigation}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Button
        style={{ marginVertical: "5%" }}
        onPress={() => {
          if (!bodyPart) {
            setSnackBarVisible(true);
          } else {
            setNumOfSorkouts([...numOfWorkouts, numOfWorkouts.push(i)]);
            i++;
          }
        }}
        onLongPress={() => {
          setNumOfSorkouts([]);
        }}
        mode="contained"
      >
        Add Workout
      </Button>
      {numOfWorkouts.map((x) => {
        return <WorkoutInstance key={x} bodyPart={bodyPart} />;
      })}
      <Button
        onPress={() => navigation.navigate("CreateWorkoutRoutine")}
        mode="contained"
      >
        HERE
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackBarVisible(false)}
        duration={2000}
      >
        Please select a muscle group!
      </Snackbar>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
