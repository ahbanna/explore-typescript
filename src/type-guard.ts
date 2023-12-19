{
  // Type guard by using type of
  type AlphaNumric = string | number;
  const add = (param1: AlphaNumric, param2: AlphaNumric): AlphaNumric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(2, 3);
  const result2 = add("2", "3");
  console.log(result1); // 5
  console.log(result2); // 23

  // type guard using In operator (In guard)
  type normalUser = {
    name: string;
  };
  type adminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: normalUser | adminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and i am normal user`);
    }
  };

  const user1: normalUser = {
    name: "Hasib",
  };
  const user2: adminUser = {
    name: "Banna",
    role: "admin",
  };
  getUser(user1);

  //
}
