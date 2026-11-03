document.addEventListener("DOMContentLoaded", () => {
  function menuMobile() {
    const botonMenu = document.getElementById("menu-toggle");
    const listaMenu = document.querySelector(".nav-list");

    if (!botonMenu || !listaMenu) return;

    botonMenu.addEventListener("click", () => {
      listaMenu.classList.toggle("mostrar");
      botonMenu.classList.toggle("activo");
    });
  }

  menuMobile();
});
