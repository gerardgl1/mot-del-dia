const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware per gestionar dades JSON
app.use(bodyParser.json());
app.use(express.static('public')); // Servir fitxers estàtics (frontend)

// Mots i definicions (pots ampliar aquesta llista)
const mots = [
    { mot: 'arbre', definicio: 'És un tipus de planta amb tronc i fulles.' },
    { mot: 'casa', definicio: 'Lloc on les persones viuen.' },
    { mot: 'cotxe', definicio: 'Vehicle per transportar persones.' }
];

// Seleccionar mot i definició del dia (simulació)
let motDelDia = mots[Math.floor(Math.random() * mots.length)];

// Rutes de l'API
app.get('/definicio-del-dia', (req, res) => {
    res.json({ definicio: motDelDia.definicio });
});

app.post('/comprovar-mot', (req, res) => {
    const { intent, intentsRestants } = req.body;

    if (intent.toLowerCase() === motDelDia.mot.toLowerCase()) {
        res.json({ resultat: 'correcte' });
    } else if (intentsRestants <= 1) {
        res.json({ resultat: 'fallit', motCorrecte: motDelDia.mot });
    } else {
        res.json({ resultat: 'incorrecte', intentsRestants: intentsRestants - 1 });
    }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor funcionant en el port ${port}`);
});
