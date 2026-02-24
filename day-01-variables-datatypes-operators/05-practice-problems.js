// ============================================
// 🧩 Practice Problems – Day 1
// Variables, Data Types, Operators
// ============================================
// Try to solve each problem yourself before looking at the solution below.
// Each problem tests a specific concept from Day 1.

console.log("=== 🧩 Day 1 Practice Problems ===\n");

// ============================================
// Problem 1: Swap Two Variables (without temp)
// ============================================
console.log("--- Problem 1: Swap Two Variables ---");

let num1 = 10;
let num2 = 20;
console.log("Before swap:", num1, num2);

// Solution: Destructuring assignment (ES6)
[num1, num2] = [num2, num1];
console.log("After swap: ", num1, num2); // 20, 10

// Alternative: Arithmetic trick (without extra variable)
let p = 5, q = 8;
p = p + q;  // p = 13
q = p - q;  // q = 5
p = p - q;  // p = 8
console.log("Arithmetic swap:", p, q); // 8, 5

// ============================================
// Problem 2: Check Even or Odd
// ============================================
console.log("\n--- Problem 2: Even or Odd ---");

const checkEvenOdd = (num) => {
  if (typeof num !== "number" || isNaN(num)) return "Invalid input";
  if (!Number.isInteger(num)) return "Not an integer";
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log("4 →", checkEvenOdd(4));     // Even
console.log("7 →", checkEvenOdd(7));     // Odd
console.log("0 →", checkEvenOdd(0));     // Even
console.log("-3 →", checkEvenOdd(-3));   // Odd
console.log("3.5 →", checkEvenOdd(3.5)); // Not an integer
console.log("abc →", checkEvenOdd("abc")); // Invalid input

// ============================================
// Problem 3: Find the Largest of Three Numbers
// ============================================
console.log("\n--- Problem 3: Largest of Three ---");

const findLargest = (a, b, c) => {
  if ([a, b, c].some((n) => typeof n !== "number" || isNaN(n))) {
    return "All inputs must be valid numbers";
  }

  // Using Math.max
  return Math.max(a, b, c);
};

console.log("10, 25, 15 →", findLargest(10, 25, 15)); // 25
console.log("99, 42, 77 →", findLargest(99, 42, 77)); // 99
console.log("-1, -5, -3 →", findLargest(-1, -5, -3)); // -1
console.log("5, 5, 5 →", findLargest(5, 5, 5));       // 5

// ============================================
// Problem 4: Calculate Percentage
// ============================================
console.log("\n--- Problem 4: Calculate Percentage ---");

const calculatePercentage = (obtained, total) => {
  if (typeof obtained !== "number" || typeof total !== "number") return "Invalid input";
  if (total === 0) return "Total cannot be zero";
  if (obtained < 0 || total < 0) return "Values cannot be negative";

  const percentage = (obtained / total) * 100;
  return parseFloat(percentage.toFixed(2)) + "%";
};

console.log("85/100 →", calculatePercentage(85, 100));   // 85%
console.log("45/60 →", calculatePercentage(45, 60));     // 75%
console.log("7/30 →", calculatePercentage(7, 30));       // 23.33%
console.log("0/100 →", calculatePercentage(0, 100));     // 0%
console.log("50/0 →", calculatePercentage(50, 0));       // Error

// ============================================
// Problem 5: Simple Interest Calculator
// ============================================
console.log("\n--- Problem 5: Simple Interest ---");

const calculateSimpleInterest = (principal, rate, time) => {
  if ([principal, rate, time].some((v) => typeof v !== "number" || v < 0)) {
    return "All values must be positive numbers";
  }

  // Formula: SI = (P × R × T) / 100
  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  return {
    principal,
    rate: rate + "%",
    time: time + " years",
    interest: parseFloat(interest.toFixed(2)),
    totalAmount: parseFloat(totalAmount.toFixed(2)),
  };
};

console.log(calculateSimpleInterest(10000, 5, 3));
// { principal: 10000, rate: '5%', time: '3 years', interest: 1500, totalAmount: 11500 }

console.log(calculateSimpleInterest(50000, 8.5, 2));
// { principal: 50000, rate: '8.5%', time: '2 years', interest: 8500, totalAmount: 58500 }

// ============================================
// Problem 6: Age Calculator
// ============================================
console.log("\n--- Problem 6: Age Calculator ---");

const calculateAge = (birthYear) => {
  const currentYear = 2026;

  if (typeof birthYear !== "number" || !Number.isInteger(birthYear)) {
    return "Please enter a valid birth year";
  }
  if (birthYear > currentYear) return "Birth year cannot be in the future";
  if (birthYear < 1900) return "Birth year seems too old";

  const age = currentYear - birthYear;

  return {
    birthYear,
    currentYear,
    age,
    canVote: age >= 18,
    canDrive: age >= 16,
    isSenior: age >= 65,
  };
};

console.log(calculateAge(2001));
console.log(calculateAge(1960));
console.log(calculateAge(2015));

// ============================================
// Problem 7: Discount Price Calculator
// ============================================
console.log("\n--- Problem 7: Discount Calculator ---");

const calculateDiscount = (originalPrice, discountPercent) => {
  if (typeof originalPrice !== "number" || originalPrice <= 0) {
    return "Price must be a positive number";
  }
  if (typeof discountPercent !== "number" || discountPercent < 0 || discountPercent > 100) {
    return "Discount must be between 0 and 100";
  }

  const discountAmount = (originalPrice * discountPercent) / 100;
  const finalPrice = originalPrice - discountAmount;

  return {
    originalPrice: "৳" + originalPrice,
    discount: discountPercent + "%",
    saved: "৳" + parseFloat(discountAmount.toFixed(2)),
    finalPrice: "৳" + parseFloat(finalPrice.toFixed(2)),
  };
};

console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(4999, 15));
console.log(calculateDiscount(250, 50));

// ============================================
// Problem 8: Leap Year Checker
// ============================================
console.log("\n--- Problem 8: Leap Year Checker ---");

const isLeapYear = (year) => {
  if (typeof year !== "number" || !Number.isInteger(year) || year <= 0) {
    return "Please enter a valid positive year";
  }

  // Rules:
  // 1. Divisible by 4 → leap year
  // 2. BUT divisible by 100 → NOT leap year
  // 3. BUT divisible by 400 → IS leap year
  const leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  return `${year} is ${leap ? "a Leap Year ✅" : "NOT a Leap Year ❌"}`;
};

console.log(isLeapYear(2024));  // Leap
console.log(isLeapYear(2025));  // Not leap
console.log(isLeapYear(2000));  // Leap (divisible by 400)
console.log(isLeapYear(1900));  // Not leap (divisible by 100 but not 400)
console.log(isLeapYear(2026));  // Not leap

console.log("\n✅ All Practice Problems Complete!");
