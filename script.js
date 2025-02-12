document.addEventListener("DOMContentLoaded", function () {
  fetch("/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    let countPeople = this.getAttribute("data-value");
    console.log(countPeople);
  });
});
