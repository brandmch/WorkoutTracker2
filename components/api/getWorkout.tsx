const newWorkout = () => {
  fetch("http://192.168.1.34:4000/")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
