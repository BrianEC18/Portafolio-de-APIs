// index.js: Manejo de enlaces y cierre de sesión en la página principal

// Obtener elementos de los iconos de enlace
const linkButtons = document.querySelectorAll(".icons");
const logoutButton = document.querySelector(".logout-button");

// Agregar eventos a los iconos de enlace
linkButtons.forEach(link => {
    link.addEventListener("click", function (e) {
        // Prevenir comportamiento predeterminado
        e.preventDefault();

        // Obtener enlace y copiarlo al portapapeles
        const linkURL = this.parentElement.getAttribute("href");
        navigator.clipboard.writeText(linkURL)
            .then(() => {
                alert("Enlace copiado en el portapapeles");
            })
            .catch(error => {
                console.error("Error al copiar el enlace:", error);
            });
    });
});

// Agregar evento al botón de cierre de sesión
logoutButton.addEventListener("click", function () {
    // Confirmar cierre de sesión
    const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
    
    // Si el usuario confirma el cierre de sesión
    if (confirmLogout) {
        // Eliminar datos de inicio de sesión almacenados en localStorage
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("loginTime");
        
        // Redirigir a la página de inicio de sesión
        window.location.href = "login.html";
    }
});

