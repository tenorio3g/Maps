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
        <input type="text" id="busqueda" placeholder="Buscar número de equipo">
        <button onclick="buscarUbicacion()">Buscar</button>
        <div id="mapa">
            <img id="imagenMapa" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZj7SJ-_4B_Gpo5-ZRQM11xOKo_e_YSL4gc_xMF7VnwNtsm59gYutVg81ySDbe_1wNZcKuO2ahNapz4l51aO7pPcaP2kNbUdSFndlPaBLKOvGS_0fWqg_824txjcM1AmowixFBJQP5h1DHlWBp9EAzb4xGISZeZjr9_Yjouh_OEupla2JzFvuPGJEInPE/s1029/alcom%20plano.jpg" alt="Mapa de la Planta" style="width:100%;">
            <div id="coords"></div>
        </div>
        <div id="info"></div>
        <div id="modalImagen">
            <span class="close" onclick="cerrarModal()">&times;</span>
            <img id="imagenAmpliada" src="" alt="Imagen ampliada">
        </div>
        <div id="masInfo">
            <span class="close" onclick="cerrarMasInfo()">&times;</span>
            <div id="contenidoMasInfo"></div>
        </div>
    `;
    inicializarMapa(); // Llamamos a la función para inicializar los puntos
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
