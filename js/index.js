// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
// animation for the top most words
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// image slideshow
var indexValue = 0;
function slideShow() {
  setTimeout(slideShow, 2500);
  var x;
  const img = document.querySelectorAll("img");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
slideShow();
