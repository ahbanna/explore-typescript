{
  // Utility type
  type Person = {
    name: string;
    age: number;
    email?: string;
  };
  // Pick
  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;
  // Omit
  type Contact = Omit<Person, "name" | "age">;
  // Required
  type PersonRequire = Required<Person>;
  // Partial
  type PersonOptional = Partial<Person>;
  // Readonly
  const Person2: PersonReadOnly = {
    name: "Banna",
    age: 10,
  };
  type PersonReadOnly = Readonly<Person>;
  // Person2.name = "tutul";   // it show error because read only

  // Record
  // type Info = {
  //   name: string,
  //   location: string
  // }
  type Info = Record<string, unknown>;
  const std1: Info = {
    name: "Hasan",
    age: 20,
    isMarried: true,
    location: "Bogra",
    country: "Bangladesh",
  };
}
