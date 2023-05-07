const counterGWt = document.querySelector(".changeGWt");
let GWt = 2500;
const interval = setInterval(function () {
  GWt++;
  counterGWt.textContent = GWt;
  if (GWt > 3000) {
    GWt = 2500;
  }
}, 500);
