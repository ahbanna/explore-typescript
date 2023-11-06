{// Ternary operator
  const a = 10;
  const b = 20;
  const c = a > b ? "a is greater than a" : "b is greater than a";
  console.log(c); // b is greater than a

  // Nullish coalescing operator
  const isAuthenticeted = null;
  const result = isAuthenticeted ?? "Guest";
  console.log(result);    // Guest
  
  // Optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    }
  }

  const user: User = {
    name: "Banna",
    address: {
      city: "Bogra",
      presentAddress: "Bogra"
    }
  }
  const permanentAddress = user?.address?.permanentAddress ?? "No permanent adddress"
  console.log(permanentAddress);      // No permanent address
  
}