// String Primitive/Object -------------------------------------------------------------

let str = "Hello, World!";    
let objString = new String("Hello, Object World!");
// console.log("String Primitive:", str);
// console.log("String Object:", objString);


// Template Literal ----------------------------------------------------------------------
//  defined with backticks (`)

const greeting1 = `Hello, Alice!`;

// String Interpolation
//  Embed variables and expressions inside a string
const firstName = "Alice";
const greeting2 = `Hello, ${firstName}!`; // output: "Hello, Alice!"


// Escape Sequence ---------------------------------------------------------------------
//  These are special characters to use inside a string - Common Escape Sequences:
// `\n` - Break the line
// `\t` - Insert a Tab spacing

const exampleString = "This is a line.\nThis is a new line.\n\tThis line is indented.";
console.log(exampleString);


// Concatenation -----------------------------------------------------------------------

let userFirstName = "John";
let lastName = "Pork";
let $fullName;

$fullName = userFirstName + " " + lastName;
console.log("Full Name with Concatenation:", $fullName); // John Pork

$fullName = userFirstName += " " + lastName;
console.log("Full Name after += :", $fullName); // John Pork

$fullName = `${userFirstName} ${lastName}`;
console.log("Full Name with Template Literal:", $fullName); // John Pork

$fullName = userFirstName.concat(" ", lastName);
console.log("Full Name with concat() method:", $fullName); // John Pork

// String Methods ----------------------------------------------------------------------

const fullName = "Vinícius Lessa da Silva";
const needle = "Lessa";

//  indexOf() - Search for a substring inside a large one, then return its index or -1
const foundIndex = fullName.indexOf(needle); // 9
const notFoundIndex = fullName.indexOf("vinícius"); // -1 (not found, case sensitive)

//  includes() - Bool whether a substring exists inside a string
const hasNeedle = fullName.includes(needle); // true

//  slice() - Extract a part of a string and return it as a new string
const firstPart = fullName.slice(0, 8);  // "Vinícius"
const lastPart = fullName.slice(9);      // "Lessa da Silva"
const lastNamePart = fullName.slice(-5); // "Silva"

//  toUpperCase() / toLowerCase() - Change the case of a string
const upper = fullName.toUpperCase(); // "VINÍCIUS LESSA DA SILVA"
const lower = fullName.toLowerCase(); // "vinícius lessa da silva"

//  trim() - Remove whitespace from both ends of a string
let greeting = "   Hello, World!   ";
const trimmedGreeting = greeting.trim(); // "Hello, World!"

//  replace() / replaceAll() - Replace a substring with another one
const newFullName = fullName.replace("Lessa", "Souza"); // "Vinícius Souza da Silva"
const newFullNameAll = fullName.replaceAll("a", "o"); // "Vinícius Lesso do Silvo"

//  repeat() - Repeat a string multiple times
const laugh = "Ha".repeat(3); // "HaHaHa"

//  split() - Split a string into an array of substrings based on a delimiter
// const nameParts = fullName.split(" "); // ["Vinícius", "Lessa", "da", "Silva"]

//  charCodeAt() - Get the Unicode value of a character at a specific index
const charCode = fullName.charCodeAt(0); // 86 (Unicode for 'V')

//  fromCharCode() - Create a string from Unicode values
const charFromCode = String.fromCharCode(72, 105, 33); // "Hi!"