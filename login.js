document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const rememberCheckbox = form.querySelector("input[type='checkbox']");
    const submitButton = form.querySelector(".btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "Admin" && password === "123456") {
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
