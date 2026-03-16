// --- 1. Selectors & Events ---
const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    console.log("Button Clicked!");
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.textContent = 'New Box';
    container.appendChild(newBox);
});

// --- 2. Event Delegation ---
// Handle clicks on any box (even new ones) by listening on container
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('box')) {
        e.target.classList.toggle('active');
        console.log("Box toggled:", e.target.textContent);
    }
});

// --- 3. Intersection Observer ---
const target = document.getElementById('observer-target');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Target is clear in view!");
            entry.target.style.transform = "scale(1.5)";
        } else {
            console.log("Target LEFT view.");
            entry.target.style.transform = "scale(1)";
        }
    });
}, { threshold: 0.5 });

observer.observe(target);

// --- 4. Shadow DOM (Simple Example) ---
// Create a host element dynamically
const host = document.createElement('div');
document.body.appendChild(host);

const shadow = host.attachShadow({ mode: 'open' });
shadow.innerHTML = `
    <style>p { color: red; font-weight: bold; }</style>
    <p>I am in the Shadow DOM!</p>
`;
