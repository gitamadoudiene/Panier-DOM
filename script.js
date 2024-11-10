let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    // Ajouter le produit au panier
    cart.push({ name, price });

    // Mettre à jour le nombre d'articles dans le panier
    document.getElementById("cartCount").textContent = cart.length;

    // Mettre à jour le panier et le total
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("totalPrice");

    // Réinitialiser l'affichage des éléments du panier
    cartItems.innerHTML = "";

    // Calculer le nouveau total
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // Afficher chaque article dans le panier
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} FCFA `;
        
        // Ajouter un bouton pour supprimer l'article
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Supprimer";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);

        cartItems.appendChild(li);
    });

    // Mettre à jour le prix total
    totalDisplay.textContent = `Total : ${totalPrice} FCFA`;
}

function removeFromCart(index) {
    // Supprimer l'article du panier
    cart.splice(index, 1);

    // Mettre à jour le nombre d'articles dans le panier
    document.getElementById("cartCount").textContent = cart.length;

    // Mettre à jour le panier et le total
    updateCartDisplay();
}
