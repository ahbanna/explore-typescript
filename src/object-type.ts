{
  // Object type
  // Example: 1
  const user: {
    company: "Programming Hero";
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Hasanul",
    lastName: "Banna",
    isMarried: true,
  };

  // Example: 2
  let user1: object;
  // user1 = 100; // Error: Type 'number' is not assignable to type 'object'
  user1 = {
    userName: "Banna",
    age: "50", // no error because we only ensure user1 is an object
  };

  // Example: 3
  let users: object[] = [
    {
      userName: "Banna",
      age: 10,
    },
  ];
  // Example: 4
  let allFriends: object[];
  allFriends = []; // initialize it
  let friend1: { userName: string; age: number } = {
    userName: "Banna",
    age: 20,
  };
  let friend2: { userName: string; age: number } = {
    userName: "Hasan",
    age: 22,
  };
  allFriends.push(friend1, friend2);
  console.log(allFriends); // [ { userName: 'Banna', age: 20 }, { userName: 'Hasan', age: 22 } ]
  for (const friend in allFriends) {
    console.log(friend); // 0 1
    console.log(allFriends); //   [ { userName: 'Banna', age: 20 }, { userName: 'Hasan', age: 22 } ]
    // console.log(allFriends[key]["age"]);  // প্রতিটা key এর age দেখাবে
  }
}

// Example: 4 (another way using custom type)
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
