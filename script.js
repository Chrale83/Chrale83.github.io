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

let isExtraParachuteChecked = document.getElementById("CheckedExtraParachute");
let isCoffeChecked = document.getElementById("checkedCoffe");
let isInsuranceChecked = document.getElementById("checkedInsurance");
let totalPackackePriceElement = document.getElementById("totalPackagePrice");
let cancelAirPackage = document.getElementById("cancelAirPackage");
let chooseAirPackage = document.getElementById("chooseAirPackage");

chooseAirPackage.addEventListener("click", function () {
  totalPackackePriceElement.textContent = totalPackagePrice;
});

cancelAirPackage.addEventListener("click", function () {
  clearInputs();
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = parseInt(this.getAttribute("data-value"));
    console.log(countPeople);

    SetCoffePrice();
    SetLifeunsurancePrice();
    SetExtraParachutePrice();
    totalPackagePrice = AirPlanePackagePrice * countPeople;
  });
});

function clearInputs() {
  countPeople = 1;
  totalPackagePrice = AirPlanePackagePrice;
  isExtraParachuteChecked.checked = false;
  isCoffeChecked.checked = false;
  isInsuranceChecked.checked = false;
}

isExtraParachuteChecked.addEventListener("change", function () {
  if (isExtraParachuteChecked.checked) {
    totalPackagePrice += parachutePrice * countPeople;
  } else {
    totalPackagePrice -= parachutePrice * countPeople;
  }

  totalPackackePriceElement.textContent = totalPackagePrice;
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
