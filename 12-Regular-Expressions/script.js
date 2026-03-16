// --- 1. Basic Test ---
console.log("--- Basic Regex ---");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("valid@email.com:", emailRegex.test("valid@email.com"));
console.log("invalid-email:", emailRegex.test("invalid-email"));

// --- 2. String Methods with Regex ---
console.log("\n--- Replace & Match ---");
const text = "The rain in SPAIN stays mainly in the plain";

// Case insensitive match
const matches = text.match(/ain/gi);
console.log("Matches:", matches);

// Replace with group usage
// Swap first and last name
const name = "Doe, John";
const swapped = name.replace(/(\w+), (\w+)/, "$2 $1");
console.log(swapped); // "John Doe"

// --- 3. Lookahead ---
console.log("\n--- Lookahead ---");
// Match "Turkey" only if followed by "Price"
const input = "TurkeyPrice: 100, ChickenPrice: 50";
const regex = /Turkey(?=Price)/;
console.log("Found:", input.match(regex)[0]);
