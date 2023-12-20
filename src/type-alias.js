{
    var std1 = {
        name: "Nahid",
        age: 25,
        gender: "male",
        phone: "01711111111",
        class: 8,
    };
    var std2 = {
        name: "Ruble",
        age: 20,
        gender: "male",
        class: 4,
    };
    var std3 = {
        name: "Jamal",
        age: 14,
        gender: "male",
        class: 6,
        role: "captain",
    };
    var allFriends = [];
    var friend1 = {
        userName: "Shakila",
        age: 20,
    };
    var friend2 = {
        userName: "Hasna",
        age: 22,
    };
    allFriends.push(friend1, friend2);
    console.log(allFriends); // [ { userName: 'Shakila', age: 20 }, { userName: 'Hasna', age: 22 } ]
    for (var _i = 0, allFriends_1 = allFriends; _i < allFriends_1.length; _i++) {
        var friend = allFriends_1[_i];
        console.log(friend.userName); // Shakila, Hasna
    }
    var myGender = "Male";
    console.log("My name is Tutul and i am ".concat(myGender)); // My name is Tutul and i am Male
    // Type alias use in function
    // Example: 4
    function addNumbers(num1, num2) {
        console.log(num1 + num2);
    }
    addNumbers(10, 20); // 30
    var add = function (num1, num2) { return num1 + num2; };
    console.log(add(2, 3)); // 5
    //
}
