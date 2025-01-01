function menu() {
  // Get the current URL path
  const currentPath = window.location.href;
  console.log(currentPath);

  // Select all menu links
  const menu = document.querySelectorAll(".menu");
  console.log(menu);

  // Loop through links and add 'text-01' class to the active link
  menu.forEach((link) => {
    if (link.href == currentPath) {
      console.log(link.href);
      link.classList.add("text-01", "font-bold");
    }
  });
}

menu();

const navLinks = document.querySelector(".nav-links");

function mobileMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[9%]");
  document.body.classList.toggle("bg-05");
}

// JavaScript for Carousel Functionality
const slider = document.getElementById("testimonialSlider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.querySelectorAll("#paginationDots button");
const leftButton = document.querySelector(".left-btn"); // Add a class to your left button
const rightButton = document.querySelector(".right-btn"); // Add a class to your right button

let currentIndex = 0;

function updateSlider() {
  // Get the width of a single slide dynamically
  const slideWidth = slider.children[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth * 1.11}px)`;

  // Update the active dot
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("bg-01", "ring-1", "ring-01", "ring-offset-2");
      dot.classList.remove("bg-05");
    } else {
      dot.classList.remove("bg-01", "ring-1", "ring-01", "ring-offset-2");
      dot.classList.add("bg-05");
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

window.addEventListener("resize", updateSlider);

updateSlider();

// see more work hover effect here
const beforeContainer = document.getElementById("before-container");
const sliderBar = document.getElementById("slider-bar");
const Slider = document.querySelector(".group");

let isDragging = false;
let CurrentPercentage = 50;

function moveSlider(position, rect) {
  const offsetX = position - rect.left; // Position relative to container
  const percentage = Math.max(0, Math.min((offsetX / rect.width) * 100, 100)); // Clamp between 0-100

  // Adjust before image and slider bar position
  beforeContainer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  sliderBar.style.left = `${percentage}%`;
}

function moveSliderBy(percentageChange) {
  CurrentPercentage = Math.max(
    0,
    Math.min(CurrentPercentage + percentageChange, 100)
  ); // Clamp between 0-100

  // Adjust before image and slider bar position
  beforeContainer.style.clipPath = `inset(0 ${100 - CurrentPercentage}% 0 0)`;
  sliderBar.style.left = `${CurrentPercentage}%`;
}

// Mouse Events
Slider.addEventListener("mousedown", () => (isDragging = true));
Slider.addEventListener("mouseup", () => (isDragging = false));
Slider.addEventListener("mouseleave", () => (isDragging = false));
Slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const rect = Slider.getBoundingClientRect();
  moveSlider(e.clientX, rect);
});

// Touch Events
Slider.addEventListener("touchstart", () => (isDragging = true));
Slider.addEventListener("touchend", () => (isDragging = false));
Slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const rect = Slider.getBoundingClientRect();
  const touchX = e.touches[0].clientX; // Get touch position
  moveSlider(touchX, rect);
});

leftButton.addEventListener("click", () => moveSliderBy(-10)); // Move slider 10% left
rightButton.addEventListener("click", () => moveSliderBy(10)); // Move slider 10% right
