// ============================================
// 🖩 Mini Calculator – Putting It All Together
// Day 2 – Functions & Scope
// ============================================

// --- Concepts Used ---
// ✅ Function declaration & arrow functions
// ✅ Parameters & arguments
// ✅ Scope (local/global)
// ✅ Closures (for history tracking)
// ✅ Input validation (Stretch Goal)
// ✅ Higher-order functions (passing functions as arguments)

// ============================================
// 🛡️ Input Validation
// ============================================

const isValidNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};

const validateInputs = (a, b) => {
  if (!isValidNumber(a)) {
    return `❌ Error: First value (${a}) is not a valid number.`;
  }
  if (!isValidNumber(b)) {
    return `❌ Error: Second value (${b}) is not a valid number.`;
  }
  return null;
};

// ============================================
// 🧮 Core Operations
// ============================================

function add(a, b) {
  return a + b;
}

const subtract = (a, b) => a - b;

const multiply = function (a, b) {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) return "❌ Error: Cannot divide by zero!";
  return a / b;
};

// Bonus operations
const modulo = (a, b) => {
  if (b === 0) return "❌ Error: Cannot modulo by zero!";
  return a % b;
};

const power = (a, b) => a ** b;

// ============================================
// 📋 Operations Map
// ============================================

const operations = {
  "+": { fn: add, name: "Addition" },
  "-": { fn: subtract, name: "Subtraction" },
  "*": { fn: multiply, name: "Multiplication" },
  "/": { fn: divide, name: "Division" },
  "%": { fn: modulo, name: "Modulo" },
  "**": { fn: power, name: "Power" },
};

// ============================================
// 🖩 Calculator Function (with Closure for History)
// ============================================

/**
 * Creates a calculator instance with history tracking.
 * Demonstrates: closures, scope, higher-order functions.
 * @returns {object} Calculator methods.
 */
function createCalculator() {
  // Private state (closure) – not accessible outside
  let history = [];
  let lastResult = null;

  /**
   * Performs a calculation with input validation.
   * @param {number} a - First operand.
   * @param {string} operator - The operator (+, -, *, /, %, **).
   * @param {number} b - Second operand.
   * @returns {number|string} - Result or error message.
   */
  function calculate(a, operator, b) {
    // Input validation (Stretch Goal)
    const error = validateInputs(a, b);
    if (error) return error;

    // Check if operator exists
    if (!operations[operator]) {
      return `❌ Error: Unknown operator "${operator}". Use: +, -, *, /, %, **`;
    }

    const result = operations[operator].fn(a, b);

    // If the operation returned an error (e.g., divide by zero)
    if (typeof result === "string") return result;

    // Store in history (closure keeps this private)
    const entry = {
      expression: `${a} ${operator} ${b} = ${result}`,
      operands: { a, b },
      operator,
      result,
      timestamp: new Date().toLocaleTimeString(),
    };
    history.push(entry);
    lastResult = result;

    return result;
  }

  /**
   * Chain calculation using last result as first operand.
   * @param {string} operator - The operator.
   * @param {number} b - Second operand.
   * @returns {number|string} - Result or error.
   */
  function chain(operator, b) {
    if (lastResult === null) {
      return "❌ Error: No previous result. Run calculate() first.";
    }
    return calculate(lastResult, operator, b);
  }

  // Public API
  return {
    calculate,
    chain,
    getHistory: () => [...history], // return copy (immutable)
    getLastResult: () => lastResult,
    clearHistory: () => {
      history = [];
      lastResult = null;
      return "🗑️ History cleared.";
    },
    showHistory: () => {
      if (history.length === 0) {
        return "📋 No calculations yet.";
      }
      return history.map((h, i) => `  ${i + 1}. ${h.expression}`).join("\n");
    },
  };
}

// ============================================
// 🧪 Test: Basic Calculator Operations
// ============================================

console.log("=== 🖩 Mini Calculator ===\n");

const calc = createCalculator();

console.log("--- Basic Operations ---");
console.log("10 + 5  =", calc.calculate(10, "+", 5));    // 15
console.log("20 - 8  =", calc.calculate(20, "-", 8));    // 12
console.log("6 × 7   =", calc.calculate(6, "*", 7));     // 42
console.log("100 ÷ 4 =", calc.calculate(100, "/", 4));   // 25
console.log("17 % 5  =", calc.calculate(17, "%", 5));    // 2
console.log("2 ** 10 =", calc.calculate(2, "**", 10));   // 1024

// --- Chaining ---
console.log("\n--- Chaining Operations ---");
console.log("Start: 100 + 50 =", calc.calculate(100, "+", 50)); // 150
console.log("Chain: × 2 =", calc.chain("*", 2));                 // 300
console.log("Chain: - 50 =", calc.chain("-", 50));                // 250
console.log("Chain: ÷ 5 =", calc.chain("/", 5));                 // 50

// --- History ---
console.log("\n--- Calculation History ---");
console.log(calc.showHistory());

// --- Edge Cases ---
console.log("\n--- Edge Cases ---");
console.log("divide by 0:", calc.calculate(10, "/", 0));     // Error
console.log("modulo by 0:", calc.calculate(10, "%", 0));     // Error
console.log("negative:", calc.calculate(-5, "+", -3));        // -8
console.log("decimals:", calc.calculate(0.1, "+", 0.2));     // 0.300...
console.log("large:", calc.calculate(999999, "*", 999999));   // 999998000001

// --- Input Validation (Stretch Goal) ---
console.log("\n--- 🛡️ Input Validation ---");
console.log(calc.calculate("hello", "+", 5));       // Error: not a number
console.log(calc.calculate(10, "+", undefined));     // Error: not a number
console.log(calc.calculate(NaN, "*", 5));            // Error: NaN
console.log(calc.calculate(10, "^", 2));             // Error: unknown operator
console.log(calc.calculate(Infinity, "+", 1));       // Error: Infinity

// --- Clear History ---
console.log("\n--- Clear History ---");
console.log(calc.clearHistory());
console.log(calc.showHistory()); // "No calculations yet."

// ============================================
// 🧪 Test: Multiple Calculator Instances (Scope Demo)
// ============================================

console.log("\n--- Multiple Instances (Scope Isolation) ---");

const calc1 = createCalculator();
const calc2 = createCalculator();

calc1.calculate(100, "+", 200);
calc2.calculate(1, "*", 999);

console.log("Calc 1 last result:", calc1.getLastResult()); // 300
console.log("Calc 2 last result:", calc2.getLastResult()); // 999
console.log("Calc 1 history count:", calc1.getHistory().length); // 1
console.log("Calc 2 history count:", calc2.getHistory().length); // 1

// ✅ Each calculator has its own private scope – they don't interfere!

console.log("\n✅ Mini Calculator Complete!");
