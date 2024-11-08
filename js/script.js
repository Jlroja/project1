document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Previene el envío para hacer la validación

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
    } else {
        alert("¡Gracias por tu mensaje!");
        this.submit(); // Envía el formulario si todo es válido
    }
});