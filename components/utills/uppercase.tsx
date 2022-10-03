const capitalize = (words: any) => {
  if (words) {
    let capitalName = words.split(" ");

    if (capitalName) {
      for (let i = 0; i < capitalName.length; i++) {
        capitalName[i] =
          capitalName[i][0].toUpperCase() + capitalName[i].substr(1);
      }
      return capitalName.join(" ");
    } else {
      return capitalName;
    }
  } else {
    return "";
  }
};

export default capitalize;
