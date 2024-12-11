// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

{
  const validateKeys = <T extends object>(obj: T, keys: string[]): boolean => {
    const isExist: Array<boolean> = keys.map(
      (key) => Object.keys(obj).indexOf(key) != -1
    );

    if (isExist.includes(false)) return false;
    else return true;
  };

  //sample input
  const person: object = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
