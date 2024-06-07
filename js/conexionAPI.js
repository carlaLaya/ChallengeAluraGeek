//PETICIONES GET PARA MOSTRAR LOS PRODUCTOS

export async function mostrarProducto() {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}
  
  //PETICIONES POST PARA CARGAR PRODUCTOS
  
  export async function cargarProducto(
      imagen,
      nombre,
      status,
      gender
    ) {
      const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          imagen: imagen,
          nombre: nombre,
          status: status,
          gender: gender,
          
        }),
      });
      if (!conexion.ok) {
        throw new Error("No fue posible cargar el Cliente");
      }
      const conexionConvertida = await conexion.json();
  
      return conexionConvertida;
  }

  
  
  //PETICIONES DELETE PARA ELIMINAR PRODUCTOS
  
  export async function eliminarProducto(id) {
  
    try {
      const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
  
      if (!conexion.ok) {
        throw new Error("No fue posible eliminar el cliente");
      }
  
      await mostrarProducto();
  
      console.log("Cliente eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
    }
  }
  
  
  /*export async function eliminarCliente(id) {
      console.log("aca elimina el clienbte");
      Swal.fire({
        title: "Atención! ",
        text: "Está a punto de eliminar un cliente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar cliente !"
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            // Realizar la solicitud DELETE para eliminar el cliente específico
            const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
              },
            });
          } catch (error) {
            // Verificar si la eliminación fue exitosa
            if (!conexion.ok) {
              throw new Error("No fue posible cargar el Cliente");
            }
            // Recargar la lista de clientes después de eliminar
      
            mostrarProducto();
      
            const conexionConvertida = await conexion.json();
            return conexionConvertida;
          }
          Swal.fire({
            title: "Eliminado!",
            text: "Este personaje ha sido eliminado",
            icon: "success"
          });
        }
      });
  
      
  }
 */
  export const conexionAPI = {
    mostrarProducto,
    cargarProducto,
    eliminarProducto
  };
  