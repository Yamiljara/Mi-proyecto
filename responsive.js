// Ajustar dinámicamente el ancho del iframe del widget
window.addEventListener('load', () => {
    const iframe = document.querySelector('.clima-contenedor iframe');
    if (iframe) {
        iframe.style.width = '100%'; // Ajusta el ancho al 100% del contenedor
        iframe.style.height = 'auto'; // Ajusta automáticamente la altura
    }
});