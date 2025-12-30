const menuHamburguer = document.getElementById("menu-hamburguer");
const menuFechar = document.getElementById("menu-fechar");
const cabecalhoNav = document.querySelector(".cabecalho__nav");
const cabecalho = document.querySelector(".cabecalho");

menuHamburguer.addEventListener("click", () => {
    cabecalhoNav.classList.add("nav__aberto");
    cabecalho.classList.add("menu-aberto");
});

menuFechar.addEventListener("click", () => {
    cabecalhoNav.classList.remove("nav__aberto");
    cabecalho.classList.remove("menu-aberto");
});