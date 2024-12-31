// Archivo custom.js

// Prueba para ver el valor del toggle
const toggleButton = document.querySelector('#navbarToggle');

if (toggleButton) {
  toggleButton.addEventListener('click', function () {
    console.log('Botón de menú clickeado');
    // Aquí puedes agregar más lógica de prueba
  });
}

// Otras pruebas
function normalizeData(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value === Number(value).toString()) {
    return Number(value);
  }

  if (value === '' || value === 'null') {
    return null;
  }

  if (typeof value !== 'string') {
    return value;
  }

  try {
    if (value.startsWith('{') || value.startsWith('[')) {
      return JSON.parse(decodeURIComponent(value));
    }
  } catch {
    return value;
  }
}

// Aquí puedes poner más soluciones o pruebas sin afectar el archivo Bootstrap.
