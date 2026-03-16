# Module 6: Advanced Concepts

## 1. Execution Context & Call Stack
- **Call Stack**: LIFO (Last In, First Out) structure tracking function calls.
- **Execution Context**: The environment where JS code runs (Global, Function).

## 2. Hoisting
Moving declarations to the top of their scope.
- `var` is hoisted and initialized with `undefined`.
- `let`/`const` are hoisted but stay in the **Temporal Dead Zone (TDZ)** until the line of code is reached.
- Function declarations are fully hoisted.

## 3. Scope & Closures
- **Closure**: A function bundled with its lexical environment. A function remembers variables from its outer scope even after that scope has finished executing.

```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++; // Closure on 'count'
        return count;
    };
}
```

## 4. `this` Keyword
Depends on **how** the function is called.
- Global: `window` (or `global` in Node).
- Method: Object before the dot.
- Arrow Function: Inherits `this` from surrounding scope.
- Explicit Binding: `call`, `apply`, `bind`.

## 5. Memory Management & Garbage Collection
- **Reachability**: Objects are kept if they are reachable from the root (Global).
- **Mark-and-Sweep**: The GC algorithm. It marks reachable objects and sweeps (deletes) unreachable ones.
- **Memory Leaks**: Global variables, uncleared timers, closures holding too much data, detached DOM nodes.
