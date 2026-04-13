document.addEventListener("DOMContentLoaded", () => {

  const telefono = "5491123283606";

/* =========================
   HERO + SELL BUTTONS FIX
========================= */

const btnComprar = document.querySelector(".js-whatsapp-comprar");
const btnVender = document.querySelector(".js-whatsapp-vender");

if (btnComprar) {
  btnComprar.addEventListener("click", () => {
    const msg = "Hola, quiero información para comprar un vehículo.";
    window.open(
      `https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });
}

if (btnVender) {
  btnVender.addEventListener("click", () => {
    const msg = "Hola, quiero vender mi auto y necesito información.";
    window.open(
      `https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });
}

  /* =========================
     DATA VEHICULOS
  ========================= */

  const vehiculos = [
    {
      nombre: "Ram 1500 Laramie 5.7 V8 4x4 2016",
      km: "124.000 km",
      ubicacion: "Munro, Vicente López",
      precio: "USD 34.000",
      imagenes: [
        "ram_1500_2016.png",
        "ram_1500_2016.png",
        "ram_1500_2016.png"
      ],
      ficha: `
        Motor: 5.7 V8 naftero<br>
        Año: 2016<br>
        Tracción: 4x4<br>
        Transmisión: Automática<br>
        Versión: Laramie Full
      `
    },
    {
      nombre: "Ford Ranger 3.2 Limited 4x4 2021",
      km: "89.000 km",
      ubicacion: "Munro, Vicente López",
      precio: "USD 31.000",
      imagenes: [
        "Ranger_2021_baku.png",
        "Ranger_2021_baku.png",
        "Ranger_2021_baku.png"
      ],
      ficha: `
        Motor: 3.2 TDCi<br>
        Año: 2021<br>
        Tracción: 4x4<br>
        Transmisión: Automática<br>
        Versión: Limited
      `
    },
    {
      nombre: "Volkswagen Amarok V6 Extreme 2019",
      km: "30.000 km",
      ubicacion: "Munro, Vicente López",
      precio: "USD 40.000",
      imagenes: [
        "Amarok_v6_2019.png",
        "Amarok_v6_2019.png",
        "Amarok_v6_2019.png"
      ],
      ficha: `
        Motor: 3.0 V6<br>
        Año: 2019<br>
        Tracción: 4Motion<br>
        Transmisión: Automática<br>
        Versión: Extreme
      `
    },
    {
      nombre: "Chery Tiggo 5 2.0 CVT 2017",
      km: "95.000 km",
      ubicacion: "Munro, Vicente López",
      precio: "USD 14.300",
      imagenes: [
        "chery_tiggo_2017.png",
        "chery_tiggo_2017.png",
        "chery_tiggo_2017.png"
      ],
      ficha: `
        Motor: 2.0 naftero<br>
        Año: 2017<br>
        Transmisión: CVT<br>
        Versión: Luxury
      `
    }
  ];

  const grid = document.getElementById("vehiculos-grid");

  if (!grid) {
    console.error("❌ No se encontró #vehiculos-grid");
    return;
  }

  /* =========================
     RENDER VEHICULOS
  ========================= */

  vehiculos.forEach((v) => {

    const card = document.createElement("div");
    card.className = "auto";

    card.innerHTML = `
      <div class="carousel">
        <button class="arrow left">‹</button>
        <button class="arrow right">›</button>

        <div class="carousel-track">
          ${v.imagenes.map(img => `<img src="${img}" />`).join("")}
        </div>
      </div>

      <div class="dots"></div>

      <div class="auto-info">
        <h3>${v.nombre}</h3>
        <p class="meta-info">
  <span>${v.km}</span>
  <span class="meta-sep">•</span>
  <span>${v.ubicacion}</span>
</p>
        <div class="precio">${v.precio}</div>

        <div class="acciones">
          <a class="boton js-whatsapp">Consultar</a>
          <button class="boton boton-secundario js-ficha">Ficha técnica</button>
        </div>

        <div class="ficha">${v.ficha}</div>
      </div>
    `;

    grid.appendChild(card);

    /* =========================
       CAROUSEL (FIXED)
    ========================= */

    const track = card.querySelector(".carousel-track");
    const imgs = card.querySelectorAll("img");
    const dots = card.querySelector(".dots");

    let currentIndex = 0;

    imgs.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dots.appendChild(dot);
    });

    const update = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentIndex);
      });
    };

    card.querySelector(".arrow.left").onclick = () => {
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      update();
    };

    card.querySelector(".arrow.right").onclick = () => {
      currentIndex = (currentIndex + 1) % imgs.length;
      update();
    };

    setInterval(() => {
      currentIndex = (currentIndex + 1) % imgs.length;
      update();
    }, 5000);

    /* =========================
       FICHA
    ========================= */

    card.querySelector(".js-ficha").addEventListener("click", () => {
      const ficha = card.querySelector(".ficha");
      ficha.style.display = ficha.style.display === "block" ? "none" : "block";
    });

    /* =========================
       WHATSAPP
    ========================= */

    card.querySelector(".js-whatsapp").addEventListener("click", () => {
      const msg = `Hola, quiero información sobre el ${v.nombre}`;
      window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

  });

});