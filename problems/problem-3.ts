// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {
  let count: number = 0;

  sentence.split(" ").forEach((sw) => {
    if (word.toLowerCase() == sw.toLowerCase()) {
      count++;
    }
  });

  return count;
};
//sample input
console.log(countWordOccurrences("I love typescrIpt", "typescript"));
