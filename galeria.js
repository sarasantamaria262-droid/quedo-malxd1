// Visor de pantallas del software (bloque 2)
(function () {
  const pista = document.getElementById("pista");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  if (!pista) return;

  const items = pista.children;
  let indice = 0;

  function visibles() {
    return window.innerWidth <= 800 ? 1 : 3;
  }

  function actualizar() {
    const maximo = Math.max(0, items.length - visibles());
    indice = Math.min(Math.max(indice, 0), maximo);
    const paso = items[0].getBoundingClientRect().width + 18;
    pista.style.transform = "translateX(" + (-indice * paso) + "px)";
    prev.disabled = indice === 0;
    next.disabled = indice === maximo;
  }

  prev.addEventListener("click", function () { indice--; actualizar(); });
  next.addEventListener("click", function () { indice++; actualizar(); });
  window.addEventListener("resize", actualizar);
  actualizar();
})();
return window.innerWidth <= 800 ? 1 : 4;