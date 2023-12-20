var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // Access modifier: public, private, protected, readonly
    var User = /** @class */ (function () {
        // Constructor
        function User(name, age) {
            // Inside the constructor, we assign values to the properties
            this.userName = name;
            this.age = age;
        }
        // Method
        User.prototype.display = function () {
            console.log("I am ".concat(this.userName, " and i am ").concat(this.age, " years old."));
        };
        return User;
    }());
    // Inheritance
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, studentId) {
            var _this = _super.call(this, name, age) || this;
            _this.stdId = studentId;
            return _this;
        }
        Student.prototype.display = function () {
            console.log("I am ".concat(this.userName, " and i am ").concat(this.age, " years old. My id is ").concat(this.stdId));
        };
        return Student;
    }(User));
    var std1 = new Student("Banna", 20, 101);
    std1.display(); // I am Banna and i am 20 years old. My id is 101
    //
    var user1 = new User("Aaru", 23);
    user1.userName = "Shakila";
    user1.display();
}
