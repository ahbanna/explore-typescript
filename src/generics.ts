{
  // Generic type
  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [1, 2, 5]
  // const rollNumber: Array<number> = [1, 2, 5];
  const rollNumber: GenericArray<number> = [1, 2, 5];

  // const names: string[] = ["Kamal", 'Jamal', "Jasim"]
  // const names: Array<string> = ["Kamal", "Jamal", "Jasim"];
  const names: GenericArray<string> = ["Kamal", "Jamal", "Jasim"];

  // const isAdmin : boolean[]= [true, false]
  // const isAdmin: Array<boolean> = [true, false];
  const isAdmin: GenericArray<boolean> = [true, false];

  // array of object using generic
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Banna",
      age: 10,
    },
    {
      name: "Jamal",
      age: 15,
    },
  ];
  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const couple: GenericTuple<string, string> = ["Mr. Tepa", "Mrs. Tepi"];

  const userWithId: GenericTuple<number, { name: string; age: number }> = [
    101,
    { name: "Banna", age: 10 },
  ];
}
//
