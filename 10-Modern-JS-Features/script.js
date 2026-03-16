// --- 1. Destructuring & Spread ---
console.log("--- Destructuring & Spread ---");
const defaults = { theme: "dark", fontSize: 12 };
const userSettings = { fontSize: 14 };

// Merge settings (Spread)
const finalConfig = { ...defaults, ...userSettings };
console.log("Config:", finalConfig);

// Swap variables (Destructuring)
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`Swapped: a=${a}, b=${b}`);

// --- 2. Optional Chaining ---
console.log("\n--- Optional Chaining ---");
const user = { name: "Alice" };
// console.log(user.address.street); // Error: Cannot read properties of undefined
console.log(user.address?.street);   // undefined (no error)

// --- 3. Nullish Coalescing (??) vs OR (||) ---
console.log("\n--- ?? vs || ---");
const emptyText = "";
const zero = 0;

console.log(emptyText || "Default"); // "Default" (OR sees "" as falsy)
console.log(emptyText ?? "Default"); // "" (Nullish sees "" as defined)

console.log(zero || 100); // 100
console.log(zero ?? 100); // 0
