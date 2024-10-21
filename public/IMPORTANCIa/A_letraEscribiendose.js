const textElement = document.getElementById('text');
const text = "El ODS 6 es crucial porque garantiza el acceso universal al agua limpia y el saneamiento, lo cual es fundamental para la salud pública, el bienestar humano y la sostenibilidad ambiental. En un mundo donde millones de personas carecen de acceso adecuado a agua potable y a servicios de saneamiento, este objetivo busca abordar una de las desigualdades más graves que afectan a la humanidad.";
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