const CartProducts = document.getElementById('cart-products');
const showProduct = ()=>{
    const div = Document.createElement("div");
    const img = document.createElement("img");

    const img = document.createElement("img");
    img.src = product.thumbnail;

    const title = document.createElement("h1");
    title.innerText = product.title;
    
    const price = document.createElement("h2");
    price.innerText = `$${product.price}`;
}