{
  // Function with generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result1 = createArrayWithGeneric<boolean>(true);
  const result2 = createArrayWithGeneric<string>("Banna");
  const resultObj = createArrayWithGeneric<{ id: number; name: string }>({
    id: 121,
    name: "Banna",
  });

  // Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res1 = createArrayWithTuple<string, number>("Banna", 12);
  const res2 = createArrayWithTuple<string, { age: number }>("Banna", {
    age: 20,
  });

  //
  const addStudent = <T>(student: T) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
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
