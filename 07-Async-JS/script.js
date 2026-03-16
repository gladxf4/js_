// --- 1. Promises ---
console.log("--- Promises ---");
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        success ? resolve("Operation Successful") : reject("Operation Failed");
    }, 1000);
});

myPromise
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

// --- 2. Async / Await ---
console.log("\n--- Async/Await ---");
async function fetchData() {
    console.log("Fetching...");
    try {
        // Simulating fetch
        const result = await new Promise(r => setTimeout(() => r("Data Loaded"), 1500));
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}
fetchData();

// --- 3. AbortController (Simulation) ---
console.log("\n--- AbortController ---");
const controller = new AbortController();
const signal = controller.signal;

// Simulate a cancelable async task
const cancelableTask = new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve("Task Complete"), 3000);

    signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new Error("Aborted!"));
    });
});

cancelableTask
    .then(console.log)
    .catch(console.warn);

setTimeout(() => {
    console.log("Aborting task...");
    controller.abort();
}, 500); // 0.5s < 3s, so it will abort

// --- 4. Event Loop Check ---
console.log("\n--- Event Loop Order ---");
console.log("Start");
setTimeout(() => console.log("Timeout (Macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise (Microtask)"));
console.log("End");
// Output: Start, End, Promise, Timeout
