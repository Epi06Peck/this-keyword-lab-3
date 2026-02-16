const swatches = document.querySelectorAll(".swatch");
// Define a function that reads this.dataset.color
// and applies it as this.style.backgroundColor
function colorAttributerR() {
  const color = this.dataset.color;
  this.style.backgroundColor = color;
}
// Then attach it to every swatch
swatches.forEach(function (swatch) {
  swatch.addEventListener("click", colorAttributerR);
});
