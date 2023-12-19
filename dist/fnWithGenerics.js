"use strict";
{
    // Function with generic
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArrayWithGeneric(true);
    const result2 = createArrayWithGeneric("Banna");
    const resultObj = createArrayWithGeneric({
        id: 121,
        name: "Banna",
    });
    // Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createArrayWithTuple("Banna", 12);
    const res2 = createArrayWithTuple("Banna", {
        age: 20,
    });
    //
    const addStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const std1 = addStudent({
        name: "Banna",
        email: "banna@gmail.com",
        status: "graduate",
    });
    const std2 = addStudent({
        name: "Tutul",
        email: "tutul@gmail.com",
        position: "Front end developer",
    });
}
