// Controla el menú desplegable lateral
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-hamburguesa');
    const closeButton = document.querySelector('.cerrar-menu');

    navbar.classList.toggle('activo');

    if (navbar.classList.contains('activo')) {
        menuIcon.style.display = 'none'; // Oculta el ícono de hamburguesa
        closeButton.style.display = 'block'; // Muestra el botón de cierre
    } else {
        menuIcon.style.display = 'block'; // Muestra el ícono de hamburguesa
        closeButton.style.display = 'none'; // Oculta el botón de cierre
    }
}
