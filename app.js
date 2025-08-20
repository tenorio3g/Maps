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
function inicializarMapa() {
    const ubicaciones = {
        1: { top: '48px', left: '421px', descripcion: 'Aire acondicionado principal', foto: 'https://acortar.link/NUl0j7', info: 'Ubicado en la zona central de la planta.' },
        2: { top: '95px', left: '429px', descripcion: 'Aire acondicionado de oficina', foto: 'https://acortar.link/A4oL1V', info: 'Oficina principal, ambiente de trabajo.' },
        Chiller11: { top: '251px', left: '327px', descripcion: 'Chiller 11', foto: 'https://acortar.link/NUl0j7', info: 'Chiller principal zona 11.' },
        Subestacion5: { top: '8px', left: '423px', descripcion: 'Subestación 5', foto: 'https://acortar.link/NUl0j7', info: 'Subestación eléctrica principal.' },
    };

    const mapa = document.getElementById('mapa');
    const info = document.getElementById('info');

    window.buscarUbicacion = function() {
        const numero = document.getElementById('busqueda').value;

        // Limpiar ubicaciones anteriores
        document.querySelectorAll('.ubicacion').forEach(el => el.remove());
        cerrarMasInfo();
        info.style.display = 'none';

        if (ubicaciones[numero]) {
            const u = ubicaciones[numero];
            const marcador = document.createElement('div');
            marcador.className = 'ubicacion';
            marcador.style.top = u.top;
            marcador.style.left = u.left;
            mapa.appendChild(marcador);

            marcador.addEventListener('click', () => {
                info.style.display = 'block';
                info.style.top = u.top;
                info.style.left = `${parseInt(u.left) + 30}px`;
                info.innerHTML = `
                    <div style="position: relative; padding: 20px;">
                        <span onclick="cerrarInfo()" style="position: absolute; top: -10px; right: -10px; cursor: pointer; background-color: white; color: black; padding: 5px 10px; border-radius: 50%; font-weight: bold; z-index: 100;">X</span>
                        <p onclick="abrirMasInfo('${numero}')">${u.descripcion}</p>
                        <img src="${u.foto}" alt="Foto del equipo ${numero}" onclick="ampliarImagen('${u.foto}')" style="margin-top: 10px;">
                    </div>
                `;
            });
        } else {
            alert('Número de equipo no encontrado');
        }
    };

    window.ampliarImagen = function(foto) {
        const modal = document.getElementById('modalImagen');
        const imagenAmpliada = document.getElementById('imagenAmpliada');
        imagenAmpliada.src = foto;
        modal.style.display = 'block';
    };

    window.cerrarModal = function() { document.getElementById('modalImagen').style.display = 'none'; };
    window.abrirMasInfo = function(numero) { 
        document.getElementById('contenidoMasInfo').innerHTML = `<p>${ubicaciones[numero].info}</p>`; 
        document.getElementById('masInfo').style.display = 'block';
    };
    window.cerrarMasInfo = function() { document.getElementById('masInfo').style.display = 'none'; };
    window.cerrarInfo = function() { info.style.display = 'none'; };

    // Coordenadas en tiempo real
    const imagenMapa = document.getElementById('imagenMapa');
    const coordsDisplay = document.getElementById('coords');

    imagenMapa.addEventListener('mousemove', (event) => {
        const rect = imagenMapa.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        coordsDisplay.innerHTML = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
    });

    imagenMapa.addEventListener('click', (event) => {
        const rect = imagenMapa.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        alert(`Top: ${y}px, Left: ${x}px`);
    });
}
