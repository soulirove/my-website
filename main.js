const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;

  // Parallax effects
  parallax.style.backgroundPositionX = offset * (-0.3) - 100 + "px";
  parallax1.style.backgroundPositionY = (offset - 3100) * 0.1 + "px";
  parallax2.style.backgroundPositionY = (offset - 4800) * (-0.1) + "px";

  // Reveal elements on scroll
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Function to uncheck a checkbox
function myFunction() {
  document.getElementById("check").checked = false;
}
