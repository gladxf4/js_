// --- 1. Custom Iterator ---
console.log("--- Custom Iterator ---");
const range = {
    start: 1,
    end: 3,
    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;
        return {
            next() {
                if (current <= last) {
                    return { done: false, value: current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const num of range) {
    console.log(num);
}

// --- 2. Generators ---
console.log("\n--- Generator ---");
function* simpleGenerator() {
    yield "Start";
    yield "Middle";
    yield "End";
}

const gen = simpleGenerator();
console.log(gen.next().value); // Start
console.log(gen.next().value); // Middle
// We can also loop:
// for (const val of gen) console.log(val); // Prints "End" (cursor is there)

// --- 3. Infinite Generator ---
function* idGen() {
    let i = 0;
    while (true) yield i++;
}
const ids = idGen();
console.log("ID:", ids.next().value);
console.log("ID:", ids.next().value);
