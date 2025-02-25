import { convertirARomano } from "./num_romanos";

const numeroInput = document.querySelector("#numero");
const form = document.querySelector("#convertir-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number.parseInt(numeroInput.value);

    // Si el número no es válido (por ejemplo, si es negativo o no es un número), mostramos un mensaje de error.
    if (isNaN(numero) || numero <= 0) {
        div.innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
    } else {
        const romano = convertirARomano(numero);
        div.innerHTML = "<p>El número " + numero + " en romano es: " + romano + "</p>";
    }
});
