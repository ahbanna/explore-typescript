// Spread operator
// Example: 1 (Arraw)
const food: string[] = ["Rice", "Popato"];
const drinks: string[] = ["Water", "Pepsi"];
food.push(...drinks);
console.log(food);
// Example: 2
const mentor1 = {
  html: "Kamal",
  css: "Jamal",
};
const mentor2 = {
  js: "Hasan",
  ts: "Jasim",
};
const mentorList = {
  ...mentor1,
  ...mentor2,
};

// Rest operator
const greetFriend = (...friends: string[]) => {
  friends.forEach((friend: String) => console.log(`Hi ${friend}`));
};
greetFriend("kamal", "jamal", "babul");

// Destructring
