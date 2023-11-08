{
  //Mapped type

  // here use js map (Example: 1)
  const arrayOfNumbers: number[] = [1, 2, 3];
  const arrayOfString: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfString); //[ '1', '2', '3' ]

  // TS mapped type (Example: 2)
  type areaNumber = {
    height: number;
    width: number;
  };
  type areaString = {
    [Key in keyof areaNumber]: string;
  };
  // now express mapped type in generic (Example: 3)
  type Height = areaNumber["height"];   // look up type
  type areaString2<T> = {
    [Key in keyof T]: T[Key];
  };
  const area1: areaString2<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
