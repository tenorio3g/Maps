function abrirModulo(url) {
    window.open(url, "_blank");
}

// Opcional: cambiar indicadores dinámicamente según datos reales
const estadosModulos = {
    actividades: "verde",
    medidores: "amarillo",
    mapa: "verde",
    carrito: "rojo"
};

document.querySelectorAll(".botones-dashboard button").forEach(btn => {
    const text = btn.innerText.toLowerCase();
    for (const modulo in estadosModulos) {
        if (text.includes(modulo)) {
            const span = btn.querySelector(".estado");
            if(span) span.className = "estado estado-" + estadosModulos[modulo];
        }
    }
});
