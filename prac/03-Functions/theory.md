# Module 3: Functions

## 1. Defining Functions

### Function Declaration
Hoisted! Can be called before definition.
```javascript
function sayHello() {
  return "Hello";
}
```

### Function Expression
Not hoisted. Assigned to a variable.
```javascript
const sayHi = function() {
  return "Hi";
};
```

### Arrow Function (ES6)
Concise syntax. **Lexical `this`** (doesn't have its own `this`).
```javascript
const add = (a, b) => a + b; // Implicit return
const multiply = (a, b) => {
    return a * b; // Explicit return required with braces
};
```

## 2. Advanced Concepts

### IIFE (Immediately Invoked Function Expression)
Runs as soon as it is defined. Useful for creating private scope.
```javascript
(function() {
    console.log("I run immediately!");
})();
```

### Default Parameters
```javascript
function greet(name = "Guest") {
    // ...
}
```

### Rest Parameters
Collects all remaining arguments into an array.
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

## 3. Scope
- **Global Scope**: Accessible everywhere.
- **Function Scope**: Accessible only within the function (`var` respects this).
- **Block Scope**: Accessible only within the block `{}` (`let`, `const`).
