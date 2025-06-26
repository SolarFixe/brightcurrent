const questions = [
  { question: "What is the purpose of the Solar Sentinel inspection?", choices: ["Sell upgrades", "Establish baseline", "Replace system", "Clean panels"], answer: 1 },
  { question: "What does 0.0.0.0/0 mean in MongoDB IP settings?", choices: ["Block access", "Allow only local", "Allow from anywhere", "Only Atlas access"], answer: 2 }
];

function loadQuiz() {
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>Q${i+1}: ${q.question}</strong></p>`;
    q.choices.forEach((choice, idx) => {
      div.innerHTML += `<input type='radio' name='q${i}' value='${idx}'> ${choice}<br>`;
    });
    quizDiv.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name='q${i}']:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  const percent = (score / questions.length) * 100;
  document.getElementById('result').innerHTML = `<h2>Score: ${percent}%</h2>`;
}

loadQuiz();