document.addEventListener("DOMContentLoaded", () => {
    const text = "airesnuevosNQN"; // Texto para el efecto
    const typewriterElement = document.getElementById("typewriter");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Velocidad de escritura (en milisegundos)
        }
    }

    typeEffect();
});