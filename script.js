// Show message on click
function showMessage() {
document.getElementById("message").style.display = "block";
}

// Play music on button click
document.getElementById("playButton").addEventListener("click", function() {
const music = document.getElementById("bgMusic");
music.play().then(() => {
this.style.display = "none"; // hide button after playing
}).catch(err => {
alert("Music could not play. Tap again!");
console.log(err);
});
});

// Floating hearts
for (let i = 0; i < 30; i++) {
let heart = document.createElement("div");
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

