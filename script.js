// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Busca el producto por su ID
    const producto = document.querySelector(`.product[data-id="${idProducto}"]`);
    if (producto) {
        // Obtiene el nombre y el precio del producto
        const nombre = producto.querySelector("h3").textContent;
        const precio = producto.querySelector("p").textContent;

        // Crea un objeto con la información del producto
        const item = {
            id: idProducto,
            nombre: nombre,
            precio: precio,
        };

        // Agrega el producto al carrito
        carrito.push(item);
        alert(`¡${nombre} agregado al carrito!`); // Muestra un mensaje
        console.log("Carrito:", carrito); // Muestra el carrito en la consola
    } else {
        alert("Producto no encontrado."); // Mensaje de error
    }
}