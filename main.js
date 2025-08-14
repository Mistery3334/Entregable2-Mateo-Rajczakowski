document.addEventListener("DOMContentLoaded", function () {
    let carrito = [];
    const maxCarrito = 5;

  
    const productos = [
        { nombre: "RX 6700", precio: 400, img: "/img/grafica2.png" },
        { nombre: "1660 Super", precio: 250, img: "/img/grafica3.png" },
        { nombre: "RTX 2060", precio: 350, img: "/img/rtx2060.jpg" }
    ];

    
    const productosContainer = document.getElementById("productos-container");
    productos.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "text-center", "mb-3");
        div.innerHTML = `
            <div class="card p-2">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}" style="height:150px; object-fit:contain;">
                <h5 class="card-title mt-2">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button class="btn btn-success add-to-cart" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al carrito</button>
            </div>
        `;
        productosContainer.appendChild(div);
    });

    
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function () {
            if (carrito.length >= maxCarrito) {
                alert(`No puedes agregar más de ${maxCarrito} productos al carrito.`);
                return;
            }
            const nombre = this.dataset.nombre;
            const precio = parseFloat(this.dataset.precio);
            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

 
    function actualizarCarrito() {
        let contador = document.getElementById("contadorCarrito");
        if (!contador) {
            contador = document.createElement("span");
            contador.id = "contadorCarrito";
            contador.style.position = "fixed";
            contador.style.bottom = "25px";
            contador.style.left = "25px";
            contador.style.background = "red";
            contador.style.color = "white";
            contador.style.borderRadius = "50%";
            contador.style.padding = "5px 10px";
            contador.style.fontWeight = "bold";
            document.body.appendChild(contador);
        }
        contador.textContent = carrito.length;
    }

 
    const iconoCarrito = document.querySelector("img[alt='Carrito']");
    iconoCarrito.addEventListener("click", mostrarResumen);

    function mostrarResumen() {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        let mensaje = "Resumen de tu compra:\n\n";
        let total = 0;
        carrito.forEach(p => {
            mensaje += `- ${p.nombre}: $${p.precio}\n`;
            total += p.precio;
        });
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }


    document.getElementById("btn-info").addEventListener("click", function () {
        alert("¡Bienvenido a Sion! Vamos a elegir tu producto.");
        if (carrito.length === 0) {
            alert("No tienes productos en tu carrito. Agrega alguno primero.");
            return;
        }
        mostrarResumen();
        alert("¡Gracias por tu compra! Vuelve pronto.");
    });

    const btnComprarProducto = document.createElement("button");
    btnComprarProducto.id = "btn-comprar-producto";
    btnComprarProducto.textContent = "Comprar un producto";
    btnComprarProducto.classList.add("btn", "btn-warning", "mt-3");
    document.querySelector(".container.text-center.my-4").appendChild(btnComprarProducto);

    btnComprarProducto.addEventListener("click", function() {
        if (carrito.length === 0) {
            alert("No tienes productos en tu carrito. Agrega alguno primero.");
            return;
        }

        let opciones = carrito.map((p, i) => `${i + 1}: ${p.nombre} ($${p.precio})`).join("\n");
        let seleccion = parseInt(prompt("Selecciona un producto para comprar:\n" + opciones));
        
        if (!seleccion || seleccion < 1 || seleccion > carrito.length) {
            alert("Selección inválida.");
            return;
        }

        const producto = carrito[seleccion - 1];
        alert(`¡Bienvenido a Sion!\nHas seleccionado: ${producto.nombre}\nPrecio: $${producto.precio}\n¡Gracias por tu compra!`);
        
    
        carrito.splice(seleccion - 1, 1);
        actualizarCarrito();
    });
});
