/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const btnCarousel = document.querySelectorAll(".btn");
const carousel = document.querySelectorAll(".img");
// - passo 2 - dar um jeito de identificar o clique do usuário no botão
btnCarousel.forEach((btn, i) => {
  btn.addEventListener("click", () => {

    removeSelected();

    addSelected(btn);

    removeActive();

    addActive(i);
  });
});


function addActive(i) {
  carousel[i].classList.add("active");
}

function addSelected(btn) {
  btn.classList.add("selected");
}

function removeSelected() {
  const btnSelected = document.querySelector(".selected");
  btnSelected.classList.remove("selected");
}

function removeActive() {
  const imgActive = document.querySelector(".active");
  imgActive.classList.remove("active");
}
