{
  // Constraints
  const addStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };
  const std1 = addStudent({
    id: 101,
    name: "Banna",
    email: "banna@gmail.com",
    status: "graduate",
  });
  const std2 = addStudent({
    id: 102,
    name: "Tutul",
    email: "tutul@gmail.com",
    position: "Front end developer",
  });
}
