// ============================================
// 🌡️ Temperature Converter (Celsius ↔ Fahrenheit)
// Day 1 – Variables, Data Types, Operators
// ============================================

// --- Concepts Used ---
// ✅ let vs const
// ✅ primitive types (number, string, boolean)
// ✅ arithmetic operators (+, -, *, /)
// ✅ comparison operators (===, !==, >, <)
// ✅ input validation

/**
 * Validates that the input is a finite number.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if valid number, false otherwise.
 */
const isValidNumber = (value) => {
  // typeof check ensures it's a number primitive (not string, object, etc.)
  // isNaN check catches NaN
  // isFinite check catches Infinity / -Infinity
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};

/**
 * Converts Celsius to Fahrenheit.
 * Formula: °F = (°C × 9/5) + 32
 * @param {number} celsius - Temperature in Celsius.
 * @returns {string|number} - Temperature in Fahrenheit or error message.
 */
const celsiusToFahrenheit = (celsius) => {
  if (!isValidNumber(celsius)) {
    return "❌ Error: Please provide a valid number for Celsius.";
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

/**
 * Converts Fahrenheit to Celsius.
 * Formula: °C = (°F − 32) × 5/9
 * @param {number} fahrenheit - Temperature in Fahrenheit.
 * @returns {string|number} - Temperature in Celsius or error message.
 */
const fahrenheitToCelsius = (fahrenheit) => {
  if (!isValidNumber(fahrenheit)) {
    return "❌ Error: Please provide a valid number for Fahrenheit.";
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

// ============================================
// 🧪 Test Cases
// ============================================

console.log("=== 🌡️ Temperature Converter ===\n");

// --- Celsius to Fahrenheit ---
console.log("--- Celsius → Fahrenheit ---");

const boilingC = 100;
const freezingC = 0;
const bodyTempC = 37;
const negativeC = -40;

console.log(`${boilingC}°C = ${celsiusToFahrenheit(boilingC)}°F`);       // 212
console.log(`${freezingC}°C = ${celsiusToFahrenheit(freezingC)}°F`);     // 32
console.log(`${bodyTempC}°C = ${celsiusToFahrenheit(bodyTempC)}°F`);     // 98.6
console.log(`${negativeC}°C = ${celsiusToFahrenheit(negativeC)}°F`);     // -40

// --- Fahrenheit to Celsius ---
console.log("\n--- Fahrenheit → Celsius ---");

const boilingF = 212;
const freezingF = 32;
const bodyTempF = 98.6;
const negativeF = -40;

console.log(`${boilingF}°F = ${fahrenheitToCelsius(boilingF)}°C`);       // 100
console.log(`${freezingF}°F = ${fahrenheitToCelsius(freezingF)}°C`);     // 0
console.log(`${bodyTempF}°F = ${fahrenheitToCelsius(bodyTempF)}°C`);     // 37
console.log(`${negativeF}°F = ${fahrenheitToCelsius(negativeF)}°C`);     // -40

// --- Input Validation (Stretch Goal) ---
console.log("\n--- 🛡️ Input Validation ---");
console.log(celsiusToFahrenheit("hello"));     // Error: invalid type (string)
console.log(celsiusToFahrenheit(undefined));    // Error: undefined
console.log(fahrenheitToCelsius(NaN));          // Error: NaN
console.log(fahrenheitToCelsius(Infinity));     // Error: Infinity
console.log(celsiusToFahrenheit(null));         // Error: null is not a number
console.log(fahrenheitToCelsius(true));         // Error: boolean is not a number

console.log("\n✅ Temperature Converter Complete!");
