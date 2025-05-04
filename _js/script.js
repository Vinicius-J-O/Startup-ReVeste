
const categories = document.querySelectorAll(".category");

categories.forEach(category => {
category.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    category.classList.add("active");
    });
  });



  // barra de pesquisa aparecendo na header


  function toggle_pesquisa() {
    const barraDeBusca = document.getElementById("search-container");
    const navLinks = document.querySelector(".nav-links");

    const estaVisivel = barraDeBusca.style.display === "flex";

    // Alterna a visibilidade da barra de busca
    barraDeBusca.style.display = estaVisivel ? "none" : "flex";

    // Esconde ou mostra os links de navegação
    navLinks.style.display = estaVisivel ? "flex" : "none";
}

// parte do carrinho de compras

function toggleCarrinho() {
  const carrinho = document.getElementById("carrinho");
  const estaVisivel = carrinho.style.display === "flex";

  // Alterna a visibilidade do carrinho
  carrinho.style.display = estaVisivel ? "none" : "block";
}
  // parte do X

const closeCartBtn = document.getElementById("close-cart");
closeCartBtn.addEventListener("click", function() {
const carrinho = document.getElementById("carrinho");

  carrinho.style.display = "none"; // Esconde o carrinho quando clicar no "X"
});



