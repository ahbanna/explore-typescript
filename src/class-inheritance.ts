{
  // Class
  class User {
    // Properties: Characteristics of an User
    userName: string;
    age: number;

    // Constructor: Initializes an User object when created
    constructor(name: string, age: number) {
      // Inside the constructor, we assign values to the properties
      this.userName = name;
      this.age = age;
    }

    // Method: Actions an User can do
    display(): void {
      console.log(`I am ${this.userName} and i am ${this.age} years old`);
    }
    display2(location: string): void {
      console.log(`I am ${this.userName} and i am ${this.age} years old`);
      console.log(`${this.userName} is from ${location}.`);
    }
  }

  // Create an instance (object) of the User class
  const user1 = new User("Tutul", 20);    // here user1 is object.

  // Access properties and call a method of the object
  console.log(user1.userName); // Output: Tutul
  console.log(user1.age); // Output: 20
  user1.display(); // Output: I am Tutul and i am 20 years old
  user1.display2("Bogura");

  // Inheritance
  class Student extends User {
    stdId: number;
    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.stdId = studentId;
    }
    display(): void {
      console.log(
        `I am ${this.userName} and i am ${this.age} years old. My id is ${this.stdId}`
      );
    }
  }
  let std1 = new Student("Banna", 20, 101);
  std1.display(); // I am Banna and i am 20 years old. My id is 101
}
