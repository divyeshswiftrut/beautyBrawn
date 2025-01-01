// View Our Work

const BeforeContainer = document.getElementById("about-before-container");
const SliderBar = document.getElementById("about-slider-bar");
const AboutSlider = document.querySelector(".about-group");
const LeftButton = document.querySelector(".about-left-btn"); // Add a class to your left button
const RightButton = document.querySelector(".about-right-btn"); // Add a class to your right button

let IsDragging = false;
let currentPercentage = 50; // Initial slider position (center)

// Function to move the slider
function moveSlider(position, rect) {
  const offsetX = position - rect.left; // Position relative to container
  const percentage = Math.max(0, Math.min((offsetX / rect.width) * 100, 100)); // Clamp between 0-100
  currentPercentage = percentage;

  // Adjust before image and slider bar position
  BeforeContainer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  SliderBar.style.left = `${percentage}%`;
}

// Function to move the slider by a specific amount (for buttons)
function moveSliderBy(percentageChange) {
  currentPercentage = Math.max(
    0,
    Math.min(currentPercentage + percentageChange, 100)
  ); // Clamp between 0-100

  // Adjust before image and slider bar position
  BeforeContainer.style.clipPath = `inset(0 ${100 - currentPercentage}% 0 0)`;
  SliderBar.style.left = `${currentPercentage}%`;
}

// Mouse Events
AboutSlider.addEventListener("mousedown", () => (IsDragging = true));
AboutSlider.addEventListener("mouseup", () => (IsDragging = false));
AboutSlider.addEventListener("mouseleave", () => (IsDragging = false));
AboutSlider.addEventListener("mousemove", (e) => {
  if (!IsDragging) return;
  const rect = AboutSlider.getBoundingClientRect();
  moveSlider(e.clientX, rect);
});

// Touch Events
AboutSlider.addEventListener("touchstart", () => (IsDragging = true));
AboutSlider.addEventListener("touchend", () => (IsDragging = false));
AboutSlider.addEventListener("touchmove", (e) => {
  if (!IsDragging) return;
  const rect = AboutSlider.getBoundingClientRect();
  const touchX = e.touches[0].clientX; // Get touch position
  moveSlider(touchX, rect);
});

// Button Events
LeftButton.addEventListener("click", () => moveSliderBy(-10)); // Move slider 10% left
RightButton.addEventListener("click", () => moveSliderBy(10)); // Move slider 10% right

// Follow Us On Instagram
// Carousel Events

const Islider = document.getElementById("instaSlider");

const Idots = document.querySelectorAll("#paginationDots button");

let current_Index = 0;

function updateSlider() {
  // Get the width of a single slide dynamically
  const slideWidth = Islider.children[0].offsetWidth;
  Islider.style.transform = `translateX(-${
    current_Index * slideWidth * 1.11
  }px)`;

  // Update the active dot
  Idots.forEach((dot, index) => {
    if (index === current_Index) {
      dot.classList.add("bg-01", "ring-1", "ring-01", "ring-offset-2");
      dot.classList.remove("bg-05");
    } else {
      dot.classList.remove("bg-01", "ring-1", "ring-01", "ring-offset-2");
      dot.classList.add("bg-05");
    }
  });
}

Idots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current_Index = index;
    updateSlider();
  });
});

window.addEventListener("resize", updateSlider);

updateSlider();
