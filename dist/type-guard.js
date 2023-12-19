"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(2, 3);
    const result2 = add("2", "3");
    console.log(result1); // 5
    console.log(result2); // 23
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name} and i am normal user`);
        }
    };
    const user1 = {
        name: "Hasib",
    };
    const user2 = {
        name: "Banna",
        role: "admin",
    };
    getUser(user1);
    //
}
