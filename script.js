// JavaScript to handle the popup
document.getElementById("higherClasses").onclick = function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById("popup").style.display = "block"; // Show the popup
};

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of it
window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
let images = [
    'images/IMG-20241211-WA0031.jpg',  // Replace with your image paths
    'images/IMG-20241211-WA0142.jpg',
    'images/IMG-20241211-WA0161.jpg'
];

let currentIndex = 0;

function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    document.getElementById('heroBackground').style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change the hero image every 5 seconds
setInterval(changeHeroImage, 2000);

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle for mobile view
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});

