const dashboard = document.getElementById("dashboard");
const botones = document.querySelectorAll("#menu-lateral button");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const modulo = btn.dataset.modulo;
        cargarModulo(modulo);
    });
});

function cargarModulo(modulo) {
    switch(modulo) {
        case "actividades":
            dashboard.innerHTML = `
                <h2>📅 Plan de Actividades</h2>
                <p>Aquí se integrará su gestor de tareas con cronómetro.</p>
            `;
            break;
        case "medidores":
            dashboard.innerHTML = `
                <h2>💧 Monitoreo de Medidores de Agua</h2>
                <p>Aquí se mostrarán las gráficas en tiempo real y alarmas.</p>
            `;
            break;
        case "mapa":
            dashboard.innerHTML = `
                <h2>🗺️ Mapa de Equipos</h2>
                <p>Aquí se integrará su mapa interactivo de la planta.</p>
            `;
            break;
        case "produccion":
            dashboard.innerHTML = `
                <h2>🚚 Carrito / Logística</h2>
                <p>Simulación y monitoreo de los carritos de transporte.</p>
            `;
            break;
        default:
            dashboard.innerHTML = `<p>Módulo no encontrado</p>`;
    }
}
