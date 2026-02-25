// ============================================
// 🔭 Scope – Global vs Local vs Block
// Day 2 – Functions & Scope
// ============================================

// --- 1. Global Scope ---
// Variables declared OUTSIDE any function/block
// Accessible from everywhere

console.log("=== Global Scope ===");

const APP_NAME = "25 Days Challenge";  // global constant
let totalCalculations = 0;             // global variable

console.log("APP_NAME (global):", APP_NAME);
console.log("totalCalculations (global):", totalCalculations);

// Global variables are accessible inside functions
function showAppName() {
  console.log("Inside function, APP_NAME:", APP_NAME); // ✅ works
}
showAppName();

// --- 2. Function Scope (Local Scope) ---
// Variables declared INSIDE a function are NOT accessible outside

console.log("\n=== Function Scope (Local) ===");

function calculateArea(width, height) {
  const area = width * height;  // local to this function
  let unit = "sq units";       // local to this function
  console.log(`Area: ${area} ${unit}`);
  return area;
}

calculateArea(5, 10);

// ❌ Uncommenting below will throw: ReferenceError
// console.log(area);  // not defined outside the function
// console.log(unit);  // not defined outside the function

// --- 3. Block Scope ---
// Variables declared with `let`/`const` inside { } are block-scoped

console.log("\n=== Block Scope ===");

if (true) {
  let blockLet = "I'm block-scoped with let";
  const blockConst = "I'm block-scoped with const";
  var blockVar = "I escape blocks! (var is function-scoped)";
  console.log("Inside block: let ✅", blockLet);
  console.log("Inside block: const ✅", blockConst);
  console.log("Inside block: var ✅", blockVar);
}

// ❌ let and const are NOT accessible outside the block
// console.log(blockLet);   // ReferenceError
// console.log(blockConst); // ReferenceError

// ✅ var leaks out of blocks (this is why we avoid var!)
console.log("Outside block: var ✅", blockVar);

// --- 4. Nested Scope (Scope Chain) ---
// Inner functions can access outer variables, but NOT vice versa

console.log("\n=== Nested Scope (Scope Chain) ===");

function outer() {
  const outerVar = "I'm from outer";

  function middle() {
    const middleVar = "I'm from middle";

    function inner() {
      const innerVar = "I'm from inner";

      // ✅ Inner can access ALL outer scopes
      console.log("inner() sees:", outerVar);    // ✅
      console.log("inner() sees:", middleVar);   // ✅
      console.log("inner() sees:", innerVar);    // ✅
    }

    inner();

    // ❌ middle cannot access inner's variables
    // console.log(innerVar); // ReferenceError
  }

  middle();

  // ❌ outer cannot access middle's or inner's variables
  // console.log(middleVar); // ReferenceError
}

outer();

// --- 5. Lexical Scope ---
// Functions remember the scope where they were DEFINED, not where they're called

console.log("\n=== Lexical Scope ===");

function createGreeting() {
  const message = "Hello from createGreeting!";

  return function () {
    console.log(message); // remembers `message` from outer scope
  };
}

const greetFn = createGreeting();
greetFn(); // "Hello from createGreeting!" – even though called outside!

// --- 6. Closures (Scope in Action) ---
// A closure is a function that remembers its outer variables

console.log("\n=== Closures ===");

function createCounter() {
  let count = 0; // private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log("Count:", counter.getCount()); // 0
counter.increment();
counter.increment();
counter.increment();
console.log("After 3 increments:", counter.getCount()); // 3
counter.decrement();
console.log("After 1 decrement:", counter.getCount());  // 2

// ❌ Cannot access `count` directly
// console.log(counter.count); // undefined – it's private!

// --- 7. Variable Shadowing ---
// Inner scope variable with same name "shadows" the outer one

console.log("\n=== Variable Shadowing ===");

const color = "blue"; // global

function paintRoom() {
  const color = "red"; // shadows the global `color`
  console.log("Inside paintRoom:", color); // "red"

  function innerPaint() {
    const color = "green"; // shadows paintRoom's `color`
    console.log("Inside innerPaint:", color); // "green"
  }

  innerPaint();
}

paintRoom();
console.log("Global color:", color); // "blue" – unchanged

// --- 8. Loop Scope: let vs var ---
console.log("\n=== Loop Scope: let vs var ===");

// With `let` – each iteration has its own scope
console.log("--- Using let ---");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let i:", i), 0);
}
// Output: 0, 1, 2 ✅

// With `var` – shared across all iterations
console.log("--- Using var ---");
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log("var j:", j), 10);
}
// Output: 3, 3, 3 ❌ (all share the same `j`)

// --- 9. IIFE (Immediately Invoked Function Expression) ---
// Creates its own scope to avoid polluting global

console.log("\n=== IIFE ===");

(function () {
  const secret = "hidden from global";
  console.log("IIFE says:", secret);
})();

// ❌ Not accessible outside
// console.log(secret); // ReferenceError

// Arrow function IIFE
(() => {
  const anotherSecret = "also hidden";
  console.log("Arrow IIFE says:", anotherSecret);
})();

// --- 10. Scope Summary ---
console.log("\n=== Scope Summary ===");
console.log(`
📋 Scope Types:
   1. Global Scope  – accessible everywhere
   2. Function Scope – accessible only inside the function
   3. Block Scope    – { } with let/const (not var!)

📋 Key Rules:
   - Inner scope CAN access outer scope ✅
   - Outer scope CANNOT access inner scope ❌
   - var is function-scoped (leaks out of blocks)
   - let/const are block-scoped (safer!)
   - Closures remember their defining scope
`);

console.log("✅ Scope – Global vs Local vs Block Complete!");
