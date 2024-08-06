const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {  // Corrige 'classlist' a 'classList'
        const elemento = e.target.closest('.elemento');  // Asegúrate de que este selector sea el correcto
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = ` 
        <td>
            <img src="${elemento.imagen}" width="100" />  // Corrige 'img scr' a 'img src'
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>  // Corrige 'herf' a 'href'
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {  // Corrige el nombre de la función
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {  // Corrige 'classlist' a 'classList'
        e.target.closest('tr').remove();  // Usa 'closest' para encontrar el 'tr' más cercano
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

