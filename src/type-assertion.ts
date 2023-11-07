{
  //
  // Type assertion
  let anything: any;
  anything = "My name is Banna";
  anything = 10;
  // (anything as number).;

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The weight is ${convertedValue} gram`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(100) as number;
  const result2 = kgToGm(100) as string;
  //
}
