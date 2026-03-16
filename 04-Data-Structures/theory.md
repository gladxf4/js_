# Module 4: Data Structures

## 1. Arrays
Ordered collections of data.
- **Methods**: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`.
- **Iteration**: `forEach`, `map`, `filter`, `reduce`.

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Orange"); // Add to end
```

## 2. Objects
Key-value pairs.
- **Access**: Dot notation (`obj.key`) or Bracket notation (`obj['key']`).
- **Destructuring**: Extracting values.
  ```javascript
  const { name, age } = user;
  ```

## 3. Maps & Sets (ES6)

### Map
Key-value pairs where keys can be **any type** (objects, functions, etc.). Remembers insertion order.
```javascript
const map = new Map();
map.set('key', 'value');
map.get('key');
```

### Set
Collection of **unique** values.
```javascript
const set = new Set([1, 2, 2, 3]); // {1, 2, 3}
```

## 4. WeakMap, WeakSet, WeakRef (Advanced)
- **WeakMap / WeakSet**: Keys must be objects. They are "weakly" held, meaning if there are no other references to the object, it can be garbage collected. Not iterable.
- **WeakRef**: A weak reference to an object that allows it to be garbage collected.

These are used for memory optimization (e.g., caching, associating data with DOM nodes).
