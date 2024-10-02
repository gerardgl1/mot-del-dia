const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serveix els fitxers estàtics de la carpeta public
app.use(express.static('public'));

// Endpoint de l'API
app.get('/api/server', (req, res) => {
  const paraules = [
    { paraula: 'arbre', definicio: 'És un tipus de planta amb tronc i fulles.' },
    { paraula: 'casa', definicio: 'Lloc on les persones viuen.' },
    { paraula: 'cotxe', definicio: 'Vehicle per transportar persones.' }
  ];

  // Selecciona una paraula aleatòria del dia
  const motDelDia = paraules[Math.floor(Math.random() * paraules.length)];

  // Retorna la definició
  res.status(200).json({ definicio: motDelDia.definicio, paraula: motDelDia.paraula });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escoltant al port ${port}`);
});
