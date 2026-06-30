const contenedor = document.getElementById("productos");
const search = document.getElementById("search");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(p => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p>${p.precio}</p>
        <a href="${p.whatsapp}" target="_blank">
          <button class="comprar">Comprar por WhatsApp</button>
        </a>
      </div>
    `;
  });
}

mostrarProductos(productos);

// FILTRO
function filtrar(categoria) {
  if (categoria === "todo") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);
  }
}

// BUSCADOR
search.addEventListener("input", () => {
  const texto = search.value.toLowerCase();

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );

  mostrarProductos(filtrados);
});
