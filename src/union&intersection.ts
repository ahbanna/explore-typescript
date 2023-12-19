{
  // ---------------   Union  ---------------------
  // Example: 1
  let userId: string | number;
  userId = "banna5800"; // valid
  userId = 5800; // valid
  // userId = true         // not valid

  // Example: 2
  function userInfo(userId: string | number) {
    console.log(userId);
  }
  userInfo("banna5800");  // valid
  userInfo(10);           // valid
  // userInfo(true);         // not valid


  // Example: 3
  type Student = {
    name: string;
    gender: "male" | "female";
  };
  const std1: Student = {
    name: "Hasan",
    gender: "male",
  };
  // Example: 4
  type Gender = "male" | "female";
  type MaritalStatus = "married" | "unmarried";
  type Status = Gender | MaritalStatus;

  // --------------------- Intersection --------------------
  type FrontendDeveloper = {
    skills: string[];
    frontendDesignation: "frontend developer";
  };
  type BackendDeveloper = {
    skills: string[];
    backendDesignation: "backend developer";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "js", "node"],
    frontendDesignation: "frontend developer",
    backendDesignation: "backend developer",
  };
  console.log({ fullstackDeveloper });
}
