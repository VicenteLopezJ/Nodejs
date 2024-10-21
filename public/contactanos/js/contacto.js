document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los campos y errores
    const fields = [
      { id: 'nombre', regex: /^[a-zA-Z\s]+$/, error: 'El nombre debe contener solo letras.' },
      { id: 'gmail', regex: /@gmail\.com$/, error: 'El correo debe ser de Gmail.' },
      { id: 'celular', regex: /^\d{9}$/, error: 'El número de celular debe contener exactamente 9 dígitos.' }
    ];
  
    let isValid = true;
  
    // Validar todos los campos
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorElement = document.getElementById(field.id + 'Error');
      if (!field.regex.test(input.value)) {
        errorElement.textContent = field.error;
        errorElement.style.display = 'block';
        isValid = false;
      } else {
        errorElement.style.display = 'none';
      }
    });
  
    if (isValid) {
      alert('Formulario enviado exitosamente');
    }
  });