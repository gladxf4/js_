# Module 13: Web APIs

## 1. Fetch API
Modern way to make network requests. Returns a Promise.
```javascript
fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));
```

## 2. Storage
- **LocalStorage**: Persistent storage (5-10MB). Strings only.
- **SessionStorage**: Cleared when tab closes.
```javascript
localStorage.setItem('key', 'value');
const val = localStorage.getItem('key');
```

## 3. URL API
Easy parsing and manipulation of URLs.
```javascript
const url = new URL('https://example.com?q=hello');
url.searchParams.get('q'); // "hello"
```

## 4. Timers
- `setTimeout`: Run once after delay.
- `setInterval`: Run repeatedly.
- `requestAnimationFrame`: Syncs with browser paint cycle (for animations).

## 5. FormData
Construct sets of key/value pairs representing form fields often used for sending data via fetch.
