// Normal function
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(5, 10);

// Arrow function
const addArroew = (num1: number, num2: number) => num1 + num2;

// Object - Function - Method
const info = {
  name: "Banna",
  balance: 100,
  addBalance(balance: number) {
    return this.balance + balance;
  }
}