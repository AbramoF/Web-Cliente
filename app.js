const productsEl= document.querySelector(".itens");


function renderProdcuts() {
    products.forEach((product) => {
        productsEl.innerHTML += 
        `
        <li>
        <a onclick="addToCart($addToCart)">
            <img class="tam" src="${product.img}" alt="${product.nome}" />
            ${product.nome}<br> 
            R$${product.preco}
            <input type="button" class="button" value="Adicionar ao Carrinho">
        </a>
        </li>
        `;
    });
}
renderProdcuts();


let cart=[];

function addToCart(id){
    const item = products.find((products) => product.id== id);
    
    cart.push(item); 
}


let menor=10000;

function ordemCrescente(){
    products.forEach((product)=>{

            




    })

}