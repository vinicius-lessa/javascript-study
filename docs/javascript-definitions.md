# JavaScript Definitions

## STRINGS

### Escape Sequence
These are special characters to use inside a string. Exemples:
- `\n` - Break the line
- `\t` - Insert a Tab spacing

### Escape Character
Allow to use special/reserved characters inside a string without breaking it. Examples:
- `"Hello \"World\""`
- `'It\'s nice to meet you!`

### Template Literal
Unlike regular strings, which use single (') or double (") quotes, template literals are defined with backticks (`). They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as **string interpolation**. Example:
``` javascript
`Hello, Alice!`;
```

### String Interpolation
Allows you to embed variables and expressions inside a string
``` javascript
const name = "Alice";
const greeting = `Hello, ${name}!`; // output: "Hello, Alice!"
```

### Substring
It's a piece of a string inside a larger string. Example:
String - `Hello World`; <br>
Substring - `Hello`;


### Type Coercion
JavaScript type coercion is the automatic or implicit conversion of values from one data type to another during operations or comparisons. Examples:
``` javascript
console.log(5 + '10');      // Output: "510" (number 5 is coerced to string "5")
console.log('10' - 3);      // Output: 7 (string "10" is coerced to number 10)
console.log('5' * '2');     // Output: 10 (both strings coerced to numbers)
console.log(true + 1);      // Output: 2 (true is coerced to number 1)
console.log('10px' / 2);    // Output: NaN ("10px" cannot be converted to a valid number)
```

## NUMBERS / MATH

### Compound Operators
Compound operators, more commonly known as **compound assignment operators**, provide a shorthand way to perform an operation and then assign the result to the same variable. 

Instead of writing
``` javascript
 x = x + y;
```

You can use the addition assignment operator (+=) 
``` javascript
x += y;
```

+= (Addition assignment): x += y is equivalent to x = x + y.
-= (Subtraction assignment): x -= y is equivalent to x = x - y.
*= (Multiplication assignment): x *= y is equivalent to x = x * y.
/= (Division assignment): x /= y is equivalent to x = x / y.
%= (Remainder assignment): x %= y is equivalent to x = x % y.
**= (Exponentiation assignment): x **= y is equivalent to x = x ** y

<br>

## TERMS

### Anonymous Functions
A JavaScript anonymous function is a function that does not have an identifier (a name) associated with it.
They are primarily used in situations where a function is needed for a specific, short-term task and does not need to be reused elsewhere in the code.

#### KEY USE CASES

#### Assigned to Variables
``` javascript
const multiply = function (x, y) {
  return x * y;
};
greet(); // 'Hello world!'
```

#### Callbacks
``` javascript
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);
```

#### Immediately Invoked Function Expressions (IIFEs)
``` javascript
(function() {
  var privateVariable = "I'm private";
  console.log(privateVariable);
})();
```

#### Arrow Functions
``` javascript
const square = x => x * x;
// or for multiple lines/parameters
const sum = (a, b) => {
  return a + b;
};
```

``` shell
git config --global user.email "vinicius.lessa33@outlook.com"
```