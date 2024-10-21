const textElement = document.getElementById('text');
const text = "¡Sorpréndete con lo que nuestro producto puede hacer por ti! Innovador, impactante y hecho para superarte. ¿Te atreves a probarlo?";
let index = 0;
let repeatCount = 0;
const maxRepeats = 4;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 30); // Velocidad de escritura (30 ms entre caracteres)
    } else {
        setTimeout(resetText, 14000); // Espera 6 segundos después de terminar de escribir
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

// Empieza la animación después de 3 segundos
setTimeout(typeText, 1000);