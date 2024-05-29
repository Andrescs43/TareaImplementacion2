const express = require('express'); // Se importa Express
const axios = require('axios'); // Se importa Axios para hacer solicitudes HTTP
const path = require('path'); // Se importa Path para manejar rutas

const app = express(); // Se crea una aplicación de Express
const port = 3000; // Se define el puerto en el que se ejecutará la aplicación

app.use(express.static(path.join(__dirname, 'resourses'))); // Se define la carpeta de recursos


app.get('/clients', async (req, res) => { // Se define una ruta para obtener la informacion de los clientes
  try {
    // Se hace una solicitud GET al microservicio de clientes
    const response = await axios.get('http://clients:3001');
    res.send(response.data);
  } catch (error) {
    // Si hay un error con la conexion, se envía un mensaje de error
    res.status(500).sendFile(path.join(__dirname, 'resourses', 'libraries', 'img', 'product', 'Pagos', 'servicionodisponible.jpg'));
  }
});

app.get('/inventory', async (req, res) => { // Se define una ruta para obtener la informacion del inventario
  try {
    // Se hace una solicitud GET al microservicio de inventario
    const response = await axios.get('http://inventory:3002');
    res.send(response.data);
  } catch (error) {
    // Si hay un error con la conexion, se envía un mensaje de error
    res.status(500).sendFile(path.join(__dirname, 'resourses', 'libraries', 'img', 'product', 'Pagos', 'servicionodisponible.jpg'));
  }
});

app.get('/orders', async (req, res) => { // Se define una ruta para obtener la informacion de los pedidos
  try {
    // Se hace una solicitud GET al microservicio de pedidos
    const response = await axios.get('http://orders:3003');
    res.send(response.data);
  } catch (error) {
    // Si hay un error con la conexion, se envía un mensaje de error
    res.status(500).sendFile(path.join(__dirname, 'resourses', 'libraries', 'img', 'product', 'Pagos', 'servicionodisponible.jpg'));
  }
});

app.get('/payments', async (req, res) => { // Se define una ruta para obtener la informacion de los pagos
  try {
    // Se hace una solicitud GET al microservicio de pagos
    const response = await axios.get('http://payments:3004');
    res.send(response.data);
  } catch (error) {
    // Si hay un error con la conexion, se envía un mensaje de error
    res.status(500).sendFile(path.join(__dirname, 'resourses', 'libraries', 'img', 'product', 'Pagos', 'servicionodisponible.jpg'));

  }
});

app.listen(port, () => { // Se inicia la aplicación en el puerto definido
  console.log(`Tienda escuchando en http://localhost:${port}`);
});
