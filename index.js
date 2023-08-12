const linkButtons = document.querySelectorAll(".icons");
const logoutButton = document.querySelector(".logout-button");

linkButtons.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const getLink = this.parentElement.getAttribute("href");
        navigator.clipboard.writeText(getLink)
            .then(() => {
                alert("Enlace copiado en el portapapeles");
            })
            .catch(error => {
                console.error("Error al copiar el enlace:", error);
            });
    });
});

logoutButton.addEventListener("click", function () {
    const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("loginTime");
        window.location.href = "login.html";
    }
});

/*   __            ^---^  __
     \ \    ______(='w'=)/ / <(PasemeEeEEeEEeeEeeeeEe!)
      \ \_/            |/ /
       \__      ___   ___/   
          | || |   | |
          |_||_|   |_|
*/