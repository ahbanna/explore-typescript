{
  // Union
  // Example: 1
  type Student = {
    name: string;
    gender: "male" | "female";
  };
  const std1: Student = {
    name: "Hasan",
    gender: "male",
  };
  // Example: 2
  type Gender = "male" | "female";
  type MaritalStatus = "married" | "unmarried";
  type Status = Gender | MaritalStatus;

  // Intersection
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
