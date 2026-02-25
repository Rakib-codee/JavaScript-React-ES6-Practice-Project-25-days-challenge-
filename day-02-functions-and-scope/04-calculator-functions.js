// ============================================
// 🧮 Calculator Functions – add, subtract, multiply, divide
// Day 2 – Functions & Scope
// ============================================

// --- Concepts Used ---
// ✅ Function declaration vs arrow function
// ✅ Parameters & arguments
// ✅ Default parameters
// ✅ Input validation (Stretch Goal)
// ✅ Scope (local variables inside functions)

// ============================================
// 🛡️ Input Validation Helper
// ============================================

/**
 * Validates that a value is a finite number.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if valid number.
 */
const isValidNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};

/**
 * Validates all arguments are valid numbers.
 * @param  {...any} args - Values to validate.
 * @returns {string|null} - Error message or null if valid.
 */
const validateNumbers = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (!isValidNumber(args[i])) {
      return `❌ Error: Argument ${i + 1} (${args[i]}) is not a valid number.`;
    }
  }
  return null; // all valid
};

// ============================================
// ➕ add() – Addition
// ============================================

/**
 * Adds two numbers.
 * Demonstrates: function declaration (hoisted).
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} - Sum or error message.
 */
function add(a, b) {
  const error = validateNumbers(a, b);
  if (error) return error;
  return a + b;
}

// ============================================
// ➖ subtract() – Subtraction
// ============================================

/**
 * Subtracts second number from first.
 * Demonstrates: arrow function.
 * @param {number} a - Number to subtract from.
 * @param {number} b - Number to subtract.
 * @returns {number|string} - Difference or error message.
 */
const subtract = (a, b) => {
  const error = validateNumbers(a, b);
  if (error) return error;
  return a - b;
};

// ============================================
// ✖️ multiply() – Multiplication
// ============================================

/**
 * Multiplies two numbers.
 * Demonstrates: function expression.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} - Product or error message.
 */
const multiply = function (a, b) {
  const error = validateNumbers(a, b);
  if (error) return error;
  return a * b;
};

// ============================================
// ➗ divide() – Division
// ============================================

/**
 * Divides first number by second.
 * Demonstrates: arrow function with extra validation (division by zero).
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number|string} - Quotient or error message.
 */
const divide = (a, b) => {
  const error = validateNumbers(a, b);
  if (error) return error;

  if (b === 0) {
    return "❌ Error: Cannot divide by zero!";
  }

  return a / b;
};

// ============================================
// 🧪 Test Cases
// ============================================

console.log("=== 🧮 Calculator Functions ===\n");

// --- Addition ---
console.log("--- ➕ add() ---");
console.log("add(10, 5):", add(10, 5));         // 15
console.log("add(-3, 8):", add(-3, 8));         // 5
console.log("add(0, 0):", add(0, 0));           // 0
console.log("add(1.5, 2.3):", add(1.5, 2.3));  // 3.8

// --- Subtraction ---
console.log("\n--- ➖ subtract() ---");
console.log("subtract(10, 5):", subtract(10, 5));     // 5
console.log("subtract(3, 8):", subtract(3, 8));        // -5
console.log("subtract(0, 0):", subtract(0, 0));        // 0
console.log("subtract(7.5, 2.5):", subtract(7.5, 2.5)); // 5

// --- Multiplication ---
console.log("\n--- ✖️ multiply() ---");
console.log("multiply(4, 5):", multiply(4, 5));       // 20
console.log("multiply(-3, 7):", multiply(-3, 7));      // -21
console.log("multiply(0, 100):", multiply(0, 100));    // 0
console.log("multiply(1.5, 4):", multiply(1.5, 4));    // 6

// --- Division ---
console.log("\n--- ➗ divide() ---");
console.log("divide(20, 4):", divide(20, 4));       // 5
console.log("divide(7, 2):", divide(7, 2));          // 3.5
console.log("divide(-12, 3):", divide(-12, 3));      // -4
console.log("divide(10, 0):", divide(10, 0));        // Error: divide by zero

// --- Input Validation (Stretch Goal) ---
console.log("\n--- 🛡️ Input Validation ---");
console.log("add('a', 5):", add("a", 5));               // Error
console.log("subtract(10, undefined):", subtract(10, undefined)); // Error
console.log("multiply(NaN, 5):", multiply(NaN, 5));     // Error
console.log("divide(10, Infinity):", divide(10, Infinity)); // Error
console.log("add(null, 5):", add(null, 5));             // Error
console.log("multiply(true, 5):", multiply(true, 5));   // Error

console.log("\n✅ Calculator Functions Complete!");
