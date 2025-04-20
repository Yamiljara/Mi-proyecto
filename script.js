// API Key y URL para el clima
const apiKey = '2cd9dedb4979717941e3c3206c3f13da';
const ciudad = 'Neuquén';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

// Obtener datos del clima
function obtenerClima() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const climaDiv = document.getElementById('clima-contenido');
            const temperatura = data.main.temp;
            const estado = data.weather[0].description;
            const icono = data.weather[0].icon;

            // Mostrar datos en HTML
            climaDiv.innerHTML = `
                <img src="http://openweathermap.org/img/wn/${icono}@2x.png" alt="${estado}" class="icono-clima">
                <p><strong>Temperatura:</strong> ${temperatura}°C</p>
                <p><strong>Estado:</strong> ${estado}</p>
            `;
        })
        .catch(error => {
            const climaDiv = document.getElementById('clima-contenido');
            climaDiv.innerHTML = '<p>No se pudo obtener la información del clima.</p>';
            console.error('Error al obtener datos del clima:', error);
        });
}

// Actualizar clima cada 30 minutos
setInterval(obtenerClima, 1800000);
obtenerClima();

// Obtener fecha y hora dinámicamente
function actualizarFechaHora() {
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };

    let fechaHora = new Date().toLocaleString('es-ES', opciones);
    fechaHora = fechaHora.charAt(0).toUpperCase() + fechaHora.slice(1);
    
    const fechaDiv = document.getElementById('fecha-hora');
    if (fechaDiv) fechaDiv.innerHTML = fechaHora;
}

// Actualizar fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);
document.addEventListener('DOMContentLoaded', actualizarFechaHora);

// Función para cargar el encabezado dinámicamente
function cargarEncabezado() {
    fetch('encabezado.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('encabezado-contenedor').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el encabezado:', error));
}

// Función para cargar la portada dinámicamente
function cargarPortada() {
    fetch('portada.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('portada-contenedor').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la portada:', error));
}

// Script para activar el menú hamburguesa solo en móviles
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            if (window.innerWidth <= 768) { // Solo se activa en móviles
                menu.classList.toggle("show");
            }
        });

        // Cerrar el menú si el usuario hace clic fuera de él en móviles
        document.addEventListener("click", function (event) {
            if (window.innerWidth <= 768 && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    }
});

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarEncabezado(); // Cargar el encabezado
    cargarPortada(); // Cargar la portada
    obtenerClima(); // Obtener clima actual
    actualizarFechaHora(); // Mostrar fecha y hora actual
});
