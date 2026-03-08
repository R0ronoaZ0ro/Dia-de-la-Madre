// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

// Función reutilizable para ejecutar la «sorpresa» (audio + mostrar contenido)

let sorpresaActivada = false; // evita re-activaciones múltiples

function activarSorpresa(el) {
  if (sorpresaActivada) return;
  sorpresaActivada = true;

  if (soplido) {
    soplido.currentTime = 0;
    soplido.play();
  }

  // Si se pasa un elemento visual (como la llama), podemos aplicar la animación "apagar"
  if (el && el.style) {
    el.style.animation = "apagar 0.5s forwards";
  }

  setTimeout(() => {
    if (cancion) {
      cancion.currentTime = 0;
      cancion.play();
    }
    if (overlay) overlay.classList.add("hidden");

    // Hacer desaparecer el botón si existe
    const boton = document.getElementById('botonPresiona');
    if (boton) {
      boton.classList.add('desaparecer');
      // Tras la transición, retiramos del flujo para evitar tab-navegación
      setTimeout(() => {
        try { boton.style.display = 'none'; } catch (e) {}
      }, 600);
    }
  }, 1000);
}

// Si la llama existe (si no fue eliminada), enlazamos el evento; de lo contrario no hacemos nada
if (llama) {
  llama.addEventListener("click", () => activarSorpresa(llama));
}

// Enlazar el nuevo botón que reemplaza la llama
const botonPresiona = document.getElementById('botonPresiona');
if (botonPresiona) {
  botonPresiona.addEventListener('click', () => activarSorpresa(botonPresiona));
}
