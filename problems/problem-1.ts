// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumArray = (ar: number[]): number => {
  let sum: number = 0;

  for (let i: number = 0; i < ar.length; i++) sum += ar[i];
  return sum;
};
// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5]));
