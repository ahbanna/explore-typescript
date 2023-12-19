"use strict";
// Spread operator
// Example: 1 (Arraw)
const food = ["Rice", "Popato"];
const drinks = ["Water", "Pepsi"];
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
const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
// Rest operator
const greetFriend = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriend("kamal", "jamal", "babul");
// Destructring
