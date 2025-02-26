import { addToBasket } from "./Basket.js";

const costAirplanePack = 1250;
const costBallonPack = 1450;
const costSpaceshipPack = 500000;

let selectedAirplanePack = null;
let selectedBalloonPack = null;
let selectedSpaceshipPack = null;

//FLYGPLAN PAKET-----------------------------------

const airplaneOptions = document.querySelectorAll(
  "#dropdownMenuButton + .dropdown-menu .dropdown-item"
);
airplaneOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    selectedAirplanePack = e.target.getAttribute("data-value");

    document.getElementById("numPeopleAirplanePack").textContent =
      selectedAirplanePack;

    document.getElementById("selectAirPackage").disabled = false;
  });
});

document.getElementById("selectAirPackage").addEventListener("click", () => {
  let newPackage = {
    id: crypto.randomUUID(),
    name: "Flygplanspaket",
    numberOfPeople: selectedAirplanePack,
    packageCost: selectedAirplanePack * costAirplanePack,
    CostPerPerson: costAirplanePack,
  };
  console.log(newPackage);

  ClearAllInput();
  addToBasket(newPackage);
});
// BALLONGPAKET -----------------------------------

const balloonOptions = document.querySelectorAll(
  "#dropdownMenuButtonBalloon + .dropdown-menu .dropdown-item"
);
balloonOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    selectedBalloonPack = e.target.getAttribute("data-value");

    document.getElementById("numPeopleBalloonPack").textContent =
      selectedBalloonPack;

    document.getElementById("selectBalloonPackage").disabled = false;
  });
});

document
  .getElementById("selectBalloonPackage")
  .addEventListener("click", () => {
    let newPackage = {
      id: crypto.randomUUID(),
      name: "BallongPaketet",
      numberOfPeople: selectedBalloonPack,
      packageCost: selectedBalloonPack * costBallonPack,
      CostPerPerson: costBallonPack,
    };
    console.log(newPackage);

    ClearAllInput();
    addToBasket(newPackage);
  });
// RYMDSKEPPS PAKET -------------------------------------------

const spaceshipOptions = document.querySelectorAll(
  "#dropdownMenuButtonSpaceship + .dropdown-menu .dropdown-item"
);
spaceshipOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    selectedSpaceshipPack = e.target.getAttribute("data-value");

    document.getElementById("numPeopleSpaceshipPack").textContent =
      selectedSpaceshipPack;

    document.getElementById("selectSpaceshipPackage").disabled = false;
  });
});

document
  .getElementById("selectSpaceshipPackage")
  .addEventListener("click", () => {
    let newPackage = {
      id: crypto.randomUUID(),
      name: "Rumdskepps paketet",
      numberOfPeople: selectedSpaceshipPack,
      packageCost: selectedSpaceshipPack * costSpaceshipPack,
      CostPerPerson: costSpaceshipPack,
    };
    console.log(newPackage);

    ClearAllInput();
    let toastElement = document.getElementById("toast");
    let toast = new bootstrap.Toast(toastElement);
    toast.show();
    addToBasket(newPackage);
  });

//--- EXTRA LOGIK

function ClearAllInput() {
  document.getElementById("selectSpaceshipPackage").disabled = true;
  document.getElementById("selectBalloonPackage").disabled = true;
  document.getElementById("selectAirPackage").disabled = true;
  selectedAirplanePack = 0;
  selectedBalloonPack = 0;
  selectedSpaceshipPack = 0;
  document.getElementById("numPeopleSpaceshipPack").textContent =
    selectedSpaceshipPack;
  document.getElementById("numPeopleBalloonPack").textContent =
    selectedBalloonPack;
  document.getElementById("numPeopleAirplanePack").textContent =
    selectedAirplanePack;
}
