# Module 14: Functional Programming

## 1. Pure Functions
- **Deterministic**: Always returns the same output for the same input.
- **No Side Effects**: Doesn't modify external state (DOM, global variables).

## 2. Immutability
Data should not be changed after it's created. Instead, create new copies.
- Use `const` (limited).
- Use `...` spread or libraries like Immutable.js.

## 3. Higher-Order Functions (HOF)
Functions that take other functions as arguments or return them.
- `map`, `filter`, `reduce`.

## 4. Composition & Currying
- **Composition**: Combining simple functions to build complex ones. `f(g(x))`.
- **Currying**: Transforming `f(a, b, c)` into `f(a)(b)(c)`.

## 5. Memoization
Caching the result of expensive function calls based on inputs.
