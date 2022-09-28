import { useState, useEffect } from "react";
import { View, Image, Platform, ScrollView } from "react-native";
import { Text, Button, List } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import newWorkout from "../api/getWorkout";
import { Workout } from "../types/workout.interface";

export default function HomeScreen({ navigation }: any) {
  const [workout, setWorkout] = useState<Workout>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    newWorkout().then((res: Workout) => setWorkout(res));
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <Button
        onPress={() => navigation.navigate("DisplayWorkout")}
        mode="contained"
      >
        Workout
      </Button>

      <List.Accordion
        title="Muscle groups"
        style={{ width: 200 }}
        onPress={() => setIsExpanded(!isExpanded)}
        expanded={isExpanded}
      >
        <List.Item
          title="Back"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "back" })
          }
        />
        <List.Item
          title="Cardio"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "cardio" })
          }
        />
        <List.Item
          title="Chest"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "chest" })
          }
        />
        <List.Item
          title="Lower Arms"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "lower arms" })
          }
        />
        <List.Item
          title="Lower Legs"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "lower legs" })
          }
        />
        <List.Item
          title="Neck"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "neck" })
          }
        />
        <List.Item
          title="Shoulders"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "shoulders" })
          }
        />
        <List.Item
          title="Upper Arms"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "upper arms" })
          }
        />
        <List.Item
          title="Upper Legs"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "upper legs" })
          }
        />
        <List.Item
          title="Waist"
          onPress={() =>
            navigation.navigate("DisplayWorkout", { part: "waist" })
          }
        />
      </List.Accordion>

      <Text>{workout?.bodyPart}</Text>
      <Text>{workout?.equipment}</Text>
      <Text>{workout?.gifUrl}</Text>
      <Text>{workout?.id}</Text>
      <Text>{workout?.name}</Text>
      <Text>{workout?.target}</Text>
      {Platform.OS === "android" && (
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: `${workout?.gifUrl}` }}
        />
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}
