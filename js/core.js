/* =====================
   CORE - COMPONENT LOADER
===================== */

async function loadComponent(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;

  try {
    const res = await fetch(url);
    const html = await res.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${url}`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#navbar-root", "components/navbar.html");
  loadComponent("#footer-root", "components/footer.html");
});

/* =====================
WHATSAPP FLOAT SMART SYSTEM
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const phone = "5491123283606";

  const btn = document.querySelector(".js-whatsapp-float");
  const pageType = document.body.dataset.wa;

  if (!btn) return;

  const messages = {
    home:
      "Hola, quiero información general sobre DriveRey y cómo funciona el servicio.",
    
    vehiculos:
      "Hola, quiero consultar por los vehículos disponibles en DriveRey.",
    
    proceso:
      "Hola, quiero entender el proceso de venta y cómo puedo empezar.",
    
    nosotros:
      "Hola, quiero coordinar una evaluación y conocer más sobre DriveRey.",
    
    resenas:
      "Hola, quiero vender mi auto y me gustaría una experiencia como la de sus clientes."
  };

  const defaultMsg =
    "Hola, quiero información sobre DriveRey.";

  btn.addEventListener("click", () => {
    const message = messages[pageType] || defaultMsg;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});