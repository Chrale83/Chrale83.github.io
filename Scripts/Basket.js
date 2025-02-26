document.addEventListener("DOMContentLoaded", () => {
  renderBasket();

  const clearBasketButton = document.getElementById("clearBasket");
  if (clearBasketButton) {
    clearBasketButton.addEventListener("click", clearCart);
  }
});

let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(newPackage) {
  // Se till att varje objekt har ett unikt ID
  newPackage.id = newPackage.id || Date.now();

  basket.push(newPackage);
  localStorage.setItem("basket", JSON.stringify(basket));
  renderBasket(); // Uppdatera vyn direkt
}

function renderBasket() {
  const basketList = document.getElementById("basketList");
  basketList.innerHTML = "";

  basket.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="card p-3 mb-2 shadow-sm">
        <h5 class="card-title">${item.name}</h5>
        <p class="mb-1"><strong>Antal personer:</strong> ${item.numberOfPeople}</p>
        <p class="mb-1"><strong>Pris per person:</strong> ${item.CostPerPerson} kr</p>
        <p class="mb-2"><strong>Totalkostnad:</strong> ${item.packageCost} kr</p>
        <button class="btn btn-danger btn-sm" data-id="${item.id}">
          ❌ Ta bort
        </button>
      </div>
    `;
    basketList.appendChild(li);
  });

  // Lägg till event listeners för alla "Ta bort"-knappar
  document.querySelectorAll(".btn-danger").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromBasket(button.getAttribute("data-id"));
    });
  });
}

function removeFromBasket(id) {
  basket = basket.filter((item) => item.id != id); // Filtrera bort det objektet
  localStorage.setItem("basket", JSON.stringify(basket));
  renderBasket(); // Uppdatera vyn
}

function clearCart() {
  basket = [];
  localStorage.removeItem("basket"); // Tar bort från lagringen
  renderBasket();
}

export { basket, addToBasket };
