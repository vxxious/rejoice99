// Show message
function showMessage() {
  document.getElementById("message").style.display = "block";
}

// Music play button
document.getElementById("playButton").addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  music.play().then(() => {
    this.style.display = "none";
  }).catch(err => {
    alert("Couldn't play music. Try tapping again.");
    console.error(err);
  });
});

// Floating hearts
for (let i = 0; i < 25; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);
}

// Slideshow
const slides = document.querySelectorAll(".slideshow img");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);


