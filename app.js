// Referencias
const contenido = document.getElementById("contenido");
const btnLeccion = document.getElementById("btnLeccion");
const btnEjercicio = document.getElementById("btnEjercicio");
const btnSimulador = document.getElementById("btnSimulador");

// Funciones
function mostrarLecciones() {
  contenido.innerHTML = `
    <h2>Lecciones de PLC</h2>
    <p>Aquí aparecerán las lecciones paso a paso.</p>
  `;
}

function mostrarEjercicios() {
  contenido.innerHTML = `
    <h2>Ejercicios Prácticos</h2>
    <p>Aquí estarán los ejercicios interactivos.</p>
  `;
}

function mostrarSimulador() {
  contenido.innerHTML = `
    <h2>Simulador de PLC</h2>
    <p>Aquí podrás probar la lógica en un simulador.</p>
  `;
}

// Eventos
btnLeccion.addEventListener("click", mostrarLecciones);
btnEjercicio.addEventListener("click", mostrarEjercicios);
btnSimulador.addEventListener("click", mostrarSimulador);
