// ============================================
// 📨 Parameters vs Arguments
// Day 2 – Functions & Scope
// ============================================

// --- 1. Parameters vs Arguments – What's the Difference? ---
console.log("=== Parameters vs Arguments ===");

// PARAMETERS = placeholders in the function definition (like blank slots)
// ARGUMENTS  = actual values passed when calling the function

function introduce(name, role) {   // ← `name` and `role` are PARAMETERS
  return `I'm ${name}, a ${role}.`;
}

//                         ↓ these are ARGUMENTS
console.log(introduce("Rakib", "Developer")); // I'm Rakib, a Developer.
console.log(introduce("Alice", "Designer"));  // I'm Alice, a Designer.

// --- 2. Default Parameters (ES6) ---
console.log("\n=== Default Parameters ===");

// If no argument is passed, the default value is used
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());                     // Hello, Guest!
console.log(greet("Rakib"));             // Hello, Rakib!
console.log(greet("Rakib", "Welcome"));  // Welcome, Rakib!

// Default with arrow function
const calculateTax = (amount, rate = 0.1) => amount * rate;

console.log("Tax on $100:", calculateTax(100));       // 10 (uses default 10%)
console.log("Tax on $100 at 15%:", calculateTax(100, 0.15)); // 15

// --- 3. Rest Parameters (...) ---
// Collects all remaining arguments into an array
console.log("\n=== Rest Parameters ===");

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum(1,2):", sum(1, 2));               // 3
console.log("Sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5)); // 15
console.log("Sum():", sum());                       // 0

// Rest must be the LAST parameter
function logTeam(leader, ...members) {
  console.log(`Leader: ${leader}`);
  console.log(`Members: ${members.join(", ")}`);
}

console.log("\n--- Team ---");
logTeam("Rakib", "Alice", "Bob", "Charlie");

// --- 4. Arguments Object (only in regular functions) ---
console.log("\n=== Arguments Object ===");

function showArgs() {
  console.log("arguments:", arguments);
  console.log("Type:", typeof arguments);
  console.log("Length:", arguments.length);

  // Convert to real array
  const argsArray = Array.from(arguments);
  console.log("As array:", argsArray);
}

showArgs("a", "b", "c");

// ❌ Arrow functions do NOT have `arguments`
// const arrowShowArgs = () => console.log(arguments); // ReferenceError

// --- 5. Passing Different Types as Arguments ---
console.log("\n=== Different Argument Types ===");

const describe = (value) => {
  return `Value: ${value}, Type: ${typeof value}`;
};

console.log(describe(42));           // number
console.log(describe("hello"));     // string
console.log(describe(true));        // boolean
console.log(describe(undefined));   // undefined
console.log(describe(null));        // object (JS quirk!)
console.log(describe([1, 2, 3]));   // object

// --- 6. Passing Functions as Arguments (Callbacks) ---
console.log("\n=== Functions as Arguments (Callbacks) ===");

function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log("operate(5, 3, add):", operate(5, 3, add));           // 8
console.log("operate(10, 4, subtract):", operate(10, 4, subtract)); // 6

// Inline arrow function as argument
console.log("operate(6, 3, divide):", operate(6, 3, (a, b) => a / b)); // 2

// --- 7. Arguments Count Mismatch ---
console.log("\n=== Argument Count Mismatch ===");

function showTwo(a, b) {
  console.log(`a = ${a}, b = ${b}`);
}

showTwo(1, 2);        // a = 1, b = 2 ✅
showTwo(1);           // a = 1, b = undefined ⚠️ (missing argument)
showTwo(1, 2, 3);     // a = 1, b = 2 ✅ (extra argument ignored)
showTwo();            // a = undefined, b = undefined ⚠️

// --- 8. Destructured Parameters ---
console.log("\n=== Destructured Parameters ===");

// Object destructuring in parameters
function displayUser({ name, age, role = "member" }) {
  console.log(`${name} (${age}) — ${role}`);
}

displayUser({ name: "Rakib", age: 25, role: "admin" });
displayUser({ name: "Alice", age: 28 }); // uses default role

// Array destructuring in parameters
const getFirst = ([first, ...rest]) => {
  console.log("First:", first, "| Rest:", rest);
};

getFirst([10, 20, 30, 40]);

console.log("\n✅ Parameters vs Arguments Complete!");
