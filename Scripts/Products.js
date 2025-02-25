import { addToBasket } from "./Basket.js";

const AirPlanePackagePrice = 1250;
const BallonPackagePrice = 2500;

let numberOfPeopleSelectedAirPlane = null;
let totalPackagePriceAirplane = 0;

let totalPriceAirPlaneElement = document.getElementById("totalPriceAirPlane");
let cancelPackageAirplane = document.getElementById("cancelPackage-Airplane");
let selectPackageAirplane = document.getElementById("selectAirPackage");
let addPackageAirplane = document.getElementById("addPackage-AirPlane");

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    numberOfPeopleSelectedAirPlane = parseInt(this.getAttribute("data-value"));

    const dropDownId = this.getAttribute("data-dropdown");

    document.getElementById("selectAirPackage").disabled = false;
    ChangePassangerQuantity(
      numberOfPeopleSelectedAirPlane,
      "selectedAmountPersonAirPlane"
    );
  });
});

cancelPackageAirplane.addEventListener("click", function () {
  clearInputs();
});

selectPackageAirplane.addEventListener("click", () => {
  let personText = "";

  if (numberOfPeopleSelectedAirPlane > 1) {
    personText = " personer: ";
  } else {
    personText = " person: ";
  }
  totalPackagePriceAirplane +=
    AirPlanePackagePrice * numberOfPeopleSelectedAirPlane;
  totalPriceAirPlaneElement.textContent =
    "för " +
    numberOfPeopleSelectedAirPlane +
    personText +
    totalPackagePriceAirplane;
});

addPackageAirplane.addEventListener("click", () => {
  let newPackage = {
    name: "Flygplanspaket",
    numberOfPeople: numberOfPeopleSelectedAirPlane,
    packageCost: totalPackagePriceAirplane,
    CostPerPerson: AirPlanePackagePrice,
  };

  addToBasket(newPackage);
});

function ChangePassangerQuantity(selectedQuantityPeople, elementId) {
  document.getElementById(elementId).textContent = selectedQuantityPeople;
}

function clearInputs() {
  document.getElementById("selectAirPackage").disabled = true;
  ChangePassangerQuantity(0, "selectedAmountPersonAirPlane");

  numberOfPeopleSelectedAirPlane = 0;
  totalPriceAirPlaneElement.textContent = 0;
  totalPackagePriceAirplane = 0;
}
