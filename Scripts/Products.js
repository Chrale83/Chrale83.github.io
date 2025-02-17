const AirPlanePackagePrice = 1000;
const coffePrice = 10;
const parachutePrice = 10;
const insurancePrice = 10;
let countPeople = null;

let totalPackagePrice = 0;

let isExtraParachuteChecked = document.getElementById("CheckedExtraParachute");
let isCoffeChecked = document.getElementById("checkedCoffe");
let isInsuranceChecked = document.getElementById("checkedInsurance");
let totalPackagePriceElement = document.getElementById("totalPackagePrice");
let cancelAirPackage = document.getElementById("cancelAirPackage");
let selectAirPackage = document.getElementById("selectAirPackage");

selectAirPackage.addEventListener("click", function () {
  totalPackagePriceElement.textContent = totalPackagePrice;
});

cancelAirPackage.addEventListener("click", function () {
  clearInputs();
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = parseInt(this.getAttribute("data-value"));
    ChangePassangerAmount(countPeople);
    console.log(countPeople);

    document.getElementById("selectAirPackage").disabled = false;

    SetCoffePrice();
    SetLifeunsurancePrice();
    SetExtraParachutePrice();
    totalPackagePrice = AirPlanePackagePrice * countPeople;
  });
});

function ChangePassangerAmount(chosenAmountPeople) {
  document.getElementById("selectedAmountPerson").textContent =
    chosenAmountPeople;
}

function clearInputs() {
  document.getElementById("selectAirPackage").disabled = true;
  ChangePassangerAmount(null);
  countPeople = null;
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

  totalPackagePriceElement.textContent = totalPackagePrice;
});

isCoffeChecked.addEventListener("change", function () {
  if (isCoffeChecked.checked) {
    totalPackagePrice += coffePrice * countPeople;
  } else {
    totalPackagePrice -= coffePrice * countPeople;
  }
  totalPackagePriceElement.textContent = totalPackagePrice + " kr";
});

isInsuranceChecked.addEventListener("change", function () {
  if (isInsuranceChecked.checked) {
    totalPackagePrice += insurancePrice * countPeople;
  } else {
    totalPackagePrice -= insurancePrice * countPeople;
  }
  totalPackagePriceElement.textContent = totalPackagePrice + " kr";
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
