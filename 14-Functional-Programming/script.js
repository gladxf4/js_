// --- 1. Pure Functions & Immutability ---
console.log("--- Pure Functions ---");
const add = (a, b) => a + b; // Pure
let count = 0;
const incrementImpure = () => ++count; // Impure (modifies external state)

const obj = { val: 1 };
const updateObj = (o) => ({ ...o, val: o.val + 1 }); // Immutable update
console.log(updateObj(obj)); // { val: 2 }
console.log(obj); // { val: 1 } (Original untouched)

// --- 2. Higher-Order Functions ---
console.log("\n--- HOF ---");
const twice = (f, v) => f(f(v));
const square = x => x * x;
console.log(twice(square, 2)); // square(square(2)) = 16

// --- 3. Currying ---
console.log("\n--- Currying ---");
const multiply = a => b => a * b;
const double = multiply(2); // Partially applied
console.log(double(5)); // 10

// --- 4. Composition (Pipe) ---
console.log("\n--- Composition ---");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const addOne = x => x + 1;
const doubleIt = x => x * 2;

const addOneThenDouble = pipe(addOne, doubleIt);
console.log(addOneThenDouble(5)); // (5 + 1) * 2 = 12
