/*
 * app.js - JavaScript que construye la interfaz
 *
 * Los NOMBRES de las funciones y sus parámetros no se cambian: el
 * verificador las llama así. Lo que hay dentro lo escribes tú.
 *
 * Las funciones de los issues #3 y #4 (crearCard, generarHTML, filtrar,
 * buscar, ordenar, aplicarFiltros) NO tocan el DOM: reciben datos y
 * devuelven datos o texto. Solo actualizarVista() e iniciar() usan document.
 *
 * Consulta:
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *   https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 *   https://es.javascript.info/array-methods
 */

// Estado de la interfaz: lo que la persona eligió en los controles.
const estado = {
  categoria: 'todas',
  texto: '',
  orden: 'nombre-asc'
};

/* ---------------------------------------------------------------
 * Issue #3 - Datos a tarjetas
 * --------------------------------------------------------------- */

// TODO: devuelve un TEXTO con el HTML de UNA tarjeta.
// Debe tener: un article con clase card (dentro de una columna si tu
// #catalogo no usa row-cols), la imagen con src = item.imagen y un alt
// descriptivo, card-body, un h3 con clase card-title y el nombre,
// un badge con la categoría, la descripción, el valor de
// item[configuracion.campoOrden] con su etiqueta, y tus 2 campos propios.
function crearCard(item) {
  const valorFormateado = Number(item[configuracion.campoOrden]).toLocaleString('es-CO');
  return `
    <div class="col">
      <article class="card h-100 rounded-0 shadow-sm">
        <img src="${item.imagen}" class="card-img-top rounded-0" alt="${item.nombre} - ${item.motoCompatible}">
        <div class="card-body d-flex flex-column">
          <div class="mb-2">
            <span class="badge badge-marca rounded-0 text-uppercase">${item.categoria}</span>
          </div>
          <h3 class="card-title h5 mb-2">${item.nombre}</h3>
          <p class="card-text small text-muted mb-3">${item.descripcion}</p>
          <ul class="list-unstyled small mb-3">
            <li><strong>Referencia:</strong> ${item.referencia}</li>
            <li><strong>Moto compatible:</strong> ${item.motoCompatible}</li>
          </ul>
          <p class="precio-marca fw-bold mt-auto mb-0">
            ${configuracion.etiquetaValor}: $${valorFormateado}
          </p>
        </div>
      </article>
    </div>
  `;
}

// TODO: devuelve el HTML de TODAS las tarjetas de la lista (map + join).
// Si la lista está vacía, devuelve un mensaje (por ejemplo un <p>) que
// diga que no hay resultados.
function generarHTML(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return '<div class="col-12"><p class="text-center py-4 text-muted">No hay repuestos que coincidan con tu búsqueda.</p></div>';
  }
  return lista.map(crearCard).join('');
}

/* ---------------------------------------------------------------
 * Issue #4 - Filtrar, buscar y ordenar
 * Ninguna de estas funciones modifica la lista que recibe.
 * --------------------------------------------------------------- */

// TODO: devuelve solo los elementos de esa categoría.
// Si categoria es 'todas', devuelve todos.
function filtrarPorCategoria(lista, categoria) {
  if (!categoria || categoria === 'todas') {
    return [...lista];
  }
  return lista.filter((item) => item.categoria === categoria);
}

// TODO: devuelve los elementos cuyo nombre o descripcion contienen el
// texto, sin importar mayúsculas ni espacios al inicio o al final.
// Si el texto está vacío, devuelve todos.
function buscarPorTexto(lista, texto) {
  const consulta = String(texto || '').trim().toLowerCase();
  if (!consulta) {
    return [...lista];
  }
  return lista.filter(
    (item) =>
      item.nombre.toLowerCase().includes(consulta) ||
      item.descripcion.toLowerCase().includes(consulta)
  );
}

// TODO: devuelve una COPIA ordenada según el criterio:
//   'nombre-asc'  A a Z por nombre (localeCompare)
//   'valor-asc'   de menor a mayor según item[configuracion.campoOrden]
//   'valor-desc'  de mayor a menor
function ordenarItems(lista, criterio) {
  const copia = [...lista];
  const campo = configuracion.campoOrden;

  if (criterio === 'valor-asc') {
    return copia.sort((a, b) => a[campo] - b[campo]);
  }
  if (criterio === 'valor-desc') {
    return copia.sort((a, b) => b[campo] - a[campo]);
  }
  return copia.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
}

// TODO: aplica las tres funciones anteriores en cadena según el estado
// ({ categoria, texto, orden }) y devuelve la lista resultante.
function aplicarFiltros(lista, estadoActual) {
  const porCategoria = filtrarPorCategoria(lista, estadoActual.categoria);
  const porTexto = buscarPorTexto(porCategoria, estadoActual.texto);
  return ordenarItems(porTexto, estadoActual.orden);
}

/* ---------------------------------------------------------------
 * Issue #4 - Eventos (estas sí usan el DOM)
 * --------------------------------------------------------------- */

// TODO: calcula la lista con aplicarFiltros(items, estado), pinta el
// resultado en #catalogo con innerHTML y actualiza #contador
// (por ejemplo "Mostrando 5 de 12 resultados").
function actualizarVista() {
  const catalogo = document.getElementById('catalogo');
  const contador = document.getElementById('contador');
  if (!catalogo || !contador) return;

  const filtrados = aplicarFiltros(items, estado);
  catalogo.innerHTML = generarHTML(filtrados);
  contador.textContent = `Mostrando ${filtrados.length} de ${items.length} resultados`;
}

// TODO: conecta los eventos y pinta por primera vez.
//   click  en cada botón con data-categoria: actualiza estado.categoria
//          y aria-pressed ("true" en el elegido, "false" en los demás)
//   input  en #buscador: actualiza estado.texto
//   change en #orden: actualiza estado.orden
// Después de cada cambio llama a actualizarVista().
function iniciar() {
  const botonesFiltro = document.querySelectorAll('[data-categoria]');
  const buscador = document.getElementById('buscador');
  const selectOrden = document.getElementById('orden');

  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      estado.categoria = boton.getAttribute('data-categoria');
      botonesFiltro.forEach((b) => b.setAttribute('aria-pressed', b === boton ? 'true' : 'false'));
      actualizarVista();
    });
  });

  if (buscador) {
    buscador.addEventListener('input', (e) => {
      estado.texto = e.target.value;
      actualizarVista();
    });
  }

  if (selectOrden) {
    selectOrden.addEventListener('change', (e) => {
      estado.orden = e.target.value;
      actualizarVista();
    });
  }

  actualizarVista();
}

// No cambies estas líneas: así el archivo también carga en el verificador,
// donde no existe document.
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', iniciar);
}
