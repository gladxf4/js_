// --- 1. Declaration vs Expression ---
console.log("--- Hoisting ---");
console.log(declaredFn()); // Works!
// console.log(expressionFn()); // Error: Cannot access before initialization

function declaredFn() { return "I am hoisted"; }
const expressionFn = function () { return "I am NOT hoisted"; };

// --- 2. Arrow Functions ---
console.log("\n--- Arrow Functions ---");
const square = x => x * x; // Implicit return
const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
};
console.log(`Square of 5: ${square(5)}`);

// --- 3. IIFE (Immediately Invoked Function Expression) ---
console.log("\n--- IIFE ---");
(function () {
    const secret = "Super Secret Code";
    console.log("Inside IIFE: " + secret);
})();
// console.log(secret); // Error: secret is not defined

// --- 4. Default & Rest Parameters ---
console.log("\n--- Parameters ---");
function createUser(name = "Guest", ...hobbies) {
    console.log(`User: ${name}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

createUser("Alice", "Reading", "Coding", "Hiking");
createUser(); // Uses default name
