document.addEventListener("DOMContentLoaded", () => {

  const telefono = "5491123283606";

  const botones = document.querySelectorAll(".js-proceso-whatsapp");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {

      const mensaje = encodeURIComponent(
        "Hola, quiero información sobre el proceso de venta en DriveRey."
      );

      window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
    });
  });

});