document.addEventListener("DOMContentLoaded", () => {
  console.log("Módulo Inicio cargado correctamente.");

  // --- Lógica del carrusel de actividades ---
  let indice1 = 0;
  const slides1 = document.getElementById('slides1');

  if (slides1) {
    const totalSlides1 = slides1.children.length;

    window.moverCarrusel1 = function(direccion) {
      indice1 = (indice1 + direccion + totalSlides1) % totalSlides1;
      slides1.style.transform = `translateX(-${indice1 * 100}%)`;
    };

    setInterval(() => window.moverCarrusel1(1), 3000);
  }
});