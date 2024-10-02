module.exports = (req, res) => {
    // Llista de paraules i definicions
    const paraules = [
      { paraula: 'arbre', definicio: 'És un tipus de planta amb tronc i fulles.' },
      { paraula: 'casa', definicio: 'Lloc on les persones viuen.' },
      { paraula: 'cotxe', definicio: 'Vehicle per transportar persones.' }
    ];
  
    // Seleccionar una paraula aleatòria del dia
    const motDelDia = paraules[Math.floor(Math.random() * paraules.length)];
  
    // Retornar la definició
    res.status(200).json({ definicio: motDelDia.definicio });
  };  