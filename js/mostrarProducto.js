import { mostrarProducto, eliminarProducto } from "./conexionAPI.js";

const listaProducto = document.querySelector("[data-lista]");

export default function createCard(imagen, nombre, status, gender, id) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="bg-dark text-light p-4 mb-2">
                        <img src="${imagen}" class="card-img-top" alt="${nombre}">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">${nombre}</h5>
                            <p class="card-text"><span class="fw-bold">Status:</span> ${status}</p>
                            <p class="card-text"><span class="fw-bold">Género:</span> ${gender}</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-danger animate__animated animate__pulse animate__infinite eliminar-btn" data-id="${id}">Eliminar</button>
                            </div>
                        </div>
                    </div> 

     
    `;

  return card;
}

const render = async () => {
  try {
    const listaProductos = await mostrarProducto();

    listaProductos.forEach((producto) => {
      const contenedor = document.querySelector("[data-lista]");

      contenedor.appendChild(
        createCard(
          producto.imagen,
          producto.nombre,
          producto.status,
          producto.gender,
          producto.id // Asignar el ID del producto a cada tarjeta
        )
      );
    });

    // Agregar evento de clic a cada botón "Eliminar"
    const botonesEliminar = document.querySelectorAll(".eliminar-btn");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", async () => {
        const productoId = boton.getAttribute("data-id");
        try {
          await eliminarProducto(productoId);
          // Recargar la lista de productos después de eliminar
          await render();
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

render();

