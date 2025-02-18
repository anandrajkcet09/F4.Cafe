let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Clear the cart display

    cart.forEach((item, index) => {
        cartDiv.innerHTML += `<p>${item.name} - Rs${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout with total: Rs " + total.toFixed(2));
        // Here you can add functionality to process the order
        cart = [];
        total = 0;
        updateCart();
    }
}