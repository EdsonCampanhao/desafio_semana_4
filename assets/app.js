// Seleciona o botão e o menu de navegação
const HamburguerButton = document.querySelector(".header__hamburguer-btn");
const navToggle = document.querySelector(".header__nav-toggle");

HamburguerButton.addEventListener("click", function toggleMenu() {
    navToggle.classList.toggle("active"); // Quando o botão é clicado, adiciona a classe "active" no nav
});