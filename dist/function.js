"use strict";
// Normal function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// Arrow function
const addArroew = (num1, num2) => num1 + num2;
// Object - Function - Method
const info = {
    name: "Banna",
    balance: 100,
    addBalance(balance) {
        return this.balance + balance;
    }
};
