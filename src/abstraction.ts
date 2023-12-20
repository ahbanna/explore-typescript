{
  // Abstract class
  abstract class User {
    userName: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
      // Inside the constructor, we assign values to the properties
      this.userName = name;
      this.age = age;
    }
    // Method
    abstract display(): void;
  }

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
