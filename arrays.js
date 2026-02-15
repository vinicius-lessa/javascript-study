// ARRAY Objects in JavaScript
//  An array is a special variable that can hold more than one value. It is a data structure that can store a collection of items.
//  Important: There are NO associative arrays in JavaScript. For associative arrays, use objects. Arrays use numbered indexes. Objects use named indexes.

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Array.push() - add 1 or more elements to the end of an array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

fruits.push('Elderberry', 'Fig');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig']

// Array.forEach() - executes a provided function once for each array element
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`); // Output: "0: Apple", "1: Banana", "2: Cherry", etc.
});

// Array.map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ['APPLE', 'BANANA', 'CHERRY', 'DATE', 'ELDERBERRY', 'FIG']

// Array.join() - joins all elements of an array into a string
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: "Apple, Banana, Cherry, Date, Elderberry, Fig"

// Array.filter() - creates a new array with all elements that pass the test implemented by the provided function
let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits); // Output: ['Banana', 'Cherry', 'Elderberry']

// Array.reduce() - executes a reducer function on each element of the array, resulting in a single output value
let squareFeetRooms = [10, 12, 15, 20];
let totalLength = squareFeetRooms.reduce((total, length) => total + length);
console.log(totalLength); // Output: 57 sq ft