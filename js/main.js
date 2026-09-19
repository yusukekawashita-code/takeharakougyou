const header = document.querySelector(".p-header");
const hamburger = document.querySelector(".p-header__hamburger");
const drawerLinks = document.querySelectorAll(".p-header__drawer-link");

if (header && hamburger) {
  const closeMenu = () => {
    header.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "メニューを開く");
    document.body.classList.remove("is-menu-open");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");

    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");

    document.body.classList.toggle("is-menu-open", isOpen);
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 999) {
      closeMenu();
    }
  });
}

const worksLightboxButtons = document.querySelectorAll(".js-works-lightbox");
const worksLightboxModal = document.querySelector(".js-works-lightbox-modal");
const worksLightboxImage = document.querySelector(".js-works-lightbox-image");
const worksLightboxClose = document.querySelector(".js-works-lightbox-close");

if (worksLightboxButtons.length && worksLightboxModal && worksLightboxImage && worksLightboxClose) {
  const closeWorksLightbox = () => {
    worksLightboxModal.classList.remove("is-open");
    worksLightboxModal.setAttribute("aria-hidden", "true");
    worksLightboxImage.src = "";
    worksLightboxImage.alt = "";
    document.body.style.overflow = "";
  };

  worksLightboxButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");

      worksLightboxImage.src = button.dataset.image;
      worksLightboxImage.alt = image ? image.alt : "";
      worksLightboxModal.classList.add("is-open");
      worksLightboxModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  worksLightboxClose.addEventListener("click", closeWorksLightbox);

  worksLightboxModal.addEventListener("click", (event) => {
    if (event.target === worksLightboxModal || event.target.classList.contains("p-service-works__lightbox-inner")) {
      closeWorksLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && worksLightboxModal.classList.contains("is-open")) {
      closeWorksLightbox();
    }
  });
}
