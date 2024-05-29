const express = require('express'); // Se importa Express
const path = require('path'); // Se importa Path para manejar rutas

const app = express(); // Se crea una aplicación de Express
const port = 3004; // Se define el puerto en el que se ejecutará la aplicación

app.use(express.static(path.join(__dirname, 'libraries'))); // Se define la carpeta de recursos

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'libraries', 'payments.html'));
});

app.listen(port, () => {
  // Se inicia la aplicación en el puerto definido
  console.log(`Pagos escuchando en http://localhost:${port}`);
});

