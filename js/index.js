//PRODUCTOS
const productos = [
  //LUNCHERAS
  {
    id: "lunchera-01",
    titulo: "Lunchera 01",
    imagen: "./img/luncheras/01.jpeg",
    categoria: {
      nombre: "Luncheras",
      id: "luncheras",
    },
    precio: 1000,
  },
  {
    id: "lunchera-02",
    titulo: "Lunchera 02",
    imagen: "./img/luncheras/02.jpeg",
    categoria: {
      nombre: "Luncheras",
      id: "luncheras",
    },
    precio: 2000,
  },
  {
    id: "lunchera-03",
    titulo: "Lunchera 03",
    imagen: "./img/luncheras/03.jpeg",
    categoria: {
      nombre: "Luncheras",
      id: "luncheras",
    },
    precio: 4000,
  },
  {
    id: "Lunchera-04",
    titulo: "Lunchera 04",
    imagen: "./img/luncheras/04.jpeg",
    categoria: {
      nombre: "Luncheras",
      id: "luncheras",
    },
    precio: 5000,
  },
  {
    id: "lunchera-05",
    titulo: "Lunchera 05",
    imagen: "./img/luncheras/05.jpeg",
    categoria: {
      nombre: "Luncheras",
      id: "luncheras",
    },
    precio: 4500,
  },
  //LONAXL
  {
    id: "lonaxl-01",
    titulo: "LonaXl 01",
    imagen: "./img/lonasxl/01.jpeg",
    categoria: {
      nombre: "LonasXl",
      id: "lonaxl",
    },
    precio: 1000,
  },
  {
    id: "lonaxl-02",
    titulo: "Lonaxl 02",
    imagen: "./img/lonasxl/09.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 2000,
  },
  {
    id: "lonaxl-03",
    titulo: "Lonaxl 03",
    imagen: "./img/lonasxl/03.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 4000,
  },
  {
    id: "lonaxl-04",
    titulo: "Lonaxl 04",
    imagen: "./img/lonasxl/10.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 3000,
  },
  {
    id: "lonaxl-05",
    titulo: "Lonaxl 05",
    imagen: "./img/lonasxl/05.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 2500,
  },
  {
    id: "lonaxl-06",
    titulo: "Lonaxl 06",
    imagen: "./img/lonasxl/06.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 1200,
  },
  {
    id: "lonaxl-07",
    titulo: "Lonaxl 07",
    imagen: "./img/lonasxl/11.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 500,
  },
  {
    id: "lonaxl-08",
    titulo: "Lonaxl 08",
    imagen: "./img/lonasxl/10.jpeg",
    categoria: {
      nombre: "Lonasxl",
      id: "lonasxl",
    },
    precio: 1250,
  },
  // MATERAS
  {
    id: "matera-01",
    titulo: "Matera 01",
    imagen: "./img/materas/01.jpeg",
    categoria: {
      nombre: "Materas",
      id: "materas",
    },
    precio: 4500,
  },
  {
    id: "matera-02",
    titulo: "Matera 02",
    imagen: "./img/materas/02.jpeg",
    categoria: {
      nombre: "Materas",
      id: "materas",
    },
    precio: 10200,
  },
  {
    id: "matera-03",
    titulo: "Matera 03",
    imagen: "./img/materas/03.jpeg",
    categoria: {
      nombre: "Materas",
      id: "materas",
    },
    precio: 16200,
  },
  {
    id: "matera-04",
    titulo: "Matera 04",
    imagen: "./img/materas/04.jpeg",
    categoria: {
      nombre: "Materas",
      id: "materas",
    },
    precio: 13200,
  },
  {
    id: "matera-05",
    titulo: "Matera 05",
    imagen: "./img/materas/05.jpeg",
    categoria: {
      nombre: "Materas",
      id: "materas",
    },
    precio: 16500,
  },
  //MASCOTAS
  {
    id: "mascota-01",
    titulo: "Mascota 01",
    imagen: "./img/mascotas/01.jpeg",
    categoria: {
      nombre: "Masctoas",
      id: "mascotas",
    },
    precio: 3000,
  },
  {
    id: "mascota-02",
    titulo: "Mascota 02",
    imagen: "./img/mascotas/02.jpeg",
    categoria: {
      nombre: "Masctoas",
      id: "mascotas",
    },
    precio: 4000,
  },
  {
    id: "mascota-03",
    titulo: "Mascota 03",
    imagen: "./img/mascotas/03.jpeg",
    categoria: {
      nombre: "Masctoas",
      id: "mascotas",
    },
    precio: 2500,
  },
  {
    id: "mascota-04",
    titulo: "Mascota 04",
    imagen: "./img/mascotas/04.jpeg",
    categoria: {
      nombre: "Masctoas",
      id: "mascotas",
    },
    precio: 3100,
  },
  {
    id: "mascota-05",
    titulo: "Mascota 05",
    imagen: "./img/mascotas/05.jpeg",
    categoria: {
      nombre: "Masctoas",
      id: "mascotas",
    },
    precio: 4200,
  },
];
// DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
        <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
          <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;

    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
  console.log(botonesAgregar);
}
cargarProductos(productos);

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategoria.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
