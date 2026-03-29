// Math Object
//  JavaScript offers a built-in Math object to tackle more complex math challenges

// Math.random() - Return a random number between 0 (inclusive) and 1 (exclusive)
const randomNumber = Math.random();
console.log(randomNumber);

// Math.min() and Math.max() - Return the minimum or maximum value from a set of numbers
console.log(Math.min(6,48,5,9,9)); // 1
console.log(Math.max(6,48,5,9,9)); // 48

// Math.ceil() - Round a float up to the nearest int
console.log(Math.ceil(4.4)); // 5

// Math.floor() - Round a float up to the nearest int
console.log(Math.floor(4.8)); // 4

// Math.round() - Round a float up or down depending on decilmal point
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

// Math.abs() - Return the absolute (positive) value of a number
console.log(Math.abs(-7.25)); // 7.25

// Math.pow() - Return the value of a number raised to a power
console.log(Math.pow(4, 3)); // 64 (4x4x4, same of 4 ** 3)

// Math.trunc() - Remove the decimal part of a float, returning only the integer part
console.log(Math.trunc(4.9)); // 4 (same of parseInt(number) and number.toFixed(0))

// ALGORITHMS --------------------------------------------------------------

// Geranting a Random Integer Between Two Values
const min = 50;
const max = 100;
const randomNumberBetween50And100 = 
    Math.floor(
        Math.random() * // Generate random float from 0 to 0.999...9
        (max - min + 1) // Get the range size (51 is this case)
    )                   // Convert to integer from 0 to 50 (examples: 0.55 * (100 - 50 + 1) = 27.55 -> 27)
     + min;             // Elevate to desired range (50 to 100) -> 27 + 50 = 77
console.log(randomNumberBetween50And100);