# Module 2: Control Flow & Logic

## 1. Conditionals

### `if` / `else if` / `else`
Standard logic branching.
```javascript
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}
```

### Ternary Operator (`? :`)
Short for `if-else`.
```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

### `switch` Statement
Good for checking one variable against many values. Uses **strict equality** (`===`).
```javascript
switch(day) {
  case "Monday":
    console.log("Start of week");
    break; // Don't forget break!
  default:
    console.log("Ordinary day");
}
```

## 2. Loops

### `for` Loop
Standard loop with initializer, condition, and iterator.
```javascript
for (let i = 0; i < 5; i++) {
   console.log(i);
}
```

### `while` Loop
Runs while condition is true.
```javascript
while (condition) {
  // code
}
```

### `do...while` Loop
Runs **at least once** before checking condition.
```javascript
do {
  // runs once
} while (condition);
```

### `break` and `continue`
- **`break`**: Exits the loop entirely.
- **`continue`**: Skips the current iteration and goes to the next one.
