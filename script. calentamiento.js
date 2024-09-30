const exercises = {
    "1. Movilidad articular (2-3 minutos)": [
        "Rotaciones de cuello: Haz círculos lentos con la cabeza, 5 en cada dirección.",
        "Rotaciones de hombros: Gira ambos hombros hacia adelante y luego hacia atrás, 10 veces en cada dirección.",
        "Rotaciones de codos y muñecas: Flexiona los brazos y haz círculos con los codos y las muñecas, 10 veces en cada sentido.",
        "Rotaciones de cadera: Coloca las manos en las caderas y haz círculos amplios con la pelvis, 10 hacia cada lado.",
        "Rotaciones de rodillas y tobillos: Flexiona ligeramente las rodillas y haz círculos con ellas y con los tobillos, 10 en cada dirección."
    ],
    "2. Activación cardiovascular (3-4 minutos)": [
        "Marcha en el lugar (1 minuto): Levanta las rodillas alternando las piernas, como si caminaras en el lugar.",
        "Jumping jacks (1 minuto): Abre y cierra piernas y brazos mientras saltas. Si prefieres evitar saltos, haz una versión suave separando piernas y levantando los brazos sin brincar.",
        "Trote ligero o skipping bajo (1 minuto): Corre en el lugar levantando ligeramente las rodillas, sin mucha intensidad.",
    ],
    "3. Estiramientos dinámicos (3-4 minutos)": [
        "Balanceo de piernas: Sostente de una pared y balancea una pierna hacia adelante y hacia atrás, 10 veces por cada lado.",
        "Sentadillas dinámicas: Haz 10-15 sentadillas sin peso, bajando y subiendo de manera controlada",
        "Desplantes alternados: Da un paso hacia adelante y baja en un desplante, alternando piernas, 10 repeticiones en total.",
        "Estiramiento de brazos cruzados: Extiende un brazo frente a ti y usa el otro para empujarlo hacia tu pecho, mantén 10 segundos y cambia de brazo.",
        "Estiramientos de espalda y torso: Inclina el torso hacia adelante y hacia los lados para estirar la parte baja de la espalda y los costados, mantén cada posición 10-15 segundos."
    ],
    "4. Activación muscular específica (opcional, 2 minutos)": [
        "Press militar sin peso: Haz el movimiento de levantar mancuernas por encima de la cabeza sin carga o con poco peso, 10-15 veces.",
        "Remo sin peso: Simula el movimiento de remo con mancuernas, 10-15 repeticiones sin peso.",
    ]
};

let currentExerciseIndex = 0;
let currentDescriptionIndex = 0;
const exerciseTitles = Object.keys(exercises);
const exerciseTitle = document.getElementById('exercise-title');
const exerciseDescription = document.getElementById('exercise-description');

exerciseTitle.textContent = exerciseTitles[currentExerciseIndex];
exerciseDescription.textContent = exercises[exerciseTitles[currentExerciseIndex]][currentDescriptionIndex];

document.getElementById('next-btn').addEventListener('click', () => {
    currentDescriptionIndex++;
    const currentExercise = exerciseTitles[currentExerciseIndex];

    if (currentDescriptionIndex < exercises[currentExercise].length) {
        exerciseDescription.textContent = exercises[currentExercise][currentDescriptionIndex];
    } else {
        currentExerciseIndex++;
        if (currentExerciseIndex < exerciseTitles.length) {
            currentDescriptionIndex = 0;
            exerciseTitle.textContent = exerciseTitles[currentExerciseIndex];
            exerciseDescription.textContent = exercises[exerciseTitles[currentExerciseIndex]][currentDescriptionIndex];
        } else {
            exerciseDescription.textContent = "Has terminado todas las descripciones de calentamiento.";
            document.getElementById('next-btn').disabled = true; // Desactiva el botón al final
        }
    }
});

let timerInterval;
let seconds = 0;

document.getElementById('start-btn').addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            document.getElementById('time').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }, 1000);
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});
