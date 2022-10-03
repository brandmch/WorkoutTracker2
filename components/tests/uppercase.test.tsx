import capitalize from "../utills/uppercase";

test("Capitalize the first letter of each word in a string", () => {
  let testString = "Capitalize the first letter of each word in a string";
  expect(capitalize(testString)).toBe(
    "Capitalize The First Letter Of Each Word In A String"
  );
});

test("Capitalize the first letter of each word in a string w/ a single word", () => {
  let testString = "hello";
  expect(capitalize(testString)).toBe("Hello");
});

test("Capitalize the first letter of each word in a string with two words", () => {
  let testString = "upper back";
  expect(capitalize(testString)).toBe("Upper Back");
});

test("Capitalize the first letter of each word in a string with no words", () => {
  let testString = "";
  expect(capitalize(testString)).toBe("");
});
