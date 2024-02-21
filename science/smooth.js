document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".full-page");
  sections.forEach((section, index) => {
    section.addEventListener("click", function () {
      scrollToNextSection(index);
    });
  });
});

function scrollToNextSection(currentIndex) {
  const nextIndex = currentIndex + 1;
  if (nextIndex < sections.length) {
    sections[nextIndex].scrollIntoView({ behavior: "smooth" });
  }
}
