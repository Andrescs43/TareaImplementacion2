const express = require('express'); // Se importa Express
const app = express(); // Se crea una aplicación de Express
const port = 3002; // Se define el puerto en el que se ejecutará la aplicación

app.get('/', (req, res) => { // Ruta para la página principal de inventario
  res.send('Inventario: Listado de productos');
});

app.listen(port, () => {
  // Se inicia la aplicación en el puerto definido
  console.log(`Inventario escuchando en http://localhost:${port}`);
});
