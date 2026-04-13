document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".js-whatsapp");

  const phone = "5491123283606";

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const msg = encodeURIComponent(
        "Hola, quiero información para vender mi vehículo con DriveRey."
      );

      window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    });
  });

});