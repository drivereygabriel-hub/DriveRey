/* =====================
NAVBAR BEHAVIOR
===================== */

document.addEventListener("click", (e) => {
  const toggle = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar-menu");

  if (!toggle || !menu) return;

  if (e.target === toggle) {
    menu.classList.toggle("active");
  }
});

