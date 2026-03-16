# Module 15: Modules In Depth

## 1. ES Modules (ESM)
The standard in browsers and modern Node.js.
- `export const foo = ...` (Named export)
- `export default ...` (Default export)
- `import { foo } from './file.js'`

## 2. CommonJS (CJS)
Legacy Node.js format.
- `module.exports = ...`
- `const foo = require('./file')`

## 3. Dynamic Imports
Loading code only when needed (Lazy Loading). Returns a Promise.
```javascript
import('./module.js').then(module => { ... });
```

## 4. Bundlers (Overview)
Tools like **Webpack**, **Vite**, **Parcel**.
- They compile modules into a single (or few) files.
- Handle transpilation (Babel), minification, and asset management.
