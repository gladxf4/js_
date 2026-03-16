# Module 16: Testing

## 1. Why Test?
- **Reliability**: Catch bugs before deployment.
- **Refactoring**: Change code confidently.
- **Documentation**: Tests show how code is expected to behave.

## 2. Types of Tests
- **Unit**: Test a single function/component in isolation.
- **Integration**: Test how multiple units work together.
- **E2E (End-to-End)**: Test the full application flow (like a user).

## 3. Jest / Vitest Basics
Common frameworks.
- `describe()`: Groups related tests.
- `it()` or `test()`: Defines a test case.
- `expect()`: Assertions.

```javascript
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

## 4. TDD (Test Driven Development)
Write the test **before** the code (Red -> Green -> Refactor).
1. Write a failing test.
2. Write minimum code to pass.
3. Refactor.
