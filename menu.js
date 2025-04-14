// Alternar el menú desplegable lateral
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('activo');

    const menuIcon = document.querySelector('.menu-hamburguesa');
    if (navbar.classList.contains('activo')) {
        menuIcon.style.display = 'none'; // Oculta el ícono cuando el menú está abierto
    } else {
        menuIcon.style.display = 'block'; // Muestra el ícono cuando el menú está cerrado
    }
}