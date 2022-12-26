// Navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

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


