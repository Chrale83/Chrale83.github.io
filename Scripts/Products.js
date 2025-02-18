const AirPlanePackagePrice = 1250;
const parachutePrice = 20;
const coffePrice = 10;
const insurancePrice = 30;

let countPeople = null;
let totalPackagePrice = 0;

let cancelAirPackage = document.getElementById("cancelAirPackage");
let selectAirPackage = document.getElementById("selectAirPackage");
let totalPackagePriceElement = document.getElementById("totalPackagePrice");

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    countPeople = parseInt(this.getAttribute("data-value"));
    ChangePassangerQuantity(countPeople);
    console.log(countPeople);

    document.getElementById("selectAirPackage").disabled = false;

    // totalPackagePrice = AirPlanePackagePrice * countPeople;
    totalPackagePriceElement.textContent = totalPackagePrice;
  });
});

cancelAirPackage.addEventListener("click", function () {
  clearInputs();
});

selectAirPackage.addEventListener("click", () => {
  totalPackagePrice += AirPlanePackagePrice * countPeople;
  UpdateTotalPrice();
});

function ChangePassangerQuantity(selectedQuantityPeople) {
  document.getElementById("selectedAmountPerson").textContent =
    selectedQuantityPeople;
}

// Kod inuti modalen

let isExtraParachuteChecked = document.getElementById("CheckedExtraParachute");
let extraParachuteElement = document.getElementById("parachutePrice");

isExtraParachuteChecked.addEventListener("change", () => {
  if (isExtraParachuteChecked.checked) {
    extraParachuteElement.textContent = parachutePrice * countPeople + "kr";
    totalPackagePrice += parachutePrice * countPeople;
  } else {
    totalPackagePrice -= parachutePrice * countPeople;
    extraParachuteElement.textContent = 0 + "kr";
  }
  UpdateTotalPrice();
});

function UpdateTotalPrice() {
  totalPackagePriceElement.textContent = totalPackagePrice + "kr";
}
// -----

function clearInputs() {
  document.getElementById("selectAirPackage").disabled = true;
  ChangePassangerQuantity(null);
  countPeople = null;
  totalPackagePrice = 0;
  isExtraParachuteChecked.checked = false;
  isCoffeChecked.checked = false;
  isInsuranceChecked.checked = false;
}
