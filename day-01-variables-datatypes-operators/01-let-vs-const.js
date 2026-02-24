// ============================================
// 📦 let vs const – Understanding Variable Declarations
// Day 1 – Variables, Data Types, Operators
// ============================================

// --- 1. `const` – Cannot be reassigned ---
const PI = 3.14159;
const APP_NAME = "25 Days Challenge";
const MAX_SCORE = 100;

console.log("=== const Examples ===");
console.log("PI:", PI);
console.log("APP_NAME:", APP_NAME);
console.log("MAX_SCORE:", MAX_SCORE);

// ❌ Uncommenting below will throw: TypeError: Assignment to constant variable.
// PI = 3.14;

// --- 2. `let` – Can be reassigned ---
let score = 0;
console.log("\n=== let Examples ===");
console.log("Initial score:", score);

score = 10;
console.log("After update:", score);

score = score + 5;
console.log("After adding 5:", score);

// --- 3. Block Scoping ---
// Both let and const are block-scoped (only exist inside { })
console.log("\n=== Block Scoping ===");

if (true) {
  let blockLet = "I exist only inside this block";
  const blockConst = "Me too!";
  console.log("Inside block - let:", blockLet);
  console.log("Inside block - const:", blockConst);
}

// ❌ Uncommenting below will throw: ReferenceError
// console.log(blockLet);
// console.log(blockConst);

// --- 4. `var` vs `let` (why we avoid var) ---
console.log("\n=== var vs let (scoping difference) ===");

if (true) {
  var varVariable = "I leak out of blocks!"; // function-scoped, not block-scoped
  let letVariable = "I stay inside my block";
}

console.log("var outside block:", varVariable); // ✅ Works (but this is BAD)
// console.log(letVariable); // ❌ ReferenceError

// --- 5. const with Objects & Arrays (reference vs value) ---
console.log("\n=== const with Objects & Arrays ===");

const user = { name: "Rakib", age: 25 };
console.log("Original user:", user);

// ✅ You CAN modify properties of a const object
user.age = 26;
user.city = "Dhaka";
console.log("Modified user:", user);

// ❌ But you CANNOT reassign the entire object
// user = { name: "Someone Else" }; // TypeError

const colors = ["red", "green", "blue"];
console.log("\nOriginal colors:", colors);

// ✅ You CAN push/modify elements in a const array
colors.push("yellow");
colors[0] = "crimson";
console.log("Modified colors:", colors);

// ❌ But you CANNOT reassign the array
// colors = ["new", "array"]; // TypeError

// --- 6. When to use let vs const ---
console.log("\n=== Best Practices ===");
console.log("✅ Use 'const' by default — for values that won't change");
console.log("✅ Use 'let' only when you NEED to reassign");
console.log("❌ Avoid 'var' — it has confusing scoping rules");

// --- 7. Temporal Dead Zone (TDZ) ---
console.log("\n=== Temporal Dead Zone ===");
// Variables declared with let/const cannot be accessed before declaration
// console.log(myVar); // ❌ ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Now I exist!";
console.log("After declaration:", myVar);

console.log("\n✅ let vs const Examples Complete!");
