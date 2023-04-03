// Var
const editBtn = document.getElementById('edit-btn');
const delBtn = document.getElementById('del-btn');
const closeIcon = document.getElementById('close-icon');
const editForm = document.getElementById('edit-form');


const delContainer = document.getElementById('del-container');


const newsWrapper = document.getElementById('news-wrapper');
const initWrapper = document.getElementById('initiative-wrapper');

const newsHead = document.getElementById('news-head');
const initHead = document.getElementById('initiative-head');


function OpenForm() {
    editForm.style.display = 'flex';
    console.log('blah')
}

function CloseForm() {
    editForm.style.display = 'none';
}

function OpenInit() {
    initWrapper.style.display = 'flex';
    newsWrapper.style.display = 'none';

    newsHead.classList.remove("active");
    initHead.classList.add("active");
}

function OpenNews() {
    initWrapper.style.display = 'none';
    newsWrapper.style.display = 'flex';

    initHead.classList.remove("active");
    newsHead.classList.add("active");
}

function OpenDel() {
    delContainer.style.display = 'flex';
}

function CloseDel() {
    delContainer.style.display = 'none';
}

// Init
const InitEditForm = document.getElementById('edit-form-initiative');

const InitDelContainer = document.getElementById('del-init-container');

function InitOpenForm() {
    InitEditForm.style.display = 'flex';
}

function InitCloseForm() {
    InitEditForm.style.display = 'none';
}

function InitOpenDel() {
    InitDelContainer.style.display = 'flex';
}

function InitCloseDel() {
    InitDelContainer.style.display = 'none';
}