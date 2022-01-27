const sliders = document.querySelectorAll(".slide");
const options = { rootMargin: "-150px" };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, options);

sliders.forEach((slide) => {
  observer.observe(slide);
});
