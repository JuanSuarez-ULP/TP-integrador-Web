document.addEventListener("DOMContentLoaded", () => {
  const carrusel = [
    {
      src: "Imagenes/Lionel Messi Fc BARCELONA 2010-2011.jpg",
      alt: "imagen 1",
      caption: "texto de prueba 1",
    },
    {
      src: "Imagenes/descarga.jpg",
      alt: "imagen 2",
      caption: "texto de prueba 2",
    },
    {
      src: "Imagenes/messi balon de oror.jpg",
      alt: "imagen 3",
      caption: "texto de prueba 3",
    },
  ];

  let indiceActual = 0;

  function carruselInicio() {
    const imgElement = document.getElementById("carrusel-img");
    const captionElement = document.getElementById("carrusel-caption");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (!imgElement) return;

    function deslizarImagen(indice) {
      const item = carrusel[indice];
      imgElement.src = item.src;
      imgElement.alt = item.alt;
      captionElement.textContent = item.caption;
    }

    prevBtn.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + carrusel.length) % carrusel.length;
      deslizarImagen(indiceActual);
    });

    nextBtn.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % carrusel.length;
      deslizarImagen(indiceActual);
    });

    deslizarImagen(indiceActual);
  }

  carruselInicio();
});
