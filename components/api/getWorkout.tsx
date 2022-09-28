import { useState } from "react";

export default async function getWorkout() {
  return fetch("http://192.168.1.34:4000/")
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
}
