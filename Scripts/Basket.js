let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(newPackage) {
  basket.push(newPackage);
  localStorage.setItem("basket", JSON.stringify(basket));
}

export { basket, addToBasket };
