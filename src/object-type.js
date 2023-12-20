{
    // Object type
    // Example: 1
    var user = {
        company: "Programming Hero",
        firstName: "Hasanul",
        lastName: "Banna",
        isMarried: true,
    };
    // Example: 2
    var user1 = void 0;
    // user1 = 100; // Error: Type 'number' is not assignable to type 'object'
    user1 = {
        userName: "Banna",
        age: "50", // no error because we only ensure user1 is an object
    };
    // Example: 3
    var users = [
        {
            userName: "Banna",
            age: 10,
        },
    ];
    // Example: 4
    var allFriends_2;
    allFriends_2 = []; // initialize it
    var friend1_1 = {
        userName: "Banna",
        age: 20,
    };
    var friend2_1 = {
        userName: "Hasan",
        age: 22,
    };
    allFriends_2.push(friend1_1, friend2_1);
    console.log(allFriends_2); // [ { userName: 'Banna', age: 20 }, { userName: 'Hasan', age: 22 } ]
    for (var friend in allFriends_2) {
        console.log(friend); // 0 1
        console.log(allFriends_2); //   [ { userName: 'Banna', age: 20 }, { userName: 'Hasan', age: 22 } ]
        // console.log(allFriends[key]["age"]);  // প্রতিটা key এর age দেখাবে
    }
}
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
