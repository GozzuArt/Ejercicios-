const weeklyExercises = {
    "Lunes": [
        "<h3>Piernas y glúteos</h3>" +
        "<p>Realiza cada ejercicio en 3 series de 10-12 repeticiones con un peso adecuado que te desafíe, pero te permita completar las series con buena técnica.</p>" +
        "<ul>" +
        "<li>Sentadillas con mancuernas</li>" +
        "<li>Zancadas con mancuernas</li>" +
        "<li>Peso muerto con mancuernas</li>" +
        "<li>Puente de glúteos con mancuernas</li>" +
        "</ul>"
    ],
    "Martes": [
        "<h3>Pecho y tríceps</h3>" +
        "<p>Realiza cada ejercicio en 3 series de 10-12 repeticiones con un peso adecuado que te desafíe, pero te permita completar las series con buena técnica.</p>" +
        "<ul>" +
        "<li>Press de pecho con mancuernas</li>" +
        "<li>Aperturas con mancuernas</li>" +
        "<li>Fondos entre sillas o banco (sin mancuernas)</li>" +
        "<li>Extensión de tríceps por encima de la cabeza con mancuernas</li>" +
        "</ul>"
    ],
    "Miércoles": [
        "<h3>Espalda y bíceps</h3>" +
        "<p>Realiza cada ejercicio en 3 series de 10-12 repeticiones con un peso adecuado que te desafíe, pero te permita completar las series con buena técnica.</p>" +
        "<ul>" +
        "<li>Remo con mancuernas</li>" +
        "<li>Peso muerto rumano con mancuernas</li>" +
        "<li>Curl de bíceps con mancuernas</li>" +
        "<li>Curl martillo con mancuernas</li>" +
        "</ul>"
    ],
    "Jueves": [
        "<h3>Piernas y abdomen</h3>" +
        "<p>Realiza cada ejercicio en 3 series de 10-12 repeticiones con un peso adecuado que te desafíe, pero te permita completar las series con buena técnica.</p>" +
        "<ul>" +
        "<li>Sentadillas búlgaras con mancuernas</li>" +
        "<li>Elevaciones de talones (gemelos)</li>" +
        "<li>Elevación de piernas acostado (sin mancuernas)</li>" +
        "<li>Planchas (mantener 30-60 segundos)</li>" +
        "</ul>"
    ],
    "Viernes": [
        "<h3>Hombros y abdomen</h3>" +
        "<p>Realiza cada ejercicio en 3 series de 10-12 repeticiones con un peso adecuado que te desafíe, pero te permita completar las series con buena técnica.</p>" +
        "<ul>" +
        "<li>Press militar con mancuernas</li>" +
        "<li>Elevaciones laterales con mancuernas</li>" +
        "<li>Elevaciones frontales con mancuernas</li>" +
        "<li>Plancha lateral con elevación de cadera (30 segundos por lado)</li>" +
        "</ul>"
    ],
    "Sábado": [
        "<h3>Día de cardio ligero o descanso activo</h3>" +
        "<p>(30 minutos de caminata rápida, bicicleta, o actividad ligera).</p>"
    ],
    "Domingo": [
        "<h3>Descanso o estiramientos activos</h3>"
    ]
};

document.querySelectorAll('.day-btn').forEach(button => {
    button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        const exercises = weeklyExercises[day];
        const exerciseTitle = document.getElementById('exercise-title');
        const exerciseDescription = document.getElementById('exercise-description');

        exerciseTitle.textContent = `Ejercicios para ${day}`;
        exerciseDescription.innerHTML = exercises.join('');
    });
});
