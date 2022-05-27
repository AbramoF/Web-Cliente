const productsEl = document.querySelector(".itens");


function renderProdcuts() {
    products.forEach((product) => {
        productsEl.innerHTML +=
            `
        <li>
        <a href="./index.html">
            <img class="tam" src="${product.img}" alt="${product.nome}" />
            ${product.nome}
            R$${product.preco}
            <button type="button" class="button" data-toggle="modal" data-target="#exampleModal>Ver mais...</button>

        </a>
        </li>
        `;
    });
}
renderProdcuts();


let cart = [];

function addToCart(id) {
    const item = products.find((products) => product.id == id);

    cart.push(item);
}


let menor = 10000;

//pessoas.sort(function(a,b) {
  //  return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
//});