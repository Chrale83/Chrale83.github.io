var map = document.getElementById("mymap");
var maplistner = function (e) {
  var frame = document.createElement("iframe");
  frame.src = this.getAttribute("data-src");
  map.appendChild(frame);
  map.removeEventListener("mouseover", maplistner);
};
map.addEventListener("mouseover", maplistner);
