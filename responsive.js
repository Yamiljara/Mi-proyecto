// Ajustar dinámicamente el ancho del iframe del widget
window.addEventListener('load', () => {
    const iframe = document.querySelector('.clima-contenedor iframe');
    if (iframe) {
        iframe.style.width = '100%';
        iframe.style.height = 'auto';
    }
});