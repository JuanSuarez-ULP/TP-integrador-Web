function validarForm() {
    const form = document.getElementById("alquiler-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let esValido = true;
        const nombreInput = document.getElementById("nombre");
        const correoInput = document.getElementById("email");
        const telefonoInput = document.getElementById("telefono");
        const fechaInput = document.getElementById("fecha");

        const nombreValido = nombreInput.value.trim();
        const correoValido = correoInput.value.trim();
        const telefonoValido = telefonoInput.value.trim();
        const fechaValida = fechaInput.value.trim();

        limpiarErrores();

        if (nombreValido.length < 3) {
            mostrarError("error-nombre", "El nombre debe contener por lo menos 3 caracteres")
            esValido = false;
        }

        const codigoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!codigoEmail.test(correoValido)) {
            mostrarError("error-email", "Ingrese un correo válido (ejemplo@correo.com)");
            esValido = false;
        }

        const codigoTelefono = /^[0-9\s\-+]{7,15}$/;
        if (!codigoTelefono.test(telefonoValido)) {
            mostrarError("error-telefono", "Ingrese un telefono válido (minimo 7 números)");
            esValido = false;
        }

        if (!fechaValida) {
            mostrarError("error-fecha", "Por favor seleccione una fecha");
            esValido = false;
        }

        if (esValido){
            renderSummary({
                nombre: nombreValido, email: correoValido, telefono: telefonoValido, fecha: fechaValida, hora: document.getElementById("hora").value
            });

            form.reset();
        }
    });
}

function mostrarError(elementId, mensaje) {
    const elementoConError = document.getElementById(elementId)
    if (elementoConError) {
        elementoConError.textContent = mensaje;
    }
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    errores.forEach(elemento => elemento.textContent = "");
}

function renderSummary(data) {
    const contenedor = document.getElementById("contenedor-datos");
    contenedor.innerHTML = "";

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-datos";

    const titulo = document.createElement("h3");
    titulo.className = "titulo-datos";

    const lista = document.createElement("ul");

    const campos = [
        `Cliente: ${data.nombre}`,
        `Correo Electrónico: ${data.email}`,
        `Telefono: ${data.telefono}`,
        `Fecha de reserva: ${data.fecha}`,
        `Horario: ${data.hora}`
    ];

    campos.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        lista.appendChild(li);
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(lista);
    contenedor.appendChild(tarjeta);
}

validarForm();