/**
 * Generates a string of random alphanumeric words with special characters.
 * Each word is 1–10 characters long, separated by spaces.
 *
 * @param {number} [count=6] - The number of random words to generate.
 * Must be a positive integer. If omitted, defaults to 6.
 * @returns {string} A space-separated string of random words.
 * @throws {TypeError} If the input is not a number.
 * @throws {RangeError} If the number is not a positive integer.
 *
 * @example
 * hashkrio.getWords();       // → 6 words
 * hashkrio.getWords(3);      // → 3 words
 */
function getWords(count = 6) {
  if (typeof count !== "number" || isNaN(count)) {
    throw new TypeError("getWords expects a number as input.");
  }

  if (!Number.isInteger(count) || count <= 0) {
    throw new RangeError("getWords expects a positive integer.");
  }

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]/*-.;:,.<>/?\\|";
  const words = [];

  for (let i = 0; i < count; i++) {
    const wordLength = Math.floor(Math.random() * 10) + 1;
    let word = "";
    for (let j = 0; j < wordLength; j++) {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
      word += randomChar;
    }
    words.push(word);
  }

  return words.join(" ");
}

const hashkrio = {
  getWords,
};

module.exports = hashkrio;
module.exports.default = hashkrio; // ESM default support
