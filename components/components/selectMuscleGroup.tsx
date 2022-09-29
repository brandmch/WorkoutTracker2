import { useState } from "react";
import { List } from "react-native-paper";

export default function SelectMuscleGroup({ navigation }: any) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<String>("Muscle groups");
  return (
    <List.Accordion
      title={listTitle}
      style={{ width: 200 }}
      onPress={() => setIsExpanded(!isExpanded)}
      expanded={isExpanded}
    >
      <List.Item
        title="Back"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "back" });
          setListTitle("Back");
        }}
      />
      <List.Item
        title="Cardio"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "cardio" });
          setListTitle("Cardio");
        }}
      />
      <List.Item
        title="Chest"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "chest" });
          setListTitle("Chest");
        }}
      />
      <List.Item
        title="Lower Arms"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "lower arms" });
          setListTitle("Lower Arms");
        }}
      />
      <List.Item
        title="Lower Legs"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "lower legs" });
          setListTitle("Lower Legs");
        }}
      />
      <List.Item
        title="Neck"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "neck" });
          setListTitle("Neck");
        }}
      />
      <List.Item
        title="Shoulders"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "shoulders" });
          setListTitle("Shoulders");
        }}
      />
      <List.Item
        title="Upper Arms"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "upper arms" });
          setListTitle("Upper Arms");
        }}
      />
      <List.Item
        title="Upper Legs"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "upper legs" });
          setListTitle("Upper Legs");
        }}
      />
      <List.Item
        title="Waist"
        onPress={() => {
          navigation.navigate("DisplayWorkout", { part: "waist" });
          setListTitle("Waist");
        }}
      />
    </List.Accordion>
  );
}
