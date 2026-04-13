/* =====================
   HOME LOGIC
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const phone = "5491123283606";

  const actions = [
    { selector: ".js-hero-whatsapp", message: "Hola, quiero más información sobre DriveRey." },
    { selector: ".js-vender-whatsapp", message: "Hola, quiero vender mi auto y necesito asesoramiento." },
    { selector: ".js-comprar-whatsapp", message: "Hola, estoy buscando comprar un auto." },
    { selector: ".js-asesoramiento-whatsapp", message: "Hola, necesito asesoramiento sobre una operación." },
    { selector: ".js-final-whatsapp", message: "Hola, me gustaría que evaluemos mi caso." }
  ];

  actions.forEach(({ selector, message }) => {
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener("click", () => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      });
    });
  });
});