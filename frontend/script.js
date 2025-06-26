const questions = [
  { question: "What customer information should be reviewed before inspection?", choices: ['System size, inverter model, previous service history', 'Only customer name and address', 'Utility rate plan only', 'Homeowner association documents'], answer: 0 },
  { question: "Which is NOT required safety equipment?", choices: ['Class E hard hat', 'Electrical-rated gloves', 'Fall arrest harness', 'Umbrella for shade'], answer: 3 },
  { question: "Before roof work, what must be done?", choices: ['Verify ladder stability', 'Notify team/office', 'Confirm safe weather conditions', 'All of the above'], answer: 3 },
  { question: "What is considered a 'dangler'?", choices: ['Loose wiring hanging below array', 'Broken panel', 'Missing roof tile', 'Rusty inverter enclosure'], answer: 0 },
  { question: "Which tool checks for panel hot spots?", choices: ['Clamp meter', 'Thermal imaging camera', 'Irradiance meter', 'Torque wrench'], answer: 1 },
  { question: "What condition warrants panel cleaning upsell?", choices: ['Whenever on-site', 'If panels are visibly dirty affecting output', 'Only during summer', 'After heavy rain'], answer: 1 },
  { question: "What must be provided to customer before leaving?", choices: ['Detailed report copy', 'Immediate verbal summary', 'Free sunglasses', 'Next inspection appointment'], answer: 1 },
  { question: "What documentation is required?", choices: ['Extensive photos of roof, equipment, defects', 'Drone videos only', 'Pest photos only', 'Signature of neighbor'], answer: 0 },
  { question: "When should final report be submitted?", choices: ['Within 24 hours', 'Within 3 days', 'End of the month', 'On customer request only'], answer: 0 },
  { question: "What wind speed prohibits roof work?", choices: ['10 mph', '15 mph', '20 mph', '25 mph'], answer: 1 },
  { question: "What safety rule applies to electrical components?", choices: ['Assume all wires are live', 'Only work with gloves', 'Disconnect ground wire', 'Cut all MC4 connectors'], answer: 0 },
  { question: "How often must equipment be re-certified?", choices: ['Annually', 'Every 3 years', 'Every 6 months', 'Every month'], answer: 2 },
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
  document.getElementById('result').innerHTML = `<h2>Score: ${percent.toFixed(1)}%</h2>`;
}

loadQuiz();
