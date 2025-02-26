import { addToBasket } from "./Basket.js";

const AirPlanePackagePrice = 1250;
const BallonPackagePrice = 1750;

let numberOfPeopleSelectedAirPlane = null;
let totalPackagePriceAirplane = 0;

let totalPriceAirPlaneElement = document.getElementById("totalPriceAirPlane");
let cancelPackageAirplane = document.getElementById("cancelPackage-Airplane");
let selectPackageAirplane = document.getElementById("selectAirPackage");
let addPackageAirplane = document.getElementById("addPackage-Airplane");

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
    id: crypto.randomUUID(),
    name: "Flygplanspaket",
    numberOfPeople: numberOfPeopleSelectedAirPlane,
    packageCost: totalPackagePriceAirplane,
    CostPerPerson: AirPlanePackagePrice,
  };
  clearInputs();
  addToBasket(newPackage);
});

function ChangePassangerQuantity(selectedQuantityPeople, elementId) {
  document.getElementById(elementId).textContent = selectedQuantityPeople;
}

// BallongLogik

let totalPriceBallonElement = document.getElementById("totalPriceBallon");
let cancelPackageBallon = document.getElementById("cancelPackage-Ballon");
let selectPackageBallon = document.getElementById("selectBallonPackage");
let addPackageBallon = document.getElementById("addPackage-Ballon");

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    const dropDownId = this.getAttribute("data-dropdown");
    const selectedValue = parseInt(this.getAttribute("data-value"));

    if (dropDownId === "airPlane") {
      document.getElementById("selectedAmountPersonAirPlane").textContent =
        selectedValue;
      document.getElementById("selectAirPackage").disabled = false;
    } else if (dropDownId === "ballon") {
      document.getElementById("selectedAmountPersonBallon").textContent =
        selectedValue;
      document.getElementById("selectBallonPackage").disabled = false;
    }
  });
});

// document.querySelectorAll(".dropdown-item").forEach((item) => {
//   item.addEventListener("click", function () {
//     numberOfPeopleSelectedAirPlane = parseInt(this.getAttribute("data-value"));

//     const dropDownId = this.getAttribute("data-dropdown");

//     document.getElementById("selectBallonPackage").disabled = false;
//     ChangePassangerQuantity(
//       numberOfPeopleSelectedAirPlane,
//       "selectedAmountPersonBallon"
//     );
//   });
// });

//annan logik

function clearInputs() {
  document.getElementById("selectBallonPackage").disabled = true;
  ChangePassangerQuantity(0, "selectedAmountPersonBallon");

  numberOfPeopleSelectedAirPlane = 0;
  totalPriceAirPlaneElement.textContent = 0;
  totalPackagePriceAirplane = 0;
}
