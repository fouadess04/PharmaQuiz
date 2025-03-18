let currentQuestionIndex = 0, questions = [];
const fileInput = document.getElementById('file-input');
const startQuizButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const checkAnswersButton = document.getElementById('check-answers');
const nextQuestionButton = document.getElementById('next-question');
const quizTitle = document.getElementById('quiz-title'); // Reference to the quiz title

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                questions = JSON.parse(e.target.result);
                if (questions.length) {
                    startQuizButton.style.display = 'inline-block';
                    // Update the quiz title with the file name (without .json extension)
                    const fileName = file.name.replace('.json', '');
                    quizTitle.textContent = fileName;
                }
            } catch (error) {
                alert("Invalid JSON file format");
            }
        };
        reader.readAsText(file);
    }
});

startQuizButton.addEventListener('click', function () {
    if (questions.length) {
        renderQuestions(questions);
        showQuestion(currentQuestionIndex);
        checkAnswersButton.style.display = 'inline-block'; // Show Check Answers button
        startQuizButton.style.display = 'none';
    }
});

checkAnswersButton.addEventListener('click', function () {
    const currentQuestion = questions[currentQuestionIndex];
    const rightAnswers = currentQuestion.rightPropositions;
    const options = quizContainer.querySelectorAll('.question.active .options input');
    const labels = quizContainer.querySelectorAll('.question.active .options label');
    labels.forEach(label => label.classList.remove('correct', 'incorrect'));
    options.forEach((option, index) => {
        if (rightAnswers.includes(index)) {
            labels[index].classList.add('correct');
        }
        if (option.checked && !rightAnswers.includes(index)) {
            labels[index].classList.add('incorrect');
        }
    });
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.textContent = `Explanation: ${currentQuestion.explanation}`;
    const activeQuestion = quizContainer.querySelector('.question.active');
    if (!activeQuestion.querySelector('.explanation')) {
        activeQuestion.appendChild(explanationDiv);
    }
    // Show the Next Question button after checking answers
    nextQuestionButton.style.display = 'inline-block';
});

nextQuestionButton.addEventListener('click', function () {
    quizContainer.querySelector('.question.active').classList.remove('active');
    if (++currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        nextQuestionButton.style.display = 'none'; // Hide Next Question button until answers are checked
    } else {
        alert('End of quiz!');
    }
});

function renderQuestions(questions) {
    quizContainer.innerHTML = questions.map(q => `
        <div class="question">
            <p><b>${q.question}</b></p>
            <div class="options">
                ${q.options.map((opt, i) => `<label><input type="checkbox" value="${i}">${opt}</label>`).join('')}
            </div>
        </div>
    `).join('');
}

function showQuestion(index) {
    quizContainer.querySelectorAll('.question')[index].classList.add('active');
}
