function validateForm() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (name === '' || lastName === '' || age === '' || gender === '' || email === '' || message === '') {
        errorMessage.textContent = 'Todos los campos son obligatorios.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
        return false;
    }

    if (isNaN(age) || age < 1 || age > 120) {
        errorMessage.textContent = 'Por favor, ingresa una edad válida.';
        return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
