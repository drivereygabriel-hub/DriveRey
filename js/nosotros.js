document.addEventListener("DOMContentLoaded", () => {

  const phone = "5491123283606";

  const buttons = document.querySelectorAll(".js-nosotros-whatsapp");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const msg = encodeURIComponent(
        "Hola, quiero coordinar una cita para evaluar mi vehículo con DriveRey."
      );

      window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    });
  });

});