import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import {
  List,
  Divider,
  Menu,
  TextInput,
  Button,
  IconButton,
  Text,
} from "react-native-paper";
import Workout from "../interfaces/workout";

const SelectMuscleGroupAndNumber = (props: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<String>("Muscle groups");
  const [localWorkoutObject, setLocalWorkoutObject] = useState<Workout>({
    bodyGroup: "",
    number: 0,
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  let { workoutObjectList, setWorkoutObjectList, locationInRoutine } = props;

  useEffect(() => {
    setWorkoutObjectList([...workoutObjectList, localWorkoutObject]);
  }, []);

  useEffect(() => {
    let tempArray = workoutObjectList;
    tempArray[locationInRoutine] = localWorkoutObject;
    setWorkoutObjectList(tempArray);
  }, [localWorkoutObject]);

  if (localWorkoutObject.bodyGroup !== "" && buttonDisabled) {
    setButtonDisabled(false);
  }

  const onClick = (bodyPart: string) => {
    setLocalWorkoutObject({
      bodyGroup: bodyPart,
      number: localWorkoutObject.number,
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: "row", marginVertical: 5 }}>
      <View style={{ flex: 3 }}>
        <List.Accordion
          title={listTitle}
          style={{ flex: 1 }}
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
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="arrow-down-drop-circle"
          onPress={() => {
            if (localWorkoutObject.number) {
              setLocalWorkoutObject({
                bodyGroup: localWorkoutObject.bodyGroup,
                number: localWorkoutObject.number - 1,
              });
            }
          }}
          disabled={buttonDisabled}
        />
        <Text variant="headlineMedium">{localWorkoutObject.number}</Text>
        <IconButton
          icon="arrow-up-drop-circle"
          onPress={() => {
            setLocalWorkoutObject({
              bodyGroup: localWorkoutObject.bodyGroup,
              number: localWorkoutObject.number + 1,
            });
          }}
          disabled={buttonDisabled}
        />
      </View>
    </View>
  );
};

export default SelectMuscleGroupAndNumber;
