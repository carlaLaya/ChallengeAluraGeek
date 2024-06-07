import { cargarProducto } from "./conexionAPI.js";

export async function enviarFormulario(evento) {
    evento.preventDefault();
    
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const status = document.querySelector("[data-status]").value;
    const gender = document.querySelector("[data-gender]").value;

    try {
        const resultado = await cargarProducto(imagen, nombre, status, gender);
        console.log(resultado); 
    } catch (e) {
        console.log("Error en la carga del cliente", e); 
    }
}

const form = document.querySelector("[data-form]");
form.addEventListener("submit", enviarFormulario);



