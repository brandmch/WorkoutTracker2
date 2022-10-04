import { useState } from "react";
import { View } from "react-native";
import { List, Divider } from "react-native-paper";

export default function SelectMuscleGroup(props: any) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<String>("Muscle groups");

  function onClick(bodyPart: String) {
    if (!props.routine[props.locationInRoutine]) {
      props.setRoutine([...props.routine, bodyPart]);
    } else {
      let tempArray = props.routine;
      tempArray[props.locationInRoutine] = bodyPart;
      props.setRoutine(tempArray);
    }
  }

  return (
    <View>
      <List.Accordion
        title={listTitle}
        style={{ width: 200 }}
        onPress={() => setIsExpanded(!isExpanded)}
        expanded={isExpanded}
      >
        <List.Item
          title="Back"
          onPress={() => {
            setListTitle("Back");
            onClick("back");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Cardio"
          onPress={() => {
            setListTitle("Cardio");
            onClick("cardio");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Chest"
          onPress={() => {
            setListTitle("Chest");
            onClick("chest");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Lower Arms"
          onPress={() => {
            setListTitle("Lower Arms");
            onClick("lower arms");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Lower Legs"
          onPress={() => {
            setListTitle("Lower Legs");
            onClick("lower legs");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Neck"
          onPress={() => {
            setListTitle("Neck");
            onClick("neck");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Shoulders"
          onPress={() => {
            setListTitle("Shoulders");
            onClick("shoulders");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Upper Arms"
          onPress={() => {
            setListTitle("Upper Arms");
            onClick("upper arms");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Upper Legs"
          onPress={() => {
            setListTitle("Upper Legs");
            onClick("upper legs");
            setIsExpanded(false);
          }}
        />
        <Divider />
        <List.Item
          title="Waist"
          onPress={() => {
            setListTitle("Waist");
            onClick("waist");
            setIsExpanded(false);
          }}
        />
      </List.Accordion>
      <Divider />
    </View>
  );
}
