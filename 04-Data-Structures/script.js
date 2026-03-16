// --- 1. Array Methods ---
console.log("--- Arrays ---");
const numbers = [1, 2, 3, 4, 5];

// Map: Transform
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Filter: Select
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// Reduce: Aggregate
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);

// --- 2. Objects & Destructuring ---
console.log("\n--- Objects ---");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: { city: "New York" }
};

const { firstName, address: { city } } = person;
console.log(`${firstName} lives in ${city}`);

// --- 3. Set (Unique Values) ---
console.log("\n--- Sets ---");
const rawData = [1, 2, 2, 3, 3, 3, 4];
const uniqueData = [...new Set(rawData)];
console.log("Unique:", uniqueData);

// --- 4. WeakMap (Memory Management) ---
console.log("\n--- WeakMap ---");
let user = { name: "Teacher" };
const secretData = new WeakMap();

secretData.set(user, "Super Secret API Key");

console.log(secretData.get(user));

user = null; // The object is now eligible for GC, and the WeakMap entry will be removed auto-magically.
// (We can't prove this with code as WeakMap is not iterable)
