gsap.from("header nav ul .left", {
  opacity: 0,
  duration: 1,
  x: 50,
  delay: 2.55,
});
gsap.from("header nav ul .center", {
  opacity: 0,
  duration: 1,
  delay: 2.55,
});
gsap.from("header nav ul .right", {
  opacity: 0,
  duration: 1,
  x: -50,
  delay: 2.55,
});

gsap.from(".hero .hero-box .content .title", {
  opacity: 0,
  duration: 1,
  y: -30,
  delay: 0.5,
});
gsap.from(".hero .hero-box .content .description", {
  opacity: 0,
  duration: 1.5,
  y: 30,
  delay: 1,
});
gsap.from(".hero .hero-box .content .btn", {
  opacity: 0,
  duration: 1,
  delay: 2,
});

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

const dividers = document.querySelectorAll(".divider");
const divOptions = { rootMargin: "-20px" };

const onScroll = new IntersectionObserver((entries, onScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-div");
      onScroll.unobserve(entry.target);
    }
  });
}, divOptions);

dividers.forEach((divider) => {
  onScroll.observe(divider);
});
