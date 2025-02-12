document.addEventListener("DOMContentLoaded", function () {
  fetch("/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

let countPeople = 1;
const AirPlanePackagePrice = 1250;
const coffePrice = 10;
const parachutePrice = 10;
const insurancePrice = 10;

let totalPackagePrice = 0;

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = parseInt(this.getAttribute("data-value"));
    console.log(countPeople);

    SetCoffePrice();
    SetLifeunsurancePrice();
    SetExtraParachutePrice();
  });
});

let isExtraParachuteChecked = document.getElementById("CheckedExtraParachute");
let isCoffeChecked = document.getElementById("checkedCoffe");
let isInsuranceChecked = document.getElementById("checkedInsurance");
let totalPackackePriceElement = document.getElementById("totalPackagePrice");

isExtraParachuteChecked.addEventListener("change", function () {
  if (isExtraParachuteChecked.checked) {
    totalPackagePrice += parachutePrice * countPeople;
  } else {
    totalPackagePrice -= parachutePrice * countPeople;
  }

  totalPackackePriceElement.textContent = totalPackagePrice + " kr";
});

isCoffeChecked.addEventListener("change", function () {
  if (isCoffeChecked.checked) {
    totalPackagePrice += coffePrice * countPeople;
  } else {
    totalPackagePrice -= coffePrice * countPeople;
  }
  totalPackackePriceElement.textContent = totalPackagePrice + " kr";
});

isInsuranceChecked.addEventListener("change", function () {
  if (isInsuranceChecked.checked) {
    totalPackagePrice += insurancePrice * countPeople;
  } else {
    totalPackagePrice -= insurancePrice * countPeople;
  }
  totalPackackePriceElement.textContent = totalPackagePrice + " kr";
});

function SetCoffePrice() {
  let coffePriceElement = document.getElementById("coffePrice");
  coffePriceElement.textContent = coffePrice * countPeople;
}

function SetExtraParachutePrice() {
  let parachutePriceElement = document.getElementById("parachutePrice");
  parachutePriceElement.textContent = parachutePrice * countPeople;
}

function SetLifeunsurancePrice() {
  let insurancePriceElement = document.getElementById("insurancePrice");
  insurancePriceElement.textContent = insurancePrice * countPeople;
}
