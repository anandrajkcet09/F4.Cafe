const cart = [];
const productPrices = {
    1: 12,
    2: 8,
    3: 10
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = productPrices[productId];

        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        });

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    updateCart(); // Update the cart display
}

document.getElementById('checkout-button').addEventListener('click', () => {
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
});

document.getElementById('payment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderItems.appendChild(listItem);
        total += item.price;
    });

    orderTotal.textContent = `Total: $${total}`;
    document.getElementById('order-summary').style.display = 'block';
});