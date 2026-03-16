// --- 1. Variables ---
console.log("--- Variables ---");
// var old = "I'm function scoped"; // Avoid using var
let age = 25;
const name = "Alice";

age = 26; // This is allowed
// name = "Bob"; // TypeError: Assignment to constant variable.

console.log(`Name: ${name}, Age: ${age}`);

// --- 2. Data Types ---
console.log("\n--- Data Types ---");
let str = "Hello";       // String
let num = 3.14;          // Number
let big = 123456789n;    // BigInt
let bool = true;         // Boolean
let undef;               // Undefined
let nothing = null;      // Null

console.log("Type of null (historical bug):", typeof null); // "object"
console.log("Type of array:", typeof []); // "object" 

// --- 3. Coercion ---
console.log("\n--- Coercion 'Gotchas' ---");
console.log('1 + "1" =', 1 + "1");       // "11" (Concatenation)
console.log('1 - "1" =', 1 - "1");       // 0    (Math)
console.log('[] + [] =', [] + []);       // ""   (Empty strings)
console.log('[] + {} =', [] + {});       // "[object Object]"
console.log('{} + [] =', {} + []);       // 0 (In some consoles/contexts, interpreted as code block + array coercion)

// --- 4. Truthy/Falsy ---
console.log("\n--- Truthy check ---");
const values = [0, "0", null, undefined, [], {}];

values.forEach(val => {
    if (val) {
        console.log(`Value: ${String(val)} \t is TRUTHY`);
    } else {
        console.log(`Value: ${String(val)} \t is FALSY`);
    }
});
