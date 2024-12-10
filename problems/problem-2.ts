// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (ar: number[]): number[] => {
  //   const set = new Set(ar);
  //   return [...set];

  const newAr: number[] = [];

  for (let num of ar) {
    if (newAr.indexOf(num) == -1) {
      newAr.push(num);
    }
  }
  return newAr;
};

// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
