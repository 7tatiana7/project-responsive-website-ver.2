const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

// Pointer to last selected thumbnail
let thumbPointer = imgs[0];

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.remove("fade-in");
  current.classList.add("fade-in");

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
  
  // NEW - Reset the opacity of last thumbnail
  thumbPointer.style.opacity = 1;
  
  // NEW - Update thumb Pointer
  thumbPointer = e.target;
}