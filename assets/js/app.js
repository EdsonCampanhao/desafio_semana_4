// Elementos DOM
const HamburguerButton = document.querySelector(".header__hamburguer-btn");
const navToggle = document.querySelector(".header__nav-toggle");

// --- Menu Toggle ---
HamburguerButton.addEventListener("click", function toggleMenu() {
    navToggle.classList.toggle("active"); // Quando o botão é clicado, adiciona a classe "active" no nav
});

// --- Carousel ---
import {users} from './data.js'
// Elementos DOM
const leftButton = document.querySelector(".comments__arrow-btn-left");
const rightButton = document.querySelector(".comments__arrow-btn-right");
const imageProfile = document.querySelector(".comments__img-profile");
const nameUser = document.querySelector(".comments__name");
const reviewUser = document.querySelector(".comments__review")

// Índice das reviews
let index = 2;
let item = users[index];
const lastItem = users.length - 1;

// Atualiza a review quando a página é carregada
window.addEventListener("DOMContentLoaded", function() {
    show(index);
});

// Exibe a review
function show(person) {
    item = users[person];
    imageProfile.src = item.img;
    nameUser.textContent = item.name;
    reviewUser.textContent = item.review;
};

leftButton.addEventListener("click", function left() {
    index--
    if (index < 0) {
        index = lastItem;
        show(index);
    } else {
        show(index);
    }
});

rightButton.addEventListener("click", function right() {
    index++;
    if (index > lastItem) {
        index = 0;
        show(index);
    } else {
        show(index);
    }
});

// Setas para direita e esquerda utilizando o teclado
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      leftButton.click();
    } else if (event.key === "ArrowRight") {
      rightButton.click();
    }
});