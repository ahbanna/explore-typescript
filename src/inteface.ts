{
  // INTERFACE
  interface User {
    name: string;
    age: number;
  }
  const user: User = {
    name: "Banna",
    age: 10,
  };

  // extend interface
  interface userWithRole extends User {
    role: string;
  }
  const user2: userWithRole = {
    name: "tutul",
    age: 20,
    role: "manager",
  };

  // How to declare array without type allias
  
  //
}
