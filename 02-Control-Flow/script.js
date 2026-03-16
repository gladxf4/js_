// --- 1. Ternary Operator ---
console.log("--- Ternary ---");
let userType = "admin";
let access = userType === "admin" ? "Full Access" : "Restricted";
console.log(`User: ${userType}, Access: ${access}`);

// --- 2. Switch vs Object Lookup ---
console.log("\n--- Switch ---");
let fruit = "papaya";

switch (fruit) {
    case "orange":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "mango":
    case "papaya": // Fallthrough
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + fruit + ".");
}

// --- 3. Loops and Break/Continue ---
console.log("\n--- Loops ---");
console.log("Even numbers skipping 4:");
for (let i = 0; i <= 6; i++) {
    if (i === 4) continue; // Skip 4
    if (i % 2 === 0) console.log(i);
}

// --- 4. Logic Puzzle: FizzBuzz ---
// Print numbers 1-15. 
// If div by 3, print "Fizz". 
// If div by 5, print "Buzz". 
// If div by 3 AND 5, print "FizzBuzz".
console.log("\n--- FizzBuzz (Partial) ---");
for (let i = 1; i <= 5; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    // Truthy check on string "output"
    // If output is "", it's falsy, so we print the number 'i'
    console.log(output || i);
}
