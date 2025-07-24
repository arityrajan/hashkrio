// index.d.ts

/**
 * Generates a space-separated string of random words.
 * Each word is randomly 1-10 characters long and includes letters, numbers, and symbols.
 *
 * @param count - Number of words to generate (default: 6)
 * @returns A space-separated string of random words
 */
declare function getWords(count?: number): string;

declare const hashkrio: {
  getWords: typeof getWords;
};

export = hashkrio;
