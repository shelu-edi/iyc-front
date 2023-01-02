// Navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
const  mobileMenuDrop = document.querySelector('.mobile__menu__dropdown');

// Nav Dropdown

const brief = document.getElementById("iyc-brief");
const worldwide = document.getElementById("iyc-worldwide");
const country = document.getElementById("iyc-country");
const affiliations = document.getElementById("iyc-affiliations");
const agenda = document.getElementById("iyc-agenda");

function Brief() {
    brief.style.display = 'flex';
    worldwide.style.display = 'none';
    country.style.display = 'none';
    affiliations.style.display = 'none';
    agenda.style.display = 'none';
}

function Worldwide() {
    worldwide.style.display = 'flex';
    brief.style.display = 'none';
    country.style.display = 'none';
    affiliations.style.display = 'none';
    agenda.style.display = 'none';
}

function Country() {
    country.style.display = 'flex';
    brief.style.display = 'none';
    worldwide.style.display = 'none';
    affiliations.style.display = 'none';
    agenda.style.display = 'none';
}

function Affiliations() {
    affiliations.style.display = 'flex';
    brief.style.display = 'none';
    worldwide.style.display = 'none';
    country.style.display = 'none';
    agenda.style.display = 'none';
}

function Agenda() {
    agenda.style.display = 'flex';
    brief.style.display = 'none';
    worldwide.style.display = 'none';
    country.style.display = 'none';
    affiliations.style.display = 'none';
}


// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    // menuLinks.classList.toggle('active');
    mobileMenuDrop.classList.toggle('.is-active');

    console.log("blah");
}

menu.addEventListener('click', mobileMenu);