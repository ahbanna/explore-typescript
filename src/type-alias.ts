{
  // Type alias use in object
  // Example: 1
  type Student = {
    name: string;
    age: number;
    gender: string;
    phone?: string;
    class: number;
  };
  const std1: Student = {
    name: "Nahid",
    age: 25,
    gender: "male",
    phone: "01711111111",
    class: 8,
  };
  const std2: Student = {
    name: "Ruble",
    age: 20,
    gender: "male",
    class: 4,
  };

  // extend type alias
  type StudentWIthRole = Student & { role: string };
  const std3: StudentWIthRole = {
    name: "Jamal",
    age: 14,
    gender: "male",
    class: 6,
    role: "captain",
  };

  // Example: 2
  type Friend = {
    userName: string;
    age: number;
  };

  let allFriends: Friend[] = [];
  let friend1: Friend = {
    userName: "Shakila",
    age: 20,
  };
  let friend2: Friend = {
    userName: "Hasna",
    age: 22,
  };
  allFriends.push(friend1, friend2);
  console.log(allFriends); // [ { userName: 'Shakila', age: 20 }, { userName: 'Hasna', age: 22 } ]

  for (const friend of allFriends) {
    console.log(friend.userName); // Shakila, Hasna
  }

  // Type alias with values
  // Example: 3
  type Gender = "Male" | "Femal";
  let myGender: Gender = "Male";
  console.log(`My name is Tutul and i am ${myGender}`); // My name is Tutul and i am Male

  // Type alias use in function
  // Example: 4
  function addNumbers(num1: number, num2: number) {
    console.log(num1 + num2);
  }
  addNumbers(10, 20); // 30
  //Example: 5
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  console.log(add(2, 3)); // 5

  //
}
