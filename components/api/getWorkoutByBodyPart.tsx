import { useState, useEffect } from "react";
import { Workout } from "../types/workout.interface";

export default async function getWorkoutByBodyPart(props: any) {
  let bodyPart = props;

  return await fetch("http://192.168.1.34:4000/getWorkoutsByBodyPart", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bodyPart: bodyPart,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
}
