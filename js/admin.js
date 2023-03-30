// Var
const editBtn = document.getElementById('edit-btn');
const delBtn = document.getElementById('del-btn');
const closeIcon = document.getElementById('close-icon');
const editForm = document.getElementById('edit-form');

const newsWrapper = document.getElementById('news-wrapper');
const initWrapper = document.getElementById('initiative-wrapper');


function OpenForm() {
    editForm.style.display = 'flex';
    console.log('blah')
}

function CloseForm() {
    editForm.style.display = 'none';
}

function OpenInit() {
    newsWrapper.style.display = 'none';
    initWrapper.style.display = 'flex';

    newsWrapper.classList.remove("active");
    initWrapper.classList.add("active");
}

function OpenNews() {
    initWrapper.style.display = 'none';
    newsWrapper.style.display = 'flex';

    initWrapper.classList.remove("active");
    newsWrapper.classList.add("active");
}