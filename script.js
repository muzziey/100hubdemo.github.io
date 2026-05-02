// Keep this clean.
// Add animations later ONLY if needed.
const filterButtons = document.querySelectorAll('.filter-buttons button');
const talentCards = document.querySelectorAll('.talent-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    talentCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.getAttribute('data-category') === filter ? 'block' : 'none';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".talent-card");

  cards.forEach(card => {
    const delay = card.dataset.delay || "0s";
    setTimeout(() => {
      card.classList.add("show");
    }, parseFloat(delay) * 1000);
  });
});
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("dropdownMenu");

toggle.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});
const steps = document.querySelectorAll(".process li");

function setActiveStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

// click interaction (selection behavior)
steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    setActiveStep(index);
  });
});

// scroll-based auto focus (Apple-style story mode)
window.addEventListener("scroll", () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    const distance = Math.abs(rect.top - window.innerHeight / 2);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  setActiveStep(closestIndex);
});
