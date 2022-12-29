// Navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

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
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu__item');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', ()=> {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active')
            });
            option.classList.add('active');
        });
    });
});


// Carousel
$('input').on('change', function() {
    $('body').toggleClass('blue');
});

// Scroll
$(document).ready(function() {
    $(window).on("scroll", function() {
        var scroll_pos = $(window).scrollTop();
        var element_pos = $(".tag").offset().top;

        if (scroll_pos >= element_pos) {
            $(".tag").addClass("visible");
        }
    });
});



