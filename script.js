document.addEventListener("DOMContentLoaded", function () {
  fetch("/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

let countPeople = 1;

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = this.getAttribute("data-value");
    console.log(countPeople);

    SetCoffePrice();
    SetLifeunsurancePrice();
    SetExtraParachutePrice();
  });
});

function SetCoffePrice() {
  let coffePrice = 50;

  let coffePriceElement = document.getElementById("coffePrice");
  coffePriceElement.textContent = coffePrice * countPeople;
}

function SetExtraParachutePrice() {
  let parachutePrice = 850;

  let parachutePriceElement = document.getElementById("parachutePrice");
  parachutePriceElement.textContent = parachutePrice * countPeople;
}

function SetLifeunsurancePrice() {
  let insurancePrice = 1450;

  let insurancePriceElement = document.getElementById("insurancePrice");
  insurancePriceElement.textContent = insurancePrice * countPeople;
}
