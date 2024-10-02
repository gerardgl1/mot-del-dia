document.addEventListener('DOMContentLoaded', function () {
    let intentsRestants = 3;

    // Obtenir la definició del dia
    fetch('/definicio-del-dia')
        .then(response => response.json())
        .then(data => {
            document.getElementById('definicio').textContent = data.definicio;
        });

    // Gestionar la comprovació de l'intent
    document.getElementById('verificar').addEventListener('click', () => {
        const intent = document.getElementById('intento').value;

        fetch('/comprovar-mot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ intent, intentsRestants })
        })
        .then(response => response.json())
        .then(data => {
            if (data.resultat === 'correcte') {
                document.getElementById('missatge').textContent = 'Correcte! 🎉';
                document.getElementById('verificar').disabled = true;
            } else if (data.resultat === 'fallit') {
                document.getElementById('missatge').textContent = `Fallit. La paraula correcta era: ${data.motCorrecte}`;
                document.getElementById('verificar').disabled = true;
            } else {
                intentsRestants = data.intentsRestants;
                document.getElementById('missatge').textContent = `Incorrecte. Et queden ${intentsRestants} intents.`;
            }
        });
    });
});
