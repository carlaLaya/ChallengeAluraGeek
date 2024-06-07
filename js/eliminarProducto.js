import {  eliminarProducto } from "./conexionAPI";

window.eliminarProducto = eliminarProducto;


document.getElementById('eliminar').addEventListener('click', function() {
    eliminarProducto(idDelProducto);

  });


document.addEventListener('DOMContentLoaded', function() {
  const botonEliminar = document.getElementById('eliminar');
  botonEliminar.addEventListener('click', function() {
      const id = botonEliminar.getAttribute('data-id');
      eliminarProducto(id);
  });
});
