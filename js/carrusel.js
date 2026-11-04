document.addEventListener("DOMContentLoaded", () => {
  const carrusel = [
    {
      src: "Imagenes/timosportimg2.jpeg",
      alt: "imagen 2",
      caption: "Cesped sintético de alta calidad para mayor rendimiento y durabilidad",
    },
    {
      src: "Imagenes/timosportimg3.jpeg",
      alt: "imagen 3",
      caption: "Iluminación LED de alta potencia para partidos nocturnos",
    },
    {
      src: "Imagenes/timosportimg4.jpeg",
      alt: "imagen 4",
      caption: "Entrada al campo de juego",
    },
    {
      src: "Imagenes/timosportimg5.jpeg",
      alt: "imagen 4",
      caption: "Vista a uno de los arcos de la cancha",
    },
    {
      src: "Imagenes/timosportimg6.jpeg",
      alt: "imagen 4",
      caption: "Entrada al complejo deportivo",
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

    function siguienteImagen() {
     indiceActual = (indiceActual + 1) % carrusel.length;
     deslizarImagen(indiceActual);
  }

    function iniciarIntervalo() {
     intervalo = setInterval(siguienteImagen, 5000);
  }

    function detenerIntervalo() {
     clearInterval(intervalo);
  }

    prevBtn.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + carrusel.length) % carrusel.length;
      deslizarImagen(indiceActual);
      detenerIntervalo();
      iniciarIntervalo();
    });

    nextBtn.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % carrusel.length;
      deslizarImagen(indiceActual);
      detenerIntervalo();
      iniciarIntervalo();
    });

    deslizarImagen(indiceActual);
    iniciarIntervalo();
  }

  carruselInicio();
});
