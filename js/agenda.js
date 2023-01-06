const image = document.getElementById("sdg-img");
const filter = document.getElementsByClassName("filter");
const head = document.getElementById("sdg-head");
const details = document.getElementById("sdg-default");

function detailDisplay() {
    image.style.display = 'none';
    filter.style.display = 'none';
    head.style.display = 'none';
    details.style.display = 'flex';
}