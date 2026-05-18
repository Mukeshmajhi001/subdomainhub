/* ── Hamburger toggle ── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const hamIcon = document.getElementById("ham-icon");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  hamburger.setAttribute("aria-expanded", menuOpen);
  mobileMenu.setAttribute("aria-hidden", !menuOpen);
  hamIcon.className = menuOpen ? "fas fa-times" : "fas fa-bars";
});

/* Close menu when a mobile link is tapped */
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
    mobileMenu.setAttribute("aria-hidden", true);
    hamIcon.className = "fas fa-bars";
  });
});

/* ── Scroll-triggered card fade-up ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});
