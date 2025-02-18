const AirPlanePackagePrice = 1250;
const BallonPackagePrice = 2500;
const parachutePrice = 700;
const coffePrice = 55;
const insurancePrice = 900;

let countPeople = null;
let totalPackagePrice = 0;

let selectBallonPackage = document.getElementById("selectBallonPackage");

let cancelAirPackage = document.getElementById("cancelAirPackage");
let selectAirPackage = document.getElementById("selectAirPackage");
let totalPackagePriceElement = document.getElementById("totalPackagePrice");

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = parseInt(this.getAttribute("data-value"));

    const dropDownId = this.getAttribute("data-dropdown");

    if (dropDownId === "airPlane") {
      document.getElementById("selectAirPackage").disabled = false;
      ChangePassangerQuantity(countPeople, "selectedAmountPersonAirPlane");
      document.getElementById("selectBallonPackage").disabled = true;
    }
    if (dropDownId === "ballon") {
      document.getElementById("selectBallonPackage").disabled = false;
      ChangePassangerQuantity(countPeople, "selectedAmountPersonBallon");
      document.getElementById("selectAirPackage").disabled = true;
    }

    // totalPackagePrice = AirPlanePackagePrice * countPeople;
    //totalPackagePriceElement.textContent = totalPackagePrice;
  });
});

cancelAirPackage.addEventListener("click", function () {
  clearInputs();
});

selectAirPackage.addEventListener("click", () => {
  totalPackagePrice += AirPlanePackagePrice * countPeople;
  UpdateTotalPrice();
});

function ChangePassangerQuantity(selectedQuantityPeople, elementId) {
  document.getElementById(elementId).textContent = selectedQuantityPeople;
}

// Kod inuti modalen

let isExtraParachuteSelected = document.getElementById("CheckedExtraParachute");

isExtraParachuteSelected.addEventListener("change", () => {
  let extraParachuteElement = document.getElementById("parachutePrice");

  if (isExtraParachuteSelected.checked) {
    extraParachuteElement.textContent = parachutePrice * countPeople + "kr";
    totalPackagePrice += parachutePrice * countPeople;
  } else {
    totalPackagePrice -= parachutePrice * countPeople;
    extraParachuteElement.textContent = 0 + "kr";
  }
  UpdateTotalPrice();
});

let isCoffeSelected = document.getElementById("includeCoffeeCheckbox");

isCoffeSelected.addEventListener("change", () => {
  let CoffeAndFikaPriceElement = document.getElementById("CoffePrice");

  if (isCoffeSelected.checked) {
    CoffeAndFikaPriceElement.textContent = coffePrice * countPeople + "kr";
    totalPackagePrice += coffePrice * countPeople;
  } else {
    totalPackagePrice -= coffePrice * countPeople;
    CoffeAndFikaPriceElement.textContent = 0 + "kr";
  }
  UpdateTotalPrice();
});

let isInsuranceSelected = document.getElementById("LifeInsuranceCheckbox");

isInsuranceSelected.addEventListener("change", () => {
  let InsurancePriceElement = document.getElementById("insurancePrice");

  if (isInsuranceSelected.checked) {
    InsurancePriceElement.textContent = insurancePrice * countPeople + "kr";
    totalPackagePrice += insurancePrice * countPeople;
  } else {
    InsurancePriceElement.textContent = 0 + "kr";
    totalPackagePrice -= insurancePrice * countPeople;
  }
  UpdateTotalPrice();
});

function UpdateTotalPrice() {
  totalPackagePriceElement.textContent = totalPackagePrice + "kr";
}
// -----

function clearInputs() {
  document.getElementById("selectAirPackage").disabled = true;
  document.getElementById("selectBallonPackage").disabled = true;
  ChangePassangerQuantity(null);
  countPeople = null;
  totalPackagePrice = 0;
  isExtraParachuteSelected.checked = false;
  isCoffeSelected.checked = false;
  isInsuranceSelected.checked = false;
}
