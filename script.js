// Fonction principale qui initialise tout lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  // Initialise toutes les fonctions
  setupAnimations();
  setupContactForm();
  setupProjectHover();
  setupThemeSwitch();
  setupScrollAnimations();
  setupBentoGridInteractions();
  // À décommenter si vous ajoutez des filtres de projet
  // setupProjectFilters();
});

function setupBentoGridInteractions() {
  const bentoCards = document.querySelectorAll(".bento-card");
  const grid = document.querySelector(".bento-grid");

  // Effet de propagation au chargement
  setTimeout(() => {
    grid.classList.add("grid-loaded");
  }, 100);

  // Effet de profondeur au hover
  bentoCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Légère augmentation de la luminosité
      card.style.filter = "brightness(1.05)";

      // Animation subtile du contenu
      const content = card.querySelector("h2, h3, p, .skills");
      if (content) {
        content.style.transform = "translateY(-2px)";
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.filter = "brightness(1)";
      const content = card.querySelector("h2, h3, p, .skills");
      if (content) {
        content.style.transform = "translateY(0)";
      }
    });

    // Effet de clic
    card.addEventListener("click", (e) => {
      if (e.target.tagName === "A") return; // Ne pas interférer avec les liens

      card.style.transform = "translateY(-5px) scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 200);
    });
  });

  // Effet parallaxe subtil au scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    bentoCards.forEach((card, index) => {
      const speed = 0.2 + index * 0.05;
      card.style.transform = `translateY(${rate * speed}px)`;
    });
  });
}

function setupAnimations() {
  // Animation des cartes au chargement
  const cards = document.querySelectorAll(".bento-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("fade-in");
  });
}

function setupContactForm() {
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
}

function setupProjectHover() {
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
}

function setupThemeSwitch() {
  // Gestion du dark mode
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");
  const themeText = document.getElementById("theme-text");

  // Applique le thème avant que la page ne soit visible pour éviter le flash
  if (currentTheme) {
    document.documentElement.classList.add("no-transition");
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
      themeText.textContent = "Light Mode";
    }
    // Retire la classe no-transition après un court délai
    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 50);
  }

  // Gestion du changement de thème
  toggleSwitch.addEventListener("change", (e) => {
    const isDark = e.target.checked;
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

function setupScrollAnimations() {
  // Animation des cartes lors du défilement
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".bento-card").forEach((card) => {
    observer.observe(card);
  });
}

// Fonction pour filtrer les projets (à utiliser avec des boutons de filtre)
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tech = btn.dataset.tech;
      filterProjects(tech);
    });
  });
}

function filterProjects(tech) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    if (tech === "all" || project.dataset.tech.includes(tech)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
