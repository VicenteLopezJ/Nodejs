const textElement = document.getElementById('logoText');
const text = "TIDE : Technological Innovations in Desalination Enginnering";
let index = 0;
let repeatCount = 0;
const maxRepeats = 4;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Velocidad de escritura (30 ms entre caracteres)
    } else {
        setTimeout(resetText, 1000); // Espera 10 segundos después de terminar de escribir
    }
}

function resetText() {
    if (repeatCount < maxRepeats) {
        textElement.innerHTML = ""; // Limpia el texto
        index = 0; // Reinicia el índice
        repeatCount++;
        setTimeout(typeText, 0); // Reinicia la animación inmediatamente
    }
}

// Empieza la animación después de 1 segundos
setTimeout(typeText, 1000);