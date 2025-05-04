
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

// parte que muda as roupas na home da aba feminino

function toggle_feminino() {
  const masculino = document.getElementById("grid_masculino");
  const feminino = document.getElementById("grid_feminino");
  const brecho = document.getElementById("grid_brecho");
  const botao_masculino = document.getElementById("botao_shop_masculino");
  const botao_feminino = document.getElementById("botao_shop_feminino");
  const botao_brecho = document.getElementById("botao_shop_brecho");


  masculino.style.display = "none";
  feminino.style.display = "flex";
  brecho.style.display = "none";
  botao_masculino.style.display = "none";
  botao_feminino.style.display = "flex";
  botao_brecho.style.display = "none";


}

// o masculino

function toggle_masculino() {
  const masculino = document.getElementById("grid_masculino");
  const feminino = document.getElementById("grid_feminino");
  const brecho = document.getElementById("grid_brecho");
  const botao_masculino = document.getElementById("botao_shop_masculino");
  const botao_feminino = document.getElementById("botao_shop_feminino");
  const botao_brecho = document.getElementById("botao_shop_brecho");

  

  masculino.style.display = "flex";
  feminino.style.display = "none";
  brecho.style.display = "none";
  botao_masculino.style.display = "flex";
  botao_feminino.style.display = "none";
  botao_brecho.style.display = "none";

}

// o brecho

function toggle_brecho() {
  const masculino = document.getElementById("grid_masculino");
  const feminino = document.getElementById("grid_feminino");
  const brecho = document.getElementById("grid_brecho");
  const botao_masculino = document.getElementById("botao_shop_masculino");
  const botao_feminino = document.getElementById("botao_shop_feminino");
  const botao_brecho = document.getElementById("botao_shop_brecho");

  

  masculino.style.display = "none";
  feminino.style.display = "none";
  brecho.style.display = "flex";
  botao_masculino.style.display = "none";
  botao_feminino.style.display = "none";
  botao_brecho.style.display = "flex";

}



