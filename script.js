const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
        return;
    }

    // Simulate email sending
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";
    form.reset();
});

// Image slider
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let current = 0;
const sliderImage = document.getElementById("slider-image");

function showSlide(index) {
    sliderImage.src = images[index];
}
function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
}
function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
}
