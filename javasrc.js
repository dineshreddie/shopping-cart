let cart = [];


function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cartItems");
    

    cartItemsElement.innerHTML = " ";
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName}: $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    
}