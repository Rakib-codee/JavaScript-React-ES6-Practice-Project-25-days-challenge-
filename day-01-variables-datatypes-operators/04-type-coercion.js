// ============================================
// 🔄 Type Conversion & Coercion
// Day 1 – Variables, Data Types, Operators
// ============================================

// =====================
// EXPLICIT CONVERSION (Type Casting)
// =====================
// You intentionally convert types using built-in functions

console.log("=== 🔄 Explicit Type Conversion ===\n");

// --- To String ---
console.log("--- To String ---");
console.log(String(42));         // "42"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"
console.log((42).toString());   // "42"
console.log((255).toString(16)); // "ff" (hex)
console.log((8).toString(2));    // "1000" (binary)

// --- To Number ---
console.log("\n--- To Number ---");
console.log(Number("42"));       // 42
console.log(Number("3.14"));     // 3.14
console.log(Number(""));         // 0
console.log(Number(" "));        // 0
console.log(Number("hello"));    // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(parseInt("42px"));   // 42 (parses until non-digit)
console.log(parseFloat("3.14em")); // 3.14
console.log(parseInt("0xFF", 16)); // 255 (hex parsing)
console.log(+"99");              // 99 (unary + trick)

// --- To Boolean ---
console.log("\n--- To Boolean ---");
console.log("Falsy values:");
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false

console.log("\nTruthy values:");
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true (empty array is truthy!)
console.log(Boolean({}));        // true (empty object is truthy!)
console.log(Boolean("0"));       // true (non-empty string!)
console.log(Boolean("false"));   // true (non-empty string!)

// Double NOT trick for boolean conversion
console.log("\nDouble NOT (!!):");
console.log(!!0);        // false
console.log(!!"hello");  // true
console.log(!!null);     // false
console.log(!!42);       // true

// =====================
// IMPLICIT COERCION
// =====================
// JavaScript automatically converts types behind the scenes

console.log("\n\n=== 🤖 Implicit Type Coercion ===\n");

// + with strings (concatenation wins)
console.log("--- String coercion with + ---");
console.log("5" + 3);         // "53" (number → string)
console.log(5 + "3");         // "53"
console.log("5" + true);      // "5true"
console.log("5" + null);      // "5null"
console.log("5" + undefined); // "5undefined"
console.log(1 + 2 + "3");     // "33" (left to right: 1+2=3, then 3+"3"="33")
console.log("3" + 2 + 1);     // "321" ("3"+2="32", then "32"+1="321")

// - * / with strings (number conversion wins)
console.log("\n--- Numeric coercion with -, *, / ---");
console.log("10" - 5);        // 5
console.log("10" * 2);        // 20
console.log("10" / 2);        // 5
console.log("5" - true);      // 4 (true → 1)
console.log("5" - false);     // 5 (false → 0)

// Comparison coercion
console.log("\n--- Comparison coercion ---");
console.log(null == undefined);    // true (special rule)
console.log(null === undefined);   // false (different types)
console.log(null == 0);           // false (null special case)
console.log(null >= 0);           // true (null → 0 in comparison)
console.log(NaN == NaN);          // false (NaN is never equal to anything)
console.log(NaN === NaN);         // false

// =====================
// COMMON GOTCHAS & TRICKY CASES
// =====================

console.log("\n\n=== ⚠️ Tricky Cases ===\n");

console.log([] + []);          // "" (empty string)
console.log([] + {});          // "[object Object]"
console.log({} + []);          // "[object Object]" (in expression context)
console.log(true + true);     // 2
console.log(true + false);    // 1
console.log("" == false);     // true
console.log("" === false);    // false
console.log(" " == false);    // true
console.log("0" == false);    // true
console.log("0" === false);   // false

// =====================
// HOW TO SAFELY CHECK TYPES
// =====================

console.log("\n\n=== 🛡️ Safe Type Checking ===\n");

const checkType = (value) => {
  const type = typeof value;
  const isNull = value === null;
  const isArr = Array.isArray(value);
  const isNan = Number.isNaN(value);

  if (isNull) return "null";
  if (isArr) return "array";
  if (isNan) return "NaN";
  return type;
};

console.log("checkType(42):        ", checkType(42));
console.log("checkType('hello'):   ", checkType("hello"));
console.log("checkType(null):      ", checkType(null));
console.log("checkType([1,2]):     ", checkType([1, 2]));
console.log("checkType(NaN):       ", checkType(NaN));
console.log("checkType(undefined): ", checkType(undefined));
console.log("checkType({}):        ", checkType({}));

console.log("\n✅ Type Conversion & Coercion Complete!");
