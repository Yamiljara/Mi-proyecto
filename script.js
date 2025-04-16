// API Key y URL
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

// Actualizar cada 30 minutos
obtenerClima();
setInterval(obtenerClima, 1800000);
