/**
 * Archivo: script.js
 * Contiene la lógica del Test de Tuberculosis: rondas aleatorias, verificación de respuestas
 * y cálculo de la nota final base 10.
 * IMPORTANTE: Asume que el array 'allQuestions' está disponible desde data.js.
 */

const QUESTIONS_PER_ROUND = 20;
let availableQuestions = []; // Inicializado al inicio
let currentRoundQuestions = [];
let totalCorrectAnswers = 0;
let totalQuestionsAnswered = 0;
let roundNumber = 0;

/**
 * Mezcla un array utilizando el algoritmo Fisher-Yates.
 * @param {Array} array - El array a mezclar.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Carga la siguiente ronda de preguntas o finaliza el test.
 */
function loadNextRound() {
    if (roundNumber === 0) {
        // Inicializa el banco de preguntas en la primera carga
        availableQuestions = shuffleArray([...allQuestions]);
    }

    if (availableQuestions.length === 0) {
        // Fin del test
        showFinalScore();
        return;
    }

    roundNumber++;
    document.getElementById('quiz-container').innerHTML = '';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-round-btn').style.display = 'none';

    // Seleccionar 20 preguntas al azar sin repetición
    const questionsToTake = Math.min(QUESTIONS_PER_ROUND, availableQuestions.length);
    currentRoundQuestions = [];
    
    // Tomar las preguntas para la ronda y removerlas de las disponibles
    for (let i = 0; i < questionsToTake; i++) {
        // availableQuestions ya está mezclado
        currentRoundQuestions.push(availableQuestions.shift());
    }

    renderQuestions();
    updateStatus();
    document.getElementById('score-display').innerHTML = ''; // Limpiar score anterior
}

/**
 * Muestra las preguntas de la ronda actual en el HTML.
 */
function renderQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    let htmlContent = '';

    currentRoundQuestions.forEach((q, index) => {
        // Mezcla las opciones para que el orden sea aleatorio
        const shuffledOptions = shuffleArray([...q.opciones]);
        
        // El nombre del grupo de radio buttons debe ser único para cada pregunta de la ronda
        const radioGroupName = `question-${roundNumber}-${index}`;

        let optionsHtml = shuffledOptions.map((option, optIndex) => `
            <label class="option-label" for="${radioGroupName}-opt${optIndex}">
                <input type="radio" id="${radioGroupName}-opt${optIndex}" name="${radioGroupName}" value="${option}">
                ${option}
            </label>
        `).join('');

        htmlContent += `
            <div class="question-card" id="card-${index}">
                <p><strong>Pregunta ${totalQuestionsAnswered + index + 1}:</strong> ${q.pregunta}</p>
                <div class="options-group">
                    ${optionsHtml}
                </div>
            </div>
        `;
    });

    quizContainer.innerHTML = htmlContent;
}

/**
 * Verifica las respuestas del usuario y muestra la retroalimentación.
 */
window.checkAnswers = function() {
    let roundCorrectCount = 0;
    const quizContainer = document.getElementById('quiz-container');
    const questionCards = quizContainer.querySelectorAll('.question-card');

    questionCards.forEach((card, index) => {
        const q = currentRoundQuestions[index];
        // Seleccionamos solo los radio buttons dentro de esta tarjeta de pregunta
        const radioButtons = card.querySelectorAll('input[type="radio"]');
        let userSelection = null;

        // 1. Encontrar la selección del usuario y deshabilitar opciones
        radioButtons.forEach(radio => {
            radio.disabled = true; // Deshabilita para evitar cambios
            if (radio.checked) {
                userSelection = radio.value;
            }
        });
        
        // 2. Aplicar clases de color
        let isCorrectAnswer = (userSelection === q.respuestaCorrecta);

        radioButtons.forEach(radio => {
            const label = radio.closest('.option-label');
            
            if (radio.value === q.respuestaCorrecta) {
                // Es la respuesta correcta
                label.classList.add(isCorrectAnswer ? 'correct' : 'hidden-correct');
                if (isCorrectAnswer) {
                    roundCorrectCount++;
                }
            } else if (radio.checked && !isCorrectAnswer) {
                // Es la respuesta incorrecta seleccionada por el usuario
                label.classList.add('incorrect');
            }
        });
    });

    // Actualizar puntajes globales
    totalCorrectAnswers += roundCorrectCount;
    totalQuestionsAnswered += currentRoundQuestions.length;

    // Mostrar el botón de siguiente ronda y el puntaje de la ronda
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-round-btn').style.display = 'block';
    
    updateStatus(true, roundCorrectCount);
}

/**
 * Muestra el puntaje final y la nota sobre base 10.
 */
function showFinalScore() {
    document.getElementById('quiz-container').innerHTML = '';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-round-btn').style.display = 'none';

    const maxQuestions = allQuestions.length;
    
    // Cálculo de la nota sobre 10: (respuestas_correctas / total_preguntas) * 10
    const finalScore = (totalCorrectAnswers / maxQuestions) * 10;

    let finalMessage = `
        <div style="text-align: center; margin-top: 50px; padding: 20px; border: 2px solid #007bff; border-radius: 10px;">
            <h2>¡Test Finalizado! 🎉</h2>
            <p>Has completado las <strong>${maxQuestions}</strong> preguntas.</p>
            <p>Aciertos Totales: <strong>${totalCorrectAnswers}</strong> de ${maxQuestions}</p>
            <hr>
            <h3>Nota Final (Base 10): </h3>
            <div style="font-size: 3em; color: ${finalScore >= 7.0 ? '#28a745' : (finalScore >= 5.0 ? '#ffc107' : '#dc3545')};">
                ${finalScore.toFixed(2)} / 10
            </div>
            <p style="margin-top: 15px;"><small>Para reiniciar el test, recargue la página.</small></p>
        </div>
    `;
    document.getElementById('score-display').innerHTML = finalMessage;
    document.getElementById('status').innerHTML = '';
}

/**
 * Actualiza el estado del test (ronda, preguntas restantes, etc.)
 */
function updateStatus(showRoundScore = false, roundScore = 0) {
    const statusDiv = document.getElementById('status');
    const totalQuestions = allQuestions.length;
    const remainingQuestions = availableQuestions.length;
    const currentRoundSize = currentRoundQuestions.length;

    let statusHTML = `
        <p><strong>Ronda Actual:</strong> ${roundNumber} | 
        <strong>Preguntas Contestadas:</strong> ${totalQuestionsAnswered} / ${totalQuestions} |
        <strong>Preguntas en esta Ronda:</strong> ${currentRoundSize}</p>
    `;

    if (showRoundScore) {
        statusHTML += `
            <p id="round-score-message" style="color: ${roundScore >= currentRoundSize * 0.7 ? '#28a745' : '#dc3545'};">
                ✅ Aciertos en esta Ronda: <strong>${roundScore}</strong> de ${currentRoundSize}.
            </p>
        `;
    }

    statusDiv.innerHTML = statusHTML;
}

// -----------------------------------------------------------
// Inicialización
// -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', loadNextRound);