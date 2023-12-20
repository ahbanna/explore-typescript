// {
//   // How to use type guard in OOP
//   // Instance of guard
//   class Animal {
//     name: string;
//     species: string;

//     constructor(name: string, species: string) {
//       (this.name = name), (this.species = species);
//     }

//     makeSound() {
//       console.log("I am making sound");
//     }
//   }
//   class Dog extends Animal {
//     constructor(name: string, species: string) {
//       super(name, species);
//     }
//     makeBark() {
//       console.log("I am Barking");
//     }
//   }
//   class Cat extends Animal {
//     constructor(name: string, species: string) {
//       super(name, species);
//     }
//     makeMeow() {
//       console.log("I am cat");
//     }
//   }

//   const isDog = (animal: Animal): animal is Dog => {
//     return animal instanceof Dog;
//   };
//   const isCat = (animal: Animal): animal is Cat => {
//     return animal instanceof Cat;
//   };

//   const getAnimal = (animal: Animal) => {
//     if (isDog(animal)) {
//       animal.makeBark();
//     } else if (isCat(animal)) {
//       animal.makeMeow;
//     } else {
//       animal.makeSound;
//     }
//   };

//   const dog = new Dog("Dog", "Kutta");
//   const cat = new Cat("Cat", "Billi");

//   getAnimal(dog);

//   //
// }

// Define a class named Animal
class Animal {
  // Properties: Characteristics of an animal
  name: string;
  age: number;

  // Constructor: Initializes an Animal object when created
  constructor(name: string, age: number) {
    // Inside the constructor, we assign values to the properties
    this.name = name;
    this.age = age;
  }

  // Method: Actions an animal can do
  makeSound(sound: string): void {
    console.log(`I am ${this.name} and i am ${this.age} years old`);
    console.log(`${this.name} makes a ${sound} sound.`);
  }
  makeSound2(): void {
    console.log(`I am ${this.name} and i am ${this.age} years old`);
  }
}

// Create an instance (object) of the Animal class
const dog = new Animal("Buddy", 2);

// Access properties and call a method of the object
console.log(dog.name); // Output: Buddy
console.log(dog.age); // Output: 2
dog.makeSound("bark"); // Output: Buddy makes a bark sound.
dog.makeSound2();
