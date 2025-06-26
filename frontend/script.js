document.addEventListener('DOMContentLoaded', () => {
    // --- QUIZ DATA ---
    // Contains all questions, options, and the correct answer.
    const quizData = [
        {
            section: "1.1 Customer & Site Preparation",
            question: "Which of the following details must be verified from the customer's CRM profile before a site visit?",
            options: [
                "System size, panel model, inverter model, installation date, and previous service tickets.",
                "Customer's email, phone number, and preferred contact time.",
                "The brand of the customer's circuit breaker and the age of their roof.",
                "Utility company name, account number, and average monthly bill."
            ],
            answer: "System size, panel model, inverter model, installation date, and previous service tickets."
        },
        {
            section: "1.1 Customer & Site Preparation",
            question: "Beyond the physical address, what two access details must be confirmed?",
            options: [
                "Wi-Fi password and alarm system code.",
                "Pet names and feeding schedule.",
                "Gate codes and access permissions.",
                "Location of spare key and garage door opener."
            ],
            answer: "Gate codes and access permissions."
        },
        {
            section: "1.2 Expanded Equipment Checklist",
            question: "What is the minimum class rating for electrical-rated gloves for inspections under 1000V?",
            options: ["Class A", "Class E", "Class 00", "Class 0"],
            answer: "Class 0"
        },
        {
            section: "1.2 Expanded Equipment Checklist",
            question: "What optional equipment is recommended for inspecting inaccessible roofs?",
            options: ["A telescoping camera pole", "High-power binoculars", "A drone", "A satellite imaging service"],
            answer: "A drone"
        },
        {
            section: "1.3 Site Safety Setup",
            question: "Before use, a technician must verify the ladder's _______ on the site terrain.",
            options: ["Color", "Stability", "Weight", "Brand"],
            answer: "Stability"
        },
        {
            section: "2.1 Customer Engagement & Expectations",
            question: "What is the typical duration of an initial inspection that should be communicated to the customer?",
            options: ["30-45 minutes", "45-60 minutes", "60-90 minutes", "90-120 minutes"],
            answer: "60-90 minutes"
        },
        {
            section: "2.2 System Performance Testing",
            question: "What are the abbreviations for unloaded and loaded DC string voltage measurements?",
            options: ["VDC & VAC", "Voc & Vmp", "Isc & Imp", "Pmax & Vmin"],
            answer: "Voc & Vmp"
        },
        {
            section: "2.2 System Performance Testing",
            question: "If Current Transformers (CTs) are installed, what must be verified?",
            options: [
                "That they are a specific brand.",
                "Their manufacturing date and serial number.",
                "That they are installed, active, and functioning.",
                "That they are connected via Ethernet, not Wi-Fi."
            ],
            answer: "That they are installed, active, and functioning."
        },
        {
            section: "2.3 Equipment Visual & Thermal Inspection",
            question: "What are 'danglers' in the context of a solar system inspection?",
            options: [
                "Decorative items hung from the array by the homeowner.",
                "Loose, unsupported wiring hanging below or around the array.",
                "A type of bird deterrent.",
                "A specific brand of microinverter."
            ],
            answer: "Loose, unsupported wiring hanging below or around the array."
        },
        {
            section: "2.3 Equipment Visual & Thermal Inspection",
            question: "A mid-day thermal scan helps identify all the following EXCEPT:",
            options: ["Hot spots", "Diode failure", "Panel soiling level", "String imbalance"],
            answer: "Panel soiling level"
        },
        {
            section: "2.4 Electrical Integrity",
            question: "What does OCPD stand for, and what must be verified about them?",
            options: [
                "Over Current Power Device; their age.",
                "Optimal Control Protection Device; their color.",
                "Overcurrent Protection Device; their ratings and labels match system specs.",
                "Output Circuit Power Distributor; their manufacturer."
            ],
            answer: "Overcurrent Protection Device; their ratings and labels match system specs."
        },
        {
            section: "2.5 Structural & Site Environmental Assessment",
            question: "What should be recommended if no critter guards are installed and there are signs of pests?",
            options: [
                "Setting traps under the array.",
                "Installing a sound-based deterrent.",
                "Recommending critter guard installation.",
                "Informing the customer to call pest control."
            ],
            answer: "Recommending critter guard installation."
        },
        {
            section: "2.6 Connectivity & Monitoring Systems",
            question: "If the customer's monitoring portal layout is inaccurate, what should the technician do?",
            options: [
                "Ignore it, as it doesn't affect production.",
                "Tell the customer to call the monitoring company.",
                "Document the discrepancies for review.",
                "Delete the customer's portal account."
            ],
            answer: "Document the discrepancies for review."
        },
        {
            section: "2.7 Battery System Inspection",
            question: "Which of these details is NOT required to be recorded for a battery system inspection?",
            options: ["Battery make/model", "Number of batteries", "Operating profile", "Date of last full charge cycle"],
            answer: "Date of last full charge cycle"
        },
        {
            section: "3. Post-Inspection & Reporting",
            question: "Where must all photos and service recommendations be uploaded before leaving the site?",
            options: ["To a personal cloud drive", "To the customer's email", "To HouseCall Pro", "To the company's social media"],
            answer: "To HouseCall Pro"
        },
        {
            section: "3. Post-Inspection & Reporting",
            question: "Which of the following is NOT on the mandatory photo documentation checklist?",
            options: [
                "Inverter serial plate",
                "Wide aerial roof shots",
                "A photo of the customer's utility bill",
                "Main electrical panel"
            ],
            answer: "A photo of the customer's utility bill"
        },
        {
            section: "4. Safety Commandments",
            question: "Roof work is prohibited when wind speeds exceed what limit?",
            options: ["10 mph", "15 mph", "20 mph", "25 mph"],
            answer: "15 mph"
        },
        {
            section: "4. Safety Commandments",
            question: "What is the mandatory protocol when working on energized equipment?",
            options: [
                "Work as quickly as possible.",
                "Wear sunglasses to reduce glare.",
                "Use a buddy system or live call-ins.",
                "Ensure you have a fire extinguisher nearby."
            ],
            answer: "Use a buddy system or live call-ins."
        },
        {
            section: "Upsell Guide",
            question: "If you notice panels are dirty, what is the suggested pitch?",
            options: [
                "\"Your dirty panels look bad. You should clean them.\"",
                "\"Keeping your panels clean will help maintain maximum production. We offer professional panel cleaning to ensure peak performance.\"",
                "\"Rain will eventually wash your panels, but we can do it sooner for a fee.\"",
                "\"Dirty panels can void your warranty. Let's get them cleaned today.\""
            ],
            answer: "\"Keeping your panels clean will help maintain maximum production. We offer professional panel cleaning to ensure peak performance.\""
        },
        {
            section: "Upsell Guide",
            question: "What is the reason given for recommending preventative wiring re-securing for loose danglers?",
            options: [
                "To make the system look nicer.",
                "To improve the Wi-Fi signal.",
                "To avoid safety risks.",
                "To increase energy production."
            ],
            answer: "To avoid safety risks."
        },
        {
            section: "Upsell Guide",
            question: "What is the primary benefit of installing consumption monitoring for the customer?",
            options: [
                "It increases the home's resale value.",
                "It provides an extra layer of fire protection.",
                "It allows the utility company to monitor their system.",
                "They can track home energy use and optimize savings."
            ],
            answer: "They can track home energy use and optimize savings."
        }
    ];

    // --- DOM ELEMENT REFERENCES ---
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const submissionArea = document.getElementById('submission-area');
    const resultsContainer = document.getElementById('results-container');
    const scoreEl = document.getElementById('score');
    const feedbackEl = document.getElementById('feedback');
    const reviewSection = document.getElementById('review-section');
    const retryBtn = document.getElementById('retry-btn');
    
    let userAnswers = {};

    // --- FUNCTIONS ---

    /**
     * Shuffles an array in place.
     * @param {Array} array The array to shuffle.
     * @returns {Array} The shuffled array.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Loads and displays the quiz questions.
     */
    function loadQuiz() {
        quizContainer.innerHTML = '';
        resultsContainer.classList.add('hidden');
        submissionArea.classList.remove('hidden');
        quizContainer.classList.remove('hidden');

        quizData.forEach((item, index) => {
            // Create the main card for the question
            const questionCard = document.createElement('div');
            questionCard.className = 'bg-white rounded-xl shadow-md p-6';
            questionCard.id = `question-${index}`;

            // Create the section header
            const sectionHeader = document.createElement('p');
            sectionHeader.className = 'text-sm font-semibold text-blue-600 mb-2';
            sectionHeader.textContent = `Section: ${item.section}`;

            // Create the question text
            const questionText = document.createElement('p');
            questionText.className = 'text-lg font-medium text-slate-800 mb-4';
            questionText.textContent = `${index + 1}. ${item.question}`;

            // Append header and question
            questionCard.appendChild(sectionHeader);
            questionCard.appendChild(questionText);
            
            // Create and append options
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'space-y-3';
            
            const shuffledOptions = shuffleArray([...item.options]);

            shuffledOptions.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'quiz-option p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 hover:border-slate-300 transition-all';
                optionDiv.textContent = option;
                optionDiv.addEventListener('click', () => selectAnswer(index, option, optionDiv));
                optionsContainer.appendChild(optionDiv);
            });

            questionCard.appendChild(optionsContainer);
            quizContainer.appendChild(questionCard);
        });
    }

    /**
     * Handles the user selecting an answer.
     * @param {number} questionIndex The index of the question.
     * @param {string} answer The selected answer text.
     * @param {HTMLElement} selectedDiv The div element that was clicked.
     */
    function selectAnswer(questionIndex, answer, selectedDiv) {
        userAnswers[questionIndex] = answer;
        
        // Visually update selection
        const parent = selectedDiv.parentNode;
        parent.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        selectedDiv.classList.add('selected');
    }

    /**
     * Submits the quiz, calculates the score, and displays results.
     */
    function submitQuiz() {
        let score = 0;
        reviewSection.innerHTML = '';

        quizData.forEach((item, index) => {
            const isCorrect = userAnswers[index] === item.answer;
            if (isCorrect) {
                score++;
            }
            
            // Update question styling based on correctness
            const questionCard = document.getElementById(`question-${index}`);
            const options = questionCard.querySelectorAll('.quiz-option');
            
            options.forEach(opt => {
                opt.classList.remove('selected');
                opt.style.cursor = 'default';
                
                if (opt.textContent === item.answer) {
                    opt.classList.add('correct');
                } else if (opt.textContent === userAnswers[index] && !isCorrect) {
                    opt.classList.add('incorrect');
                }
            });
        });

        // Display overall score and feedback
        const percentage = Math.round((score / quizData.length) * 100);
        scoreEl.textContent = `Your Score: ${score} out of ${quizData.length} (${percentage}%)`;
        
        if (percentage >= 80) {
            feedbackEl.textContent = "Excellent work! You have a strong understanding of the inspection protocols.";
            feedbackEl.className = "text-green-700 font-medium";
        } else {
            feedbackEl.textContent = "Good effort. Review the incorrect answers to strengthen your knowledge.";
            feedbackEl.className = "text-amber-700 font-medium";
        }

        // Hide quiz and show results
        quizContainer.classList.add('hidden'); // Or just leave it to show review
        submissionArea.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        // Move the answered questions into the review section
        reviewSection.innerHTML = quizContainer.innerHTML;
        quizContainer.innerHTML = '';
        window.scrollTo(0, 0);
    }
    
    /**
     * Resets the quiz to its initial state.
     */
    function retryQuiz() {
        userAnswers = {};
        loadQuiz();
    }


    // --- EVENT LISTENERS ---
    submitBtn.addEventListener('click', submitQuiz);
    retryBtn.addEventListener('click', retryQuiz);

    // --- INITIALIZATION ---
    loadQuiz();
});
