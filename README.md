# 🧩 hashkrio

> Generate random alphanumeric words with special characters.  
> Useful for testing, fake data generation, passwords, or obfuscation.

---

## 📦 Installation

Install using **npm**:

```bash
npm install hashkrio
```

Or using **yarn**:

```bash
yarn add hashkrio
```

---

## 🔧 Usage

### Import the package

```js
const { getWords } = require("hashkrio");
```

### Basic Usage

```js
const result = getWords();
console.log(result); // Output: x3G$@z &2f L9) ... (6 random words)
```

### With custom word count

```js
const result = getWords(10);
console.log(result); // Output: 10 random words
```

---

## 📘 Function: `getWords(count?)`

### Description

Returns a space-separated string containing randomly generated "words".  
Each word may include:

- Uppercase and lowercase letters (`A–Z`, `a–z`)
- Digits (`0–9`)
- Symbols: `!@#$%^&*()_+[]/*-.;:,.<>/?\|`

Each word has a **random length between 1 and 10 characters**.

---

### ✅ Parameters

| Name  | Type   | Default | Description                      |
| ----- | ------ | ------- | -------------------------------- |
| count | number | `6`     | Number of random words to return |

---

### ✅ Returns

**`string`** — A space-separated string of `count` random words.

---

### ✅ Example Output

```js
getWords();
// "A9! lK* mZ^ (f7 !1. =K8"

getWords(4);
// "9az Q2# aLp* .]"

getWords(10);
// "Y$! a8Lk F@j] 9Wq .zVq 3a* B7_ q)z _=. V<z"
```

---

## ⚠️ Error Handling

This function validates its input and throws meaningful errors:

### ❌ Invalid Types

```js
getWords("five"); // ❌ TypeError: getWords expects a number as input.
getWords(null); // ❌ TypeError: getWords expects a number as input.
```

### ❌ Invalid Numbers

```js
getWords(-3); // ❌ RangeError: getWords expects a positive integer.
getWords(2.5); // ❌ RangeError: getWords expects a positive integer.
```

---

## 🔤 Characters Used

Each word may include characters from the following set:

```
A–Z a–z 0–9 !@#$%^&*()_+[]/*-.;:,.<>/?\|
```

---

## 👨‍💻 Author

Created by **Hashkrio MERN Dev **  
GitHub: [@arityrajan](https://github.com/arityrajan)

---

## 📃 License

This project is licensed under the **MIT License**.
