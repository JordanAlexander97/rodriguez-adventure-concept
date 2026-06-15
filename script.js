document.documentElement.classList.add("js");

const fitCopy = {
  local: {
    title: "Bring the rider, the route, and the questions.",
    body: "Book a fitting at R+E Cycles on University Way and turn the sizing conversation into a build plan."
  },
  remote: {
    title: "Start with measurements and a Zoom conversation.",
    body: "Rodriguez publishes a remote path using measurement help, existing bike numbers, and email follow-up."
  },
  known: {
    title: "Use the bike that already feels right.",
    body: "Share the size, make, model, year, or fit sheet from a bike you love so the shop can compare geometry."
  }
};

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const fitButtons = document.querySelectorAll(".fit-choice");
const fitResult = document.querySelector(".fit-result");

fitButtons.forEach(button => {
  button.addEventListener("click", () => {
    fitButtons.forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const copy = fitCopy[button.dataset.fit];
    fitResult.innerHTML = `<h3>${copy.title}</h3><p>${copy.body}</p>`;
  });
});

const swatches = document.querySelectorAll(".swatch");
const bikePreview = document.querySelector("#bike-preview");

swatches.forEach(button => {
  button.addEventListener("click", () => {
    swatches.forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    bikePreview.src = button.dataset.image;
  });
});

document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector("strong").textContent = isOpen ? "-" : "+";
  });
});

const stickyCta = document.querySelector(".sticky-cta");

window.addEventListener(
  "scroll",
  () => {
    stickyCta.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7);
  },
  { passive: true }
);
