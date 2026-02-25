// ============================================
// 🔧 Function Declaration vs Arrow Function
// Day 2 – Functions & Scope
// ============================================

// --- 1. Function Declaration ---
// ✅ Hoisted – can be called BEFORE it's defined
// ✅ Has its own `this` context
// ✅ Has `arguments` object

console.log("=== Function Declaration ===");

// Call BEFORE declaration (hoisting works!)
console.log("Hoisted call:", greet("Rakib"));

function greet(name) {
  return `Hello, ${name}! Welcome to Day 2.`;
}

console.log("Normal call:", greet("World"));

// Function declaration with multiple parameters
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log("Full name:", getFullName("Rakib", "Hasan"));

// --- 2. Function Expression ---
// ❌ NOT hoisted – must be defined before calling
// Stored in a variable

console.log("\n=== Function Expression ===");

const square = function (num) {
  return num * num;
};

console.log("Square of 5:", square(5));    // 25
console.log("Square of 12:", square(12));  // 144

// ❌ Uncommenting below would throw: ReferenceError
// console.log(cube(3));
// const cube = function(num) { return num ** 3; };

// --- 3. Arrow Function (ES6) ---
// ✅ Shorter syntax
// ❌ Does NOT have its own `this`
// ❌ Does NOT have `arguments` object
// ✅ Implicit return for single expressions

console.log("\n=== Arrow Function ===");

// Full arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("Multiply 4 × 5:", multiply(4, 5)); // 20

// Implicit return (single expression – no braces needed)
const double = (n) => n * 2;
console.log("Double of 7:", double(7)); // 14

// Single parameter – parentheses optional
const isEven = n => n % 2 === 0;
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

// No parameters – empty parentheses required
const getTimestamp = () => Date.now();
console.log("Timestamp:", getTimestamp());

// Returning an object (wrap in parentheses)
const createUser = (name, age) => ({ name, age, active: true });
console.log("User:", createUser("Rakib", 25));

// --- 4. Key Differences Summary ---
console.log("\n=== Key Differences ===");

// 4a. `this` binding difference
const person = {
  name: "Rakib",

  // Regular function – `this` refers to the object
  sayHiRegular: function () {
    return `Hi, I'm ${this.name} (regular function)`;
  },

  // Arrow function – `this` inherits from outer scope (NOT the object)
  sayHiArrow: () => {
    return `Hi, I'm ${typeof this !== "undefined" ? this.name : "undefined"} (arrow function)`;
  },
};

console.log(person.sayHiRegular()); // "Hi, I'm Rakib"
console.log(person.sayHiArrow());   // "Hi, I'm undefined" – arrow doesn't bind `this`

// 4b. `arguments` object
function regularArgs() {
  return arguments.length;
}
console.log("\nRegular function arguments count:", regularArgs(1, 2, 3)); // 3

// Arrow functions don't have `arguments`:
// const arrowArgs = () => arguments.length; // ❌ ReferenceError

// Use rest parameters instead with arrow functions
const arrowArgs = (...args) => args.length;
console.log("Arrow function rest args count:", arrowArgs(1, 2, 3)); // 3

// --- 5. When to Use Which? ---
console.log("\n=== When to Use Which? ===");
console.log(`
📋 Use Function Declaration when:
   - You need hoisting (call before define)
   - You need 'this' binding (object methods)
   - You need 'arguments' object

📋 Use Arrow Function when:
   - Short callbacks (map, filter, reduce)
   - You want to preserve outer 'this'
   - Concise one-line expressions
`);

// --- 6. Practical Comparison ---
console.log("=== Practical: Array Methods ===");

const numbers = [1, 2, 3, 4, 5];

// Traditional function expression
const doubledTraditional = numbers.map(function (num) {
  return num * 2;
});

// Arrow function (much cleaner!)
const doubledArrow = numbers.map(num => num * 2);

console.log("Traditional map:", doubledTraditional); // [2, 4, 6, 8, 10]
console.log("Arrow map:      ", doubledArrow);       // [2, 4, 6, 8, 10]

// Chaining with arrow functions
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 10);
console.log("Filtered & mapped:", result); // [30, 40, 50]

console.log("\n✅ Function Declaration vs Arrow Function Complete!");
