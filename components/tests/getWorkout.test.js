import getWorkout from "../api/getWorkout";

test("getWorkout should return a workout from the api", () => {
  expect(getWorkout()).tobe();
});
