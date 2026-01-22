function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: productName,
        price: productPrice,
        image: productImage
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " has been added to cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cartItems");
    let totalPrice = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("totalPrice").innerText = "RM0";
        return;
    }

    cart.forEach((item, index) => {
        totalPrice += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-info">
                <p>${item.name} - RM${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerText = "RM" + totalPrice;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (!localStorage.getItem("cart") || JSON.parse(localStorage.getItem("cart")).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your purchase!\nYour order has been placed successfully.");

    localStorage.removeItem("cart");
    displayCart();
}
