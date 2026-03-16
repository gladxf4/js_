// --- 1. Fetch API ---
console.log("--- Fetch API ---");
// Mocking a fetch call
function mockFetch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve({ id: 1, title: "Mock Data" })
            });
        }, 500);
    });
}

mockFetch()
    .then(res => res.json())
    .then(data => console.log("Fetched:", data));

// --- 2. Storage ---
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const output = document.getElementById('output');

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('demoUser', 'Alice');
        alert("Saved 'Alice' to LocalStorage");
    });
}

if (loadBtn) {
    loadBtn.addEventListener('click', () => {
        const user = localStorage.getItem('demoUser');
        output.textContent = user ? `User: ${user}` : "No user found";
    });
}

// --- 3. URL API ---
console.log("\n--- URL API ---");
const myUrl = new URL("https://example.com/search?q=javascript&sort=desc");
console.log("Query 'q':", myUrl.searchParams.get("q"));
myUrl.searchParams.append("page", "2");
console.log("Updated URL:", myUrl.toString());
