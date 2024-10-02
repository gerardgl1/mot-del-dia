document.addEventListener('DOMContentLoaded', function () {
    let intentsRestants = 3;  // Límits d'intents per l'usuari

    // Obtenir la definició del dia des de l'API
    fetch('/api/server')
        .then(response => response.json())
        .then(data => {
            const definicio = data.definicio;  // Definició que ve del backend
            document.getElementById('definicio').textContent = definicio;
            const paraulaCorrecta = data.paraula.toLowerCase();  // Paraula correcta del backend

            // Afegir listener al botó "Comprovar"
            document.getElementById('verificar').addEventListener('click', () => {
                const respostaUsuari = document.getElementById('intento').value.trim().toLowerCase();

                // Comprovar si la resposta de l'usuari és correcta
                if (respostaUsuari === paraulaCorrecta) {
                    document.getElementById('missatge').textContent = "Correcte! 🎉";
                    document.getElementById('missatge').classList.remove('incorrecte');
                    document.getElementById('missatge').classList.add('correcte');
                } else {
                    intentsRestants--;
                    if (intentsRestants > 0) {
                        document.getElementById('missatge').textContent = `Incorrecte! Et queden ${intentsRestants} intents.`;
                        document.getElementById('missatge').classList.remove('correcte');
                        document.getElementById('missatge').classList.add('incorrecte');
                    } else {
                        document.getElementById('missatge').textContent = `Incorrecte! La paraula correcta era: ${paraulaCorrecta}.`;
                        document.getElementById('missatge').classList.remove('correcte');
                        document.getElementById('missatge').classList.add('incorrecte');
                        document.getElementById('verificar').disabled = true;  // Desactivar el botó després de 3 intents
                    }
                }
            });
        })
        .catch(error => console.error('Error obtenint la definició:', error));
});
