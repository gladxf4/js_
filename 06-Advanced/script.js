// --- 1. Closure ---
console.log("--- Closure ---");
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2
// count is inaccessible directly!

// --- 2. 'this' and Binding ---
console.log("\n--- 'this' Keyword ---");
const person = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};

const friend = { name: "Bob" };

// Method call
person.greet(); // "Alice"

// Call / Apply
person.greet.call(friend); // "Bob"

// Bind
const greetBob = person.greet.bind(friend);
greetBob(); // "Bob"

// --- 3. Hoisting Example ---
console.log("\n--- Hoisting ---");
console.log(hoistedFunc()); // Works
// console.log(hoistedVar); // undefined (not error)

function hoistedFunc() { return "I am hoisted!"; }
var hoistedVar = "I am defined late";
