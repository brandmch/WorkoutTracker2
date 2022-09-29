import { useState } from "react";
import { List } from "react-native-paper";

export default function SelectMuscleGroup(props: any) {
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
          setListTitle("Back");
          props.setBodyPart("back");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Cardio"
        onPress={() => {
          setListTitle("Cardio");
          props.setBodyPart("cardio");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Chest"
        onPress={() => {
          setListTitle("Chest");
          props.setBodyPart("chest");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Lower Arms"
        onPress={() => {
          setListTitle("Lower Arms");
          props.setBodyPart("lower arms");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Lower Legs"
        onPress={() => {
          setListTitle("Lower Legs");
          props.setBodyPart("lower legs");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Neck"
        onPress={() => {
          setListTitle("Neck");
          props.setBodyPart("neck");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Shoulders"
        onPress={() => {
          setListTitle("Shoulders");
          props.setBodyPart("shoulders");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Upper Arms"
        onPress={() => {
          setListTitle("Upper Arms");
          props.setBodyPart("upper arms");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Upper Legs"
        onPress={() => {
          setListTitle("Upper Legs");
          props.setBodyPart("upper legs");
          setIsExpanded(false);
        }}
      />
      <List.Item
        title="Waist"
        onPress={() => {
          setListTitle("Waist");
          props.setBodyPart("waist");
          setIsExpanded(false);
        }}
      />
    </List.Accordion>
  );
}
