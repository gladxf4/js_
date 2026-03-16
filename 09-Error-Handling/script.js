// --- 1. Basic Try/Catch ---
console.log("--- Try/Catch ---");
try {
    const json = '{ "malformed json" }';
    JSON.parse(json);
} catch (err) {
    console.error("Caught error:", err.message); // Unexpected token...
} finally {
    console.log("This always runs.");
}

// --- 2. Custom Errors ---
console.log("\n--- Custom Errors ---");
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

function connectToDB() {
    throw new DatabaseError("Connection failed");
}

try {
    connectToDB();
} catch (err) {
    if (err instanceof DatabaseError) {
        console.error("DB Alert:", err.message);
    } else {
        console.error("Unknown Error:", err);
    }
}

// --- 3. Validation Example ---
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (e) {
    console.error(e.message);
}
