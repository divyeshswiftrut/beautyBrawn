const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");
  const container = item.querySelector(".faq-container");
  const icon_bg = item.querySelector(".faq-icon-bg");

  question.addEventListener("click", () => {
    // Toggle visibility of the answer
    answer.classList.toggle("hidden");
    answer.classList.toggle("block");

    // Rotate the arrow icon
    icon.classList.toggle("rotate-90");
    icon.classList.toggle("text-white");

    icon_bg.classList.toggle("bg-01");

    container.classList.toggle("bg-transparent");
    container.classList.toggle("border-01");
    container.classList.toggle("border-[3px]");
  });
});
