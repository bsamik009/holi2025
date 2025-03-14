let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slides[currentSlide].style.display = "block";
    currentSlide = (currentSlide + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 2500); // Change every 2 seconds

// Color blast effect with bigger and longer-lasting particles
document.querySelector("button").addEventListener("click", function (event) {
    for (let i = 0; i < 20; i++) { // Increased number of particles
        let circle = document.createElement("div");
        circle.classList.add("circle");

        let size = Math.random() * 100; // Increased size
        let x = event.clientX + (Math.random() * 150 - 75);
        let y = event.clientY + (Math.random() * 150 - 75);

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.backgroundColor = getRandomColor();
        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";
        circle.style.transform = "scale(0)";
        circle.style.animation = "explode 2s ease-out forwards"; // Increased duration
        circle.style.pointerEvents = "none";

        document.body.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 2000); // Remove after 2 seconds
    }
});

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// Add the CSS animation dynamically
const style = document.createElement("style");
style.innerHTML = `
    @keyframes explode {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(8); opacity: 0; } /* Increased final size */
    }
`;
document.head.appendChild(style);
