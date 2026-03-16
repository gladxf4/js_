// --- 1. Module Syntax (ESM) ---
console.log("--- ES Modules ---");
/*
// math.js
export const add = (a, b) => a + b;
export default function subtract(a, b) { return a - b; }

// main.js
import subtract, { add } from './math.js';
console.log(add(1, 2));
*/

// --- 2. Dynamic Import ---
console.log("\n--- Dynamic Import Simulation ---");
async function loadComponent() {
    if (true /* condition */) {
        // Real usage: const module = await import('./heavyScript.js');
        // module.doSomething();
        console.log("Module loaded dynamically!");
    }
}
loadComponent();

// --- 3. CommonJS (Node.js) ---
/*
// math.js
module.exports = {
    add: (a, b) => a + b
};

// app.js
const { add } = require('./math');
*/
