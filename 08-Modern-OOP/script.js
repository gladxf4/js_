// --- 1. Classes & Inheritance ---
console.log("--- Classes ---");
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog("Mitzie");
d.speak();

// --- 2. Private Fields ---
console.log("\n--- Private Fields ---");
class Wallet {
    #balance = 0; // Private

    constructor(initial) {
        this.#balance = initial;
    }

    get balance() {
        return `You have $${this.#balance}`;
    }

    add(amount) {
        this.#balance += amount;
    }
}

const myWallet = new Wallet(100);
console.log(myWallet.balance);
myWallet.add(50);
console.log(myWallet.balance);
// console.log(myWallet.#balance); // Syntax Error: Private field '#balance' must be declared in an enclosing class

// --- 3. Static Methods ---
console.log("\n--- Static Methods ---");
class Config {
    static API_URL = "https://api.example.com";
    static printUrl() {
        console.log(this.API_URL);
    }
}

Config.printUrl();
// const c = new Config(); c.printUrl(); // Error
