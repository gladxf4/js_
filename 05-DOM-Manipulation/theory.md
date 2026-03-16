# Module 5: DOM Manipulation

## 1. Selectors
- `document.getElementById('id')`
- `document.querySelector('.class')`
- `document.querySelectorAll('tag')` (Returns NodeList)

## 2. Event Listeners
- `element.addEventListener('click', callback)`
- **Event Delegation**: Attaching a listener to a parent to handle events for children (efficient).

## 3. DOM Traversal
- `parentNode`, `children`, `nextElementSibling`.

## 4. Advanced Observers

### MutationObserver
Watches for changes to the DOM (attributes, childList, subtree).

### IntersectionObserver
Watches when an element enters/leaves the viewport (great for lazy loading or infinite scroll).

## 5. Shadow DOM
Encapsulated DOM tree attached to an element. Styles inside don't leak out, and global styles don't leak in. Used in Web Components.
```javascript
const shadow = element.attachShadow({ mode: 'open' });
```
