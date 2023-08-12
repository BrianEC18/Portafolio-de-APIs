// login.js: Manejo de inicio de sesión y validación en la página de inicio de sesión

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario y elementos dentro del formulario
    const form = document.getElementById("login-form");
    const usernameInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const submitButton = form.querySelector(".btn");

    // Agregar evento al enviar el formulario
    form.addEventListener("submit", function (event) {
        // Prevenir el envío predeterminado del formulario
        event.preventDefault();
        
        // Obtener el valor del nombre de usuario y contraseña
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Verificar las credenciales ingresadas
        if (username === "Admin" && password === "123456") {
            // Si las credenciales son correctas, redirigir a la página principal
            window.location.href = "index.html";
        } else {
            // Si las credenciales son incorrectas, mostrar una alerta
            alert("Usuario o contraseña incorrectos.");
        }
    });
});

