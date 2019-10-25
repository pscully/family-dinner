const app = getEl('main');
const h1 = createEl('h1');
h1.textContent = "Hello World";
app.appendChild(h1);



// Helper Functions

function createEl(el) {
    return document.createElement(el)
}

function getEl(el) {
    return document.getElementById(el);
}

