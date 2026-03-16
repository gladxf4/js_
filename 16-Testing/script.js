// --- 1. A Simple Test Runner (Simulation) ---
console.log("--- Simple Test Runner ---");

function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log("✅ PASS");
            } else {
                console.error(`❌ FAIL: Expected ${expected}, got ${actual}`);
            }
        },
        toThrow() {
            try {
                actual();
            } catch (e) {
                console.log("✅ PASS (Threw error as expected)");
                return;
            }
            console.error("❌ FAIL: Did not throw");
        }
    };
}

function test(description, callback) {
    console.log(`Running: ${description}`);
    try {
        callback();
    } catch (e) {
        console.error(`❌ ERROR: ${e.message}`);
    }
}

// --- 2. Code to Test ---
const add = (a, b) => a + b;
const divide = (a, b) => {
    if (b === 0) throw new Error("ZeroDivision");
    return a / b;
};

// --- 3. Writing Tests ---
test("Add function adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("Add function works with negatives", () => {
    expect(add(-1, 1)).toBe(0);
});

test("Divide throws on zero", () => {
    expect(() => divide(10, 0)).toThrow();
});
