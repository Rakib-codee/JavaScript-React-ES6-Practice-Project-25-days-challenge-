// ============================================
// ➕ Arithmetic & Comparison Operators
// Day 1 – Variables, Data Types, Operators
// ============================================

// =====================
// ARITHMETIC OPERATORS
// =====================

console.log("=== ➕ Arithmetic Operators ===\n");

const a = 15;
const b = 4;

console.log(`a = ${a}, b = ${b}\n`);

// Basic Operations
console.log("Addition:       a + b =", a + b);     // 19
console.log("Subtraction:    a - b =", a - b);     // 11
console.log("Multiplication: a * b =", a * b);     // 60
console.log("Division:       a / b =", a / b);     // 3.75
console.log("Modulus:        a % b =", a % b);     // 3 (remainder)
console.log("Exponentiation: a ** b =", a ** b);   // 50625 (15^4)

// Unary Operators
console.log("\n--- Unary Operators ---");
let counter = 5;
console.log("counter:", counter);
console.log("counter++:", counter++); // 5 (returns THEN increments)
console.log("after counter++:", counter); // 6
console.log("++counter:", ++counter); // 7 (increments THEN returns)
console.log("counter--:", counter--); // 7 (returns THEN decrements)
console.log("after counter--:", counter); // 6
console.log("--counter:", --counter); // 5 (decrements THEN returns)

// Assignment Operators
console.log("\n--- Assignment Operators ---");
let x = 10;
console.log("x =", x);

x += 5;  console.log("x += 5  →", x);  // 15
x -= 3;  console.log("x -= 3  →", x);  // 12
x *= 2;  console.log("x *= 2  →", x);  // 24
x /= 4;  console.log("x /= 4  →", x);  // 6
x %= 4;  console.log("x %= 4  →", x);  // 2
x **= 3; console.log("x **= 3 →", x);  // 8

// String Concatenation with +
console.log("\n--- String Concatenation ---");
const first = "Java";
const second = "Script";
console.log("first + second:", first + second); // "JavaScript"
console.log("number + string:", 5 + "3");       // "53" (string!)
console.log("string + number:", "5" + 3);       // "53" (string!)
console.log("number - string:", 5 - "3");       // 2 (number! JS tries to convert)

// =====================
// COMPARISON OPERATORS
// =====================

console.log("\n\n=== ⚖️ Comparison Operators ===\n");

// Equality
console.log("--- Equality ---");
console.log('5 == 5:    ', 5 == 5);       // true
console.log('5 == "5":  ', 5 == "5");     // true  (== does type coercion!)
console.log('5 === "5": ', 5 === "5");    // false (=== strict, no coercion)
console.log('5 === 5:   ', 5 === 5);      // true

console.log("\n--- Inequality ---");
console.log('5 != "5":  ', 5 != "5");     // false (coerced equal)
console.log('5 !== "5": ', 5 !== "5");    // true  (different type)

// Relational
console.log("\n--- Relational ---");
console.log("10 > 5: ", 10 > 5);    // true
console.log("10 < 5: ", 10 < 5);    // false
console.log("5 >= 5: ", 5 >= 5);    // true
console.log("5 <= 4: ", 5 <= 4);    // false

// String Comparison (lexicographic / Unicode order)
console.log("\n--- String Comparison ---");
console.log('"apple" < "banana":  ', "apple" < "banana");   // true (a < b)
console.log('"Zebra" < "apple":   ', "Zebra" < "apple");    // true (uppercase < lowercase)
console.log('"100" > "99":        ', "100" > "99");          // false! ("1" < "9" char comparison)

// =====================
// LOGICAL OPERATORS
// =====================

console.log("\n\n=== 🔗 Logical Operators ===\n");

const isAdult = true;
const hasID = false;

console.log("AND (&&):", isAdult && hasID);   // false (both must be true)
console.log("OR  (||):", isAdult || hasID);   // true  (at least one true)
console.log("NOT (!):  !isAdult:", !isAdult); // false

// Short-circuit evaluation
console.log("\n--- Short-circuit ---");
const userName = "" || "Guest";         // "" is falsy → returns "Guest"
console.log("Fallback with ||:", userName);

const config = null ?? "default";       // null/undefined → returns "default"
console.log("Nullish coalescing (??):", config);

// Difference between || and ??
console.log("\n--- || vs ?? ---");
console.log('0 || "fallback":  ', 0 || "fallback");   // "fallback" (0 is falsy)
console.log('0 ?? "fallback":  ', 0 ?? "fallback");   // 0 (only null/undefined triggers ??)
console.log('"" || "fallback": ', "" || "fallback");   // "fallback"
console.log('"" ?? "fallback": ', "" ?? "fallback");   // "" (empty string is not null)

// =====================
// TERNARY OPERATOR
// =====================

console.log("\n\n=== ❓ Ternary Operator ===\n");

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age} → ${status}`);

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Score ${score} → Grade: ${grade}`);

// =====================
// OPERATOR PRECEDENCE
// =====================

console.log("\n\n=== 📊 Operator Precedence ===\n");

console.log("2 + 3 * 4 =", 2 + 3 * 4);       // 14 (not 20, * before +)
console.log("(2 + 3) * 4 =", (2 + 3) * 4);   // 20 (parentheses first)
console.log("10 - 2 ** 2 =", 10 - 2 ** 2);    // 6 (** before -)
console.log("true || false && false:", true || false && false); // true (&& before ||)

console.log("\n✅ Operators Examples Complete!");
