# Module 8: Modern OOP

## 1. Classes (ES6)
Syntactic sugar over prototype-based inheritance.
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
```

## 2. Inheritance
Using `extends` and `super`.
```javascript
class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
}
```

## 3. Private Fields (#)
Truly private properties, accessible only within the class.
```javascript
class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        this.#balance += amount;
    }
}
```

## 4. Static Methods
Methods belonging to the class itself, not instances.
```javascript
class MathUtil {
    static add(a, b) { return a + b; }
}
MathUtil.add(1, 2);
```

## 5. Mixins (Pattern)
JavaScript does not support multiple inheritance. Mixins allow copying methods from one object/class to another.
```javascript
const SayHiMixin = {
    sayHi() { console.log(`Hi ${this.name}`); }
};
Object.assign(User.prototype, SayHiMixin);
```
