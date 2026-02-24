// ============================================
// ⚖️ Simple BMI Calculator
// Day 1 – Variables, Data Types, Operators
// ============================================

// --- Concepts Used ---
// ✅ let vs const
// ✅ primitive types (number, string, boolean)
// ✅ arithmetic operators (*, /, **)
// ✅ comparison operators (>=, <=, <, >)
// ✅ input validation

/**
 * Validates that the input is a positive finite number.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if valid positive number, false otherwise.
 */
const isValidPositiveNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value) && value > 0;
};

/**
 * Returns the BMI category based on WHO classification.
 * @param {number} bmi - The BMI value.
 * @returns {string} - The BMI category.
 */
const getBMICategory = (bmi) => {
  if (bmi < 16) return "Severely Underweight";
  if (bmi >= 16 && bmi < 17) return "Moderately Underweight";
  if (bmi >= 17 && bmi < 18.5) return "Mildly Underweight";
  if (bmi >= 18.5 && bmi < 25) return "Normal (Healthy Weight)";
  if (bmi >= 25 && bmi < 30) return "Overweight";
  if (bmi >= 30 && bmi < 35) return "Obese Class I";
  if (bmi >= 35 && bmi < 40) return "Obese Class II";
  return "Obese Class III (Severe)";
};

/**
 * Calculates BMI from weight (kg) and height (m).
 * Formula: BMI = weight (kg) / height² (m²)
 * @param {number} weightKg - Weight in kilograms.
 * @param {number} heightM - Height in meters.
 * @returns {object|string} - BMI result object or error message.
 */
const calculateBMI = (weightKg, heightM) => {
  // --- Input Validation (Stretch Goal) ---
  if (!isValidPositiveNumber(weightKg)) {
    return "❌ Error: Weight must be a valid positive number (in kg).";
  }
  if (!isValidPositiveNumber(heightM)) {
    return "❌ Error: Height must be a valid positive number (in meters).";
  }

  // Additional sanity checks
  if (weightKg > 700) {
    return "❌ Error: Weight seems unrealistic. Please check the value.";
  }
  if (heightM > 3) {
    return "❌ Error: Height seems unrealistic. Please check the value (in meters, not cm).";
  }

  const bmi = weightKg / (heightM ** 2); // using exponentiation operator (**)
  const category = getBMICategory(bmi);

  return {
    weight: weightKg,
    height: heightM,
    bmi: parseFloat(bmi.toFixed(2)),  // round to 2 decimal places
    category: category,
  };
};

/**
 * Calculates BMI from weight (lbs) and height (inches) — imperial units.
 * Formula: BMI = (weight (lbs) × 703) / height² (in²)
 * @param {number} weightLbs - Weight in pounds.
 * @param {number} heightIn - Height in inches.
 * @returns {object|string} - BMI result object or error message.
 */
const calculateBMIImperial = (weightLbs, heightIn) => {
  if (!isValidPositiveNumber(weightLbs)) {
    return "❌ Error: Weight must be a valid positive number (in lbs).";
  }
  if (!isValidPositiveNumber(heightIn)) {
    return "❌ Error: Height must be a valid positive number (in inches).";
  }

  const bmi = (weightLbs * 703) / (heightIn ** 2);
  const category = getBMICategory(bmi);

  return {
    weight: weightLbs,
    height: heightIn,
    unit: "imperial",
    bmi: parseFloat(bmi.toFixed(2)),
    category: category,
  };
};

// ============================================
// 🧪 Test Cases
// ============================================

console.log("=== ⚖️ BMI Calculator ===\n");

// --- Metric System Tests ---
console.log("--- Metric (kg / m) ---");

let result1 = calculateBMI(70, 1.75);
console.log(`Weight: ${result1.weight}kg, Height: ${result1.height}m → BMI: ${result1.bmi} (${result1.category})`);

let result2 = calculateBMI(50, 1.60);
console.log(`Weight: ${result2.weight}kg, Height: ${result2.height}m → BMI: ${result2.bmi} (${result2.category})`);

let result3 = calculateBMI(110, 1.80);
console.log(`Weight: ${result3.weight}kg, Height: ${result3.height}m → BMI: ${result3.bmi} (${result3.category})`);

let result4 = calculateBMI(45, 1.70);
console.log(`Weight: ${result4.weight}kg, Height: ${result4.height}m → BMI: ${result4.bmi} (${result4.category})`);

// --- Imperial System Tests ---
console.log("\n--- Imperial (lbs / inches) ---");

let result5 = calculateBMIImperial(154, 69);
console.log(`Weight: ${result5.weight}lbs, Height: ${result5.height}in → BMI: ${result5.bmi} (${result5.category})`);

let result6 = calculateBMIImperial(200, 72);
console.log(`Weight: ${result6.weight}lbs, Height: ${result6.height}in → BMI: ${result6.bmi} (${result6.category})`);

// --- Input Validation (Stretch Goal) ---
console.log("\n--- 🛡️ Input Validation ---");
console.log(calculateBMI("seventy", 1.75));      // Error: string input
console.log(calculateBMI(70, 0));                 // Error: zero height
console.log(calculateBMI(-70, 1.75));             // Error: negative weight
console.log(calculateBMI(70, -1.75));             // Error: negative height
console.log(calculateBMI(NaN, 1.75));             // Error: NaN
console.log(calculateBMI(70, Infinity));          // Error: Infinity
console.log(calculateBMI(undefined, 1.75));       // Error: undefined
console.log(calculateBMI(70, null));              // Error: null
console.log(calculateBMI(800, 1.75));             // Error: unrealistic weight
console.log(calculateBMI(70, 175));               // Error: height in cm, not meters

console.log("\n✅ BMI Calculator Complete!");
