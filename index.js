const express = require('express');
const app = express();
const PORT = 3001; 

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Gym!');
});

app.listen(PORT, () => {
  console.log(`Servidor de la API en http://localhost:${PORT}`);
});