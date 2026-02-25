// ============================================
// 🔢 Primitive vs Reference Data Types
// Day 1 – Variables, Data Types, Operators
// ============================================

// =====================
// PRIMITIVE TYPES (7)
// =====================
// Stored directly in the stack (by value)

console.log("=== 🔹 Primitive Data Types ===\n");

// 1. Number
const age = 25;
const price = 99.99;
const negative = -42;
const infinity = Infinity;
const notANum = NaN;
console.log("Number:", age, typeof age);
console.log("Float:", price, typeof price);
console.log("Negative:", negative, typeof negative);
console.log("Infinity:", infinity, typeof infinity);
console.log("NaN:", notANum, typeof notANum); // NaN is still type "number"!

// 2. String
const firstName = "Rakib";
const greeting = 'Hello World';
const template = `My name is ${firstName}`; // template literal (ES6)
console.log("\nString:", firstName, typeof firstName);
console.log("Template Literal:", template);
console.log("String length:", firstName.length);

// 3. Boolean
const isLoggedIn = true;
const hasPermission = false;
console.log("\nBoolean:", isLoggedIn, typeof isLoggedIn);

// 4. undefined
let uninitializedVar;
console.log("\nundefined:", uninitializedVar, typeof uninitializedVar);

// 5. null
const emptyValue = null;
console.log("null:", emptyValue, typeof emptyValue); // ⚠️ typeof null === "object" (JS bug!)

// 6. Symbol (ES6)
const uniqueId = Symbol("id");
const anotherId = Symbol("id");
console.log("\nSymbol:", uniqueId, typeof uniqueId);
console.log("Symbols are unique:", uniqueId === anotherId); // false!

// 7. BigInt (ES2020)
const bigNumber = 9007199254740991n;
console.log("\nBigInt:", bigNumber, typeof bigNumber);

// =====================
// REFERENCE TYPES
// =====================
// Stored in the heap, variable holds a reference (pointer)

console.log("\n\n=== 🔸 Reference Data Types ===\n");

// 1. Object
const person = {
  name: "Rakib",
  age: 25,
  city: "Dhaka",
};
console.log("Object:", person, typeof person);

// 2. Array (technically an object)
const fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits, typeof fruits);
console.log("Is Array?", Array.isArray(fruits)); // true

// 3. Function (technically an object)
const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log("Function:", typeof greet);
console.log("Call function:", greet("Rakib"));

// 4. Date
const now = new Date();
console.log("Date:", now, typeof now);

// =====================
// KEY DIFFERENCE: Copy Behavior
// =====================

console.log("\n\n=== 🔑 Copy Behavior Difference ===\n");

// Primitive: Copy creates independent value
let a = 10;
let b = a; // copy the VALUE
b = 20;
console.log("Primitive copy:");
console.log("  a:", a); // 10 (unchanged)
console.log("  b:", b); // 20

// Reference: Copy creates shared reference
const original = { name: "Rakib", score: 100 };
const copy = original; // copy the REFERENCE (pointer)
copy.score = 200;
console.log("\nReference copy:");
console.log("  original:", original); // { name: 'Rakib', score: 200 } ← CHANGED!
console.log("  copy:", copy);         // { name: 'Rakib', score: 200 }
console.log("  Same object?", original === copy); // true

// How to make a TRUE copy (shallow copy)
const trueCopy = { ...original };  // spread operator (ES6)
trueCopy.score = 999;
console.log("\nTrue copy (spread):");
console.log("  original:", original); // score: 200 (unchanged)
console.log("  trueCopy:", trueCopy); // score: 999

// =====================
// typeof Cheat Sheet
// =====================

console.log("\n\n=== 📋 typeof Cheat Sheet ===\n");

const typeChecks = [
  [42, "number"],
  ["hello", "string"],
  [true, "boolean"],
  [undefined, "undefined"],
  [null, "object ⚠️ (JS bug)"],
  [Symbol(), "symbol"],
  [42n, "bigint"],
  [{}, "object"],
  [[], "object (use Array.isArray)"],
  [function () {}, "function"],
];

typeChecks.forEach(([value, expected]) => {
  console.log(`  typeof ${String(value).padEnd(20)} → ${typeof value} (${expected})`);
});

console.log("\n✅ Data Types Examples Complete!");
