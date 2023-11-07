{
  // Type alias use in object
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
  
  // Type alias use in function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
