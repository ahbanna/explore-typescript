// Data type: number, string, boolean, void, null, undefined,

// String
let firstName: string = "Banna";

// Number
let roll: number = 5;

// Boolean
let isAdmin: boolean = true;

// void
function message(): void {
  console.log("I have a message");
}
message(); // I have a message

// Undefined
let x: undefined = undefined;

// Null
let y: null = null;

// Array
let friends: string[] = ["Arif", "Kamal", "Jamal"]; // method 1
let bestFriends: Array<String> = ["Rony", "Kabir"]; // method 2
console.log(friends[0]); // Arif
// firends = [10]     // error
// bestFriends= [10]     // error
let zipCode: number[] = [12, 54];
let multipleType: (string | number | boolean)[]; //multi-types array. any type data can be stored in array
console.log((multipleType = ["Banna", "Kamal", 52, "Jamal", true]));

// Tuple
let nameAge: [string, number] = ["Banna", 25];
let ageName: [number, string] = [25, "Banna"];
console.log(ageName.push(30, "Kamal")); // [25, "Banna", 30, "Kamal"]

// Enum
//Example: 1 (Numeric type)
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Left); // 2
console.log(Direction["Left"]); // 2

enum DirectionWithSetValue {
  Up = 5,
  Down,
  Left,
  Right,
}
console.log(DirectionWithSetValue.Left); // 7

// Example: 2 (string type)
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction2.Right); // RIGHT
console.log(Direction2["Right"]); // RIGHT

// Example: Hetergenous enum
enum Direction3 {
  Up = "UP",
  Count = 10,
}
console.log(Direction3.Count); // 10

// Any
let variable: any;
variable = 10; // Works fine, assigning a number
variable = "Hello"; // Also works, assigning a string
variable = true; // Works, assigning a boolean