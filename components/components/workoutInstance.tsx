import { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Text, List } from "react-native-paper";
import getWorkoutByBodyPart from "../api/getWorkoutByBodyPart";
import { Workout } from "../types/workout.interface";

export default function WorkoutInstance(props: any) {
  const { workout } = props;

  const workoutName = () => {
    const mySentence = workout?.name;
    const words = workout?.name.split(" ");

    if (words) {
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      return words.join(" ");
    } else {
      return mySentence;
    }
  };

  return (
    <View style={{ flex: 1, width: "100%", marginBottom: 10 }}>
      <List.Accordion
        title={workoutName()}
        titleStyle={{ fontSize: 20 }}
        style={{
          marginHorizontal: "2%",
        }}
      >
        <View
          style={{
            marginHorizontal: "2%",
            flex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: `${workout?.gifUrl}` }}
            style={{ width: 150, height: 150 }}
          />
          <View>
            <Text>{workout?.bodyPart}</Text>
            <Text>{workout?.target}</Text>
            <Text>{workout?.equipment}</Text>
          </View>
        </View>
      </List.Accordion>
    </View>
  );
}
