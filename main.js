const config = {
    name: 'Family Recipes',

}

let recipes = localStorage.getItem('recipes') || [];


const Recipe = (name, link) => {
    return {
        name
    }
}


// DOM

const app = getEl('main');
const h1 = createEl('h1');
h1.textContent = config.name;
app.appendChild(h1);


const add = createEl('button');
add.classList.add('button--positive');
add.textContent = "Add Recipe";
add.addEventListener('click', addForm);
app.appendChild(add);

function displayRecipes() {
    const listOfRecipes = getEl('recipes');

    while (listOfRecipes.firstChild) {
        listOfRecipes.removeChild(listOfRecipes.firstChild);
    }

    recipes.forEach(recipe => {
        const li = createEl('li');
        li.textContent = recipe.name;
        listOfRecipes.appendChild(li);
    })
}

function addRecipe(e) {
    e.preventDefault();
    const id = e.target.parentNode.id;
    const form = getEl(id)
    const input = form.querySelector('input')
    const name = input.value;
    const recipe = Recipe(name);
    recipes.push(recipe);
    removeForm(e);
    displayRecipes();
    console.log(recipes);
}

function countForms() {
    return document.querySelectorAll('.form').length;
}

function removeForm(e) {
    e.preventDefault();
    const id = e.target.parentNode.id;
    const form = getEl(id);
    app.removeChild(form);
}

function addForm() {
    const form = createEl('div');
    const input = createEl('input');
    const submit = createEl('button');
    const cancel = createEl('button');
    const span = createEl('span');
    submit.textContent = "Add";
    submit.classList.add('button--positive');
    submit.addEventListener('click', addRecipe);
    cancel.textContent = "X";
    cancel.classList.add('button--negative');
    cancel.addEventListener('click', removeForm);
    input.type = "text";
    input.name = "name";
    input.placeholder = "Recipe Name";
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(cancel);
    form.classList.add('form')
    form.setAttribute('id', countForms());
    app.appendChild(form);

}


// Helper Functions

function createEl(el) {
    return document.createElement(el)
}

function getEl(el) {
    return document.getElementById(el);
}

