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
