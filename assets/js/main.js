import "./components.js";

const initializeSite = () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (finePointer && !reducedMotion) {
    const heroArt = document.querySelector(".hero-art");
    const heroGlow = heroArt?.querySelector(".hero-art__glow");
    const magneticButton = document.querySelector(".hero__actions .button");

    if (heroArt && heroGlow) {
      let pointerEvent;
      let pointerFrame = 0;

      heroArt.addEventListener("pointermove", (event) => {
        pointerEvent = event;
        if (pointerFrame) return;

        pointerFrame = window.requestAnimationFrame(() => {
          const bounds = heroArt.getBoundingClientRect();
          const offsetX = ((pointerEvent.clientX - bounds.left) / bounds.width - 0.5) * 18;
          const offsetY = ((pointerEvent.clientY - bounds.top) / bounds.height - 0.5) * 18;
          heroGlow.style.setProperty("--glow-x", `${offsetX.toFixed(1)}px`);
          heroGlow.style.setProperty("--glow-y", `${offsetY.toFixed(1)}px`);
          pointerFrame = 0;
        });
      });

      heroArt.addEventListener("pointerleave", () => {
        heroGlow.style.setProperty("--glow-x", "0px");
        heroGlow.style.setProperty("--glow-y", "0px");
      });
    }

    if (magneticButton) {
      magneticButton.addEventListener("pointermove", (event) => {
        const bounds = magneticButton.getBoundingClientRect();
        const offsetX = Math.max(-7, Math.min(7, (event.clientX - (bounds.left + bounds.width / 2)) * 0.12));
        const offsetY = Math.max(-6, Math.min(6, (event.clientY - (bounds.top + bounds.height / 2)) * 0.12));
        magneticButton.style.setProperty("--magnetic-x", `${offsetX.toFixed(1)}px`);
        magneticButton.style.setProperty("--magnetic-y", `${offsetY.toFixed(1)}px`);
      });

      magneticButton.addEventListener("pointerleave", () => {
        magneticButton.style.setProperty("--magnetic-x", "0px");
        magneticButton.style.setProperty("--magnetic-y", "0px");
      });
    }
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("site-nav--open");
      document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("site-nav--open", !isExpanded);
      document.body.classList.toggle("menu-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  let previousScrollY = window.scrollY;
  const header = document.querySelector(".site-header");
  let scrollScheduled = false;

  const updateHeader = () => {
    if (!header) return;
    const currentScrollY = window.scrollY;
    header.classList.toggle("site-header--scrolled", currentScrollY > 24);
    if (currentScrollY < 120 || currentScrollY < previousScrollY) {
      header.classList.remove("site-header--hidden");
    } else if (!document.body.classList.contains("menu-open")) {
      header.classList.add("site-header--hidden");
    }
    previousScrollY = currentScrollY;
    scrollScheduled = false;
  };

  window.addEventListener("scroll", () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    window.requestAnimationFrame(updateHeader);
  }, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSite, { once: true });
} else {
  initializeSite();
}
