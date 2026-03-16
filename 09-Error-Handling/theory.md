# Module 9: Error Handling

## 1. Try / Catch / Finally
Handle runtime errors gracefully.
```javascript
try {
    // Risky code
    throw new Error("Oops!");
} catch (err) {
    // Handle error
    console.error(err.message);
} finally {
    // Always runs (cleanup)
    console.log("Cleanup");
}
```

## 2. Throwing Errors
You can throw any value, but it's best to throw `Error` objects (stack trace).
```javascript
throw new TypeError("Must be a string");
throw "String error"; // Bad practice
```

## 3. Custom Error Classes
Extend the built-in `Error` class for specific domain errors.
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
```

## 4. Error Propagation
Errors bubble up the call stack unless caught. In async code (Promises), use `.catch()` or `try/catch` in async functions.
