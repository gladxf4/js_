# Module 11: Iterators & Generators

## 1. Iterables & `for...of`
Objects implementing the `Symbol.iterator` method can be looped over using `for...of`.
Arrays, Strings, Maps, and Sets are built-in iterables.

## 2. Generators (`function*`)
Functions that can vary their execution state (pause and resume).
- Use `function*` syntax.
- `yield` keyword pauses execution and returns a value.
- `.next()` resumes execution.

```javascript
function* idMaker() {
    let index = 0;
    while(true)
        yield index++;
}
```

## 3. Async Iterators
Iterate over async data streams using `for await...of`.
```javascript
for await (const chunk of stream) {
    // ...
}
```
