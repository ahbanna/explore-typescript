// Destructuring
// Object destructuring 
const userInfo = {
  id: 1,
  name: {
    firstName: "Hasanul",
    middleName: "Banna",
    lastName: "Tutul",
  },
  age: 30,
};
const {
  name: { lastName },
  age,
} = userInfo;

// Arrow destructuring 
const firends = ['Hasan', "jamal", 'Kamal', "Nahid", "Shuvo"];
const [, , bestFriend, ...rest] = friends;