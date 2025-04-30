// Animation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".bento-card");

  cards.forEach((card, index) => {
    // Délai d'animation différent pour chaque carte
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("fade-in");
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Message envoyé! (Cette fonctionnalité est en démonstration. Pour un vrai formulaire, il faudrait utiliser un service comme Formspree ou Netlify Forms)"
      );
      contactForm.reset();
    });
  }

  // Animation au survol des projets
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });
});

// Gestion du dark mode
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const themeText = document.getElementById("theme-text");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    themeText.textContent = "Light Mode";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeText.textContent = "Light Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeText.textContent = "Dark Mode";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
