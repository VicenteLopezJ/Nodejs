const textElement = document.getElementById('text');
const text = "La historia de los Objetivos de Desarrollo Sostenible (ODS) está estrechamente ligada a la evolución de los desafíos globales y el compromiso de la comunidad internacional por enfrentarlos de manera colaborativa. A continuación, te presento una narrativa que cuenta su origen, evolución y proceso de selección.";
let index = 0;
let repeatCount = 0;
const maxRepeats = 4;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 30); // Velocidad de escritura (30 ms entre caracteres)
    } else {
        setTimeout(resetText, 10000); // Espera 10 segundos después de terminar de escribir
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