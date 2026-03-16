# Module 10: Modern JS Features

## 1. Destructuring
Unpacking values from arrays or properties from objects into distinct variables.
```javascript
const [x, y] = [1, 2];
const { name } = person;
```

## 2. Spread & Rest (`...`)
- **Spread**: Expands an iterable into elements. `[...arr, 4]` or `{...obj, newProp: 1}`.
- **Rest**: Collects multiple elements into an array. `function(...args) {}`.

## 3. Optional Chaining (`?.`)
Safely access nested properties. If the reference is `null` or `undefined`, expression short-circuits to `undefined`.
```javascript
const city = user?.address?.city;
```

## 4. Nullish Coalescing (`??`)
Returns the right-hand side operand when the left-hand side is `null` or `undefined` (unlike `||` which checks for falsy).
```javascript
const count = savedCount ?? 1; // 0 is preserved!
```

## 5. Symbols
Unique and immutable primitive values, often used as object keys to avoid name collisions.
```javascript
const id = Symbol('id');
obj[id] = 123;
```
