const productsEl = document.querySelector(".center-itens");


let num = 0;
function renderProdcuts(n) {
    products.forEach((product) => {
        if (num < n) {

            productsEl.innerHTML +=
                `
            <li>
                <a onclick="addToCart($addToCart)">
                    <img class="tam-destaques" src="${product.img}" alt="${product.nome}" /><br>
			${product.nome}<br>
			R$${product.preco}<br>
            <input type="button" class="button" value="Adicionar ao Carrinho">                
            </a>
            <li>
            `;
            num = num + 1;
        }
    });
}
renderProdcuts(3);

function addToCart(id){
    const item = products.find((products) => product.id== id);
    
    cart.push(item); 
}
