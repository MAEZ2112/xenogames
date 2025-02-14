document.querySelector("form").addEventListener("submit", function (event) {
    const email = document.getElementById("txt_Email").value.trim();
    const mensaje = document.getElementById("txtLongText").value.trim();

    let errores = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push("El correo electrónico no es válido.");
    }

    if (mensaje.length < 1) {
        errores.push("Debe escribir el motivo por el cual desea contactarnos");
    }

    if (errores.length > 0) {
        event.preventDefault();
        alert("Errores en el formulario:\n" + errores.join("\n"));
    }
});