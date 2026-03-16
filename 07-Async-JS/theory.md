# Module 7: Asynchronous JavaScript

## 1. The Event Loop
JavaScript is single-threaded. It uses the **Call Stack**, **Task Queue** (Macrotasks), and **Microtask Queue** (Promises) to manage async operations.
- **Order**: Sync code -> Microtasks (Promises) -> Macrotasks (setTimeout).

## 2. Callbacks (The Old Way)
Passing a function to be executed later. Leads to "Callback Hell" (nested callbacks).

## 3. Promises
Objects representing the eventual completion (or failure) of an async operation.
- States: `Pending`, `Fulfilled`, `Rejected`.
- Methods: `.then()`, `.catch()`, `.finally()`.
- Static: `Promise.all()`, `Promise.race()`, `Promise.allSettled()`.

## 4. Async / Await (ES8)
Syntactic sugar over Promises. Makes async code look synchronous.
```javascript
async function getData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
    } catch (err) {
        console.error(err);
    }
}
```

## 5. Advanced Async
- **AbortController**: Used to cancel fetch requests or other async tasks.
  ```javascript
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  controller.abort(); // Cancels the fetch
  ```
- **Web Workers**: Threads running in the background, separate from the main thread.
  ```javascript
  const worker = new Worker('worker.js');
  worker.postMessage('hello');
  ```
