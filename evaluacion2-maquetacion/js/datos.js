/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: 'MotoPartes Dosquebradas',
  campoOrden: 'precio',
  etiquetaValor: 'precio'
};

const items = [
  { id: 1, nombre: 'Kit de arrastre', categoria: 'motor', descripcion: 'Cadena, piñón y corona reforzados.', imagen: 'img/placeholder.svg', precio: 145000, referencia: 'KA-428', motoCompatible: 'Boxer 100' },
  { id: 2, nombre: 'Filtro de aceite', categoria: 'motor', descripcion: 'Filtro de alta retención de partículas.', imagen: 'img/placeholder.svg', precio: 18000, referencia: 'FA-112', motoCompatible: 'Pulsar 180' },
  { id: 3, nombre: 'Bujía iridio', categoria: 'motor', descripcion: 'Mejor arranque y menor consumo.', imagen: 'img/placeholder.svg', precio: 35000, referencia: 'BI-07', motoCompatible: 'NKD 125' },
  { id: 4, nombre: 'Pastillas de freno', categoria: 'frenos', descripcion: 'Pastillas delanteras semimetálicas.', imagen: 'img/placeholder.svg', precio: 42000, referencia: 'PF-210', motoCompatible: 'Pulsar 180' },
  { id: 5, nombre: 'Disco de freno', categoria: 'frenos', descripcion: 'Disco delantero de acero inoxidable.', imagen: 'img/placeholder.svg', precio: 165000, referencia: 'DF-276', motoCompatible: 'FZ 2.0' },
  { id: 6, nombre: 'Bandas traseras', categoria: 'frenos', descripcion: 'Bandas para freno de tambor.', imagen: 'img/placeholder.svg', precio: 28000, referencia: 'BT-110', motoCompatible: 'Boxer 100' },
  { id: 7, nombre: 'Batería 12V', categoria: 'electrico', descripcion: 'Batería sellada libre de mantenimiento.', imagen: 'img/placeholder.svg', precio: 120000, referencia: 'BT-5L', motoCompatible: 'NKD 125' },
  { id: 8, nombre: 'Direccionales LED', categoria: 'electrico', descripcion: 'Par de direccionales de luz LED.', imagen: 'img/placeholder.svg', precio: 38000, referencia: 'DL-02', motoCompatible: 'Universal' },
  { id: 9, nombre: 'Regulador de voltaje', categoria: 'electrico', descripcion: 'Protege la batería y las luces.', imagen: 'img/placeholder.svg', precio: 55000, referencia: 'RV-14', motoCompatible: 'Pulsar 180' },
  { id: 10, nombre: 'Llanta delantera', categoria: 'llantas', descripcion: 'Llanta 90/90-18 para ciudad.', imagen: 'img/placeholder.svg', precio: 160000, referencia: 'LL-9018', motoCompatible: 'Boxer 100' },
  { id: 11, nombre: 'Llanta trasera', categoria: 'llantas', descripcion: 'Llanta 110/90-17 de buen agarre.', imagen: 'img/placeholder.svg', precio: 210000, referencia: 'LL-11017', motoCompatible: 'FZ 2.0' },
  { id: 12, nombre: 'Neumático interior', categoria: 'llantas', descripcion: 'Neumático rin 18 de caucho natural.', imagen: 'img/placeholder.svg', precio: 25000, referencia: 'NI-18', motoCompatible: 'Universal' }
];
