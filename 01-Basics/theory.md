# Module 1: The Basics (Foundations)

## 1. Variables
In modern JavaScript, we use three keywords to declare variables: `var`, `let`, and `const`.

- **`var`**: Function-scoped, can be re-declared and updated. (Legacy, avoid using).
- **`let`**: Block-scoped, can be updated but not re-declared in the same scope.
- **`const`**: Block-scoped, cannot be updated or re-declared. Must be initialized during declaration.

```javascript
var oldWay = "I am old";
let newWay = "I can change";
const steady = "I stay the same";
```

## 2. Data Types
JavaScript has 8 standard data types:
1.  **String**: Text data (`"Hello"`, `'World'`, `` `Backticks` ``).
2.  **Number**: Integers and floating-point numbers (`42`, `3.14`).
3.  **BigInt**: Integers larger than `2^53 - 1` (`9007199254740991n`).
4.  **Boolean**: logical values (`true`, `false`).
5.  **Undefined**: A variable that has not been assigned a value.
6.  **Null**: Represents "nothing" or "empty" value (intentionally).
7.  **Symbol**: Unique identifiers (used in advanced object handling).
8.  **Object**: Complex data structures.

## 3. Type Coercion
JavaScript is "weakly typed," meaning it tries to convert types automatically when operations involve different types.

- **Implicit Coercion**: JS does it for you.
  ```javascript
  "5" + 2  // "52" (String concatenation wins)
  "5" - 2  // 3 (String converted to Number)
  ```
- **Explicit Coercion**: You do it manually.
  ```javascript
  Number("5") // 5
  String(123) // "123"
  Boolean(1)  // true
  ```

## 4. Truthy & Falsy
When a non-boolean value is used in a boolean context (like an `if` statement), it's converted to `true` or `false`.

**Falsy Values (There are only 6 + document.all):**
1.  `false`
2.  `0` (and `-0`)
3.  `""` (Empty string)
4.  `null`
5.  `undefined`
6.  `NaN` (Not a Number)

**Truthy Values:**
Everything else! Examples: `"0"`, `"false"`, `[]`, `{}` are all truthy.

## 5. `typeof` vs `instanceof`
- **`typeof`**: Returns a string indicating the primitive type.
  - Bug: `typeof null` returns `"object"` (historical bug).
  - `typeof []` returns `"object"`.
- **`instanceof`**: Checks if an object is an instance of a specific class/constructor.
  - `[] instanceof Array` is `true`.
