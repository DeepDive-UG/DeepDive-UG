// Quiz data - embedded directly to avoid CORS issues
const quizData = [
    {
        "question": "Czym jest misja IGNIS?",
        "A": "Polską misją technologiczno-naukową na ISS",
        "B": "Teleskopem kosmicznym",
        "C": "Robotycznym łazikiem marsjańskim",
        "D": "Misją załogową na Marsa",
        "correct": "A",
        "tag": "IGNIS" 
    },
    {
        "question": "Co po łacinie oznacza słowo 'ignis'?",
        "A": "Woda",
        "B": "Ogień",
        "C": "Ziemia",
        "D": "Powietrze",
        "correct": "B",
        "tag": "IGNIS" 
    },
    {
        "question": "Jaki jest główny cel misji IGNIS?",
        "A": "Przeprowadzanie eksperymentów w warunkach mikrograwitacji",
        "B": "Lądowanie na Księżycu",
        "C": "Badanie powierzchni Ziemi z przestrzeni kosmicznej",
        "D": "Obserwacje astronomiczne",
        "correct": "A",
        "tag": "IGNIS" 
    },
    {
        "question": "Na jakiej stacji kosmicznej realizowana jest misja IGNIS?",
        "A": "Międzynarodowa Stacja Kosmiczna (ISS)",
        "B": "Chińska Stacja Kosmiczna (Tiangong)",
        "C": "Rosyjska Stacja Kosmiczna (Mir)",
        "D": "Europejska Stacja Kosmiczna",
        "correct": "A",
        "tag": "IGNIS" 
    },
    {
        "question": "Misja IGNIS zakłada również działania _____ obok badań naukowych.",
        "A": "rolnicze",
        "B": "turystyczne",
        "C": "wydobywcze zasobów kosmicznych",
        "D": "edukacyjne i popularyzacyjne",
        "correct": "D",
        "tag": "IGNIS" 
    },
    {
        "question": "Ile eksperymentów było planowanych do przeprowadzenia podczas misji IGNIS?",
        "A": "21",
        "B": "13",
        "C": "8",
        "D": "1",
        "correct": "B",
        "tag": "IGNIS"
    },
    {
        "question": "Jak długo trwała misja IGNIS na ISS?",
        "A": "7 dni",
        "B": "14 dni",
        "C": "30 dni",
        "D": "60 dni",
        "correct": "B",
        "tag": "IGNIS"
    },
    {
        "question": "Jakie korzyści przynosi misja IGNIS dla Polski?",
        "A": "Eksploracja Księżyca",
        "B": "Budowa nowej stacji kosmicznej",
        "C": "Rozwój technologii kosmicznych i zwiększenie prestiżu naukowego",
        "D": "Produkcja satelitów komunikacyjnych",
        "correct": "C",
        "tag": "IGNIS"
    },
    {
        "question": "Najjaśniejszy obiekt na niebie nocnym po Księżycu to:",
        "A": "Mars",
        "B": "Wenus",
        "C": "Jowisz",
        "D": "Saturn",
        "correct": "B",
        "tag": "kosmos"
    },
    {
        "question": "Jak nazywa się pierwsza sztuczna satelita Ziemi?",
        "A": "Apollo 11",
        "B": "Hubble",
        "C": "Voyager 1",
        "D": "Sputnik 1",
        "correct": "D",
        "tag": "kosmos"
    },
    {
        "question": "Pierwszy Polak w kosmosie to:",
        "A": "Mirosław Hermaszewski",
        "B": "Tadeusz Kościuszko",
        "C": "Sławosz Uznański - Wiśniewski",
        "D": "Jurij Gagarin",
        "correct": "A",
        "tag": "kosmos"
    },
    {
        "question": "Jakie jest największe ciało niebieskie w Układzie Słonecznym?",
        "A": "Ziemia",
        "B": "Jowisz",
        "C": "Słońce",
        "D": "Mars",
        "correct": "C",
        "tag": "kosmos"
    },
    {
        "question": "Misja IGNIS jest częścią misji komercyjnej, która nazywa się:",
        "A": "SpaceX",
        "B": "Blue Origin",
        "C": "Ax-4",
        "D": "Dragon",
        "correct": "C",
        "tag": "IGNIS"
    },
    {
        "question": "Ile osób było w składzie misji Ax-4?",
        "A": 5,
        "B": 4,
        "C": 3,
        "D": 2,
        "correct": "B",
        "tag": "IGNIS"
    },
    {
        "question": "Kto był dowódcą misji Ax-4?",
        "A": "Peggy Whitson",
        "B": "Sławosz Uznański - Wiśniewski",
        "C": "Shubhanshu Shukla",
        "D": "Tibor Kapu",
        "correct": "A",
        "tag": "IGNIS"
    },
    {
        "question": "Która firma odpowiadała za transport misji Ax-4 na ISS?",
        "A": "NASA",
        "B": "Roscosmos",
        "C": "SpaceX",
        "D": "Blue Origin",
        "correct": "C",
        "tag": "IGNIS"
    },
    {
        "question": "Która planeta jest 7 od Słońca w Układzie Słonecznym?",
        "A": "Neptun",
        "B": "Jowisz",
        "C": "Saturn",
        "D": "Uran",
        "correct": "D",
        "tag": "kosmos"
    },
    {
        "question": "Jak nazywa się największy księżyc Saturna?",
        "A": "Europa",
        "B": "Ganimedes",
        "C": "Tytan",
        "D": "Kallisto",
        "correct": "C",
        "tag": "kosmos"
    },
    {
        "question": "Która planeta ma największą liczbę księżyców?",
        "A": "Saturn",
        "B": "Jowisz",
        "C": "Uran",
        "D": "Neptun",
        "correct": "A",
        "tag": "kosmos"
    },
    {
        "question": "Rakieta, która wyniosła misję Ax-4 na orbitę to:",
        "A": "Falcon 9",
        "B": "Atlas V",
        "C": "Delta IV",
        "D": "Soyuz",
        "correct": "A",
        "tag": "IGNIS"
    },
    {
        "question": "Pierwsza kobieta w przestrzeni kosmicznej to:",
        "A": "Mae Jemison",
        "B": "Sally Ride",
        "C": "Valentina Tereshkova",
        "D": "Eileen Collins",
        "correct": "C",
        "tag": "kosmos"
    },
    {
        "question": "Która misja kosmiczna była pierwszą załogową misją na Księżyc?",
        "A": "Apollo 11",
        "B": "Gemini 4",
        "C": "Mercury-Redstone 3",
        "D": "Vostok 1",
        "correct": "A",
        "tag": "kosmos"
    },
    {
        "question": "Co oznacza skrót AI?",
        "A": "Advanced Integration",
        "B": "Automated Interface",
        "C": "Artificial Intelligence",
        "D": "Applied Innovation",
        "correct": "C",
        "tag": "AI"
    },
    {
        "question": "Misja IGNIS to pierwszy polski udział w misji załogowej na ISS od:",
        "A": "1978",
        "B": "2000",
        "C": "2010",
        "D": "2025",
        "correct": "A",
        "tag": "IGNIS" 
    },
    {
        "question": "Które z poniższych zastosowań AI jest typowe w łazikach marsjańskich?",
        "A": "Pisanie raportów naukowych",
        "B": "Autonomiczne omijanie przeszkód",
        "C": "Tworzenie map DNA bakterii",
        "D": "Analiza pogody na Ziemi",
        "correct": "B",
        "tag": "AI"
    },
    {
        "question": "Która z poniższych dziedzin najbardziej korzysta z AI?",
        "A": "Astronomia",
        "B": "Medycyna",
        "C": "Finanse",
        "D": "Wszystkie powyższe",
        "correct": "D",
        "tag": "AI"
    },
    {
        "question": "Jednym z wyzwań dla AI w kosmosie jest:",
        "A": "Brak internetu",
        "B": "Zbyt wysokie ciśnienie",
        "C": "Zbyt szybka rotacja Ziemi",
        "D": "Promieniowanie wpływające na elektronikę",
        "correct": "D",
        "tag": "AI"
    },
    {
        "question": "Sztuczna inteligencja jest kluczowa w poszukiwaniu asteroid, ponieważ:",
        "A": "Może sterować teleskopami z Ziemi",
        "B": "Umożliwia szybkie wykrywanie poruszających się obiektów",
        "C": "Tworzy nowe orbity asteroid",
        "D": "Zbiera próbki skał",
        "correct": "B",
        "tag": "AI"
    },
    {
        "question": "Na Międzynarodowej Stacji Kosmicznej znajduje się robot CIMON, który wykorzystuje AI do:",
        "A": "Naprawy uszkodzonych paneli słonecznych",
        "B": "Generowania przepisów z żywności liofilizowanej",
        "C": "Pisania raportów z misji kosmicznych",
        "D": "Pomocy astronautom w wykonywaniu zadań i radzeniu sobie ze stresem",
        "correct": "D",
        "tag": "AI"
    },
    {
        "question": "Która sonda kosmiczna dostarczyła pierwsze szczegółowe zdjęcia Plutona w 2015 roku?",
        "A": "Voyager",
        "B": "Cassini",
        "C": "Pioneer 10",
        "D": "New Horizons",
        "correct": "D",
        "tag": "kosmos"
    },
    {
        "question": "Która planeta jest znana jako 'Czerwona Planeta'?",
        "A": "Wenus",
        "B": "Mars",
        "C": "Jowisz",
        "D": "Saturn",
        "correct": "B",
        "tag": "kosmos"
    },
    {
        "question": "AI w astronomii pozwala na:",
        "A": "Tworzenie animacji gwiazd",
        "B": "Zmniejszanie promieniowania kosmicznego",
        "C": "Budowanie rakiet",
        "D": "Szybką analizę i klasyfikację milionów obiektów kosmicznych",
        "correct": "D",
        "tag": "AI"
    },
    {
        "question": "Jak AI wspiera poszukiwanie sygnałów od cywilizacji pozaziemskich?",
        "A": "Tworzy fale radiowe",
        "B": "Zwiększa moc nadajników",
        "C": "Analizuje dane radioteleskopów w poszukiwaniu nietypowych sygnałów",
        "D": "Buduje nowe radioteleskopy",
        "correct": "C",
        "tag": "AI"
    },
    {
        "question": "Który rodzaj uczenia maszynowego jest najczęściej używany do klasyfikacji galaktyk?",
        "A": "Uczenie ze wzmocnieniem",
        "B": "Uczenie nadzorowane",
        "C": "Uczenie bez nadzoru",
        "D": "Algorytmy genetyczne",
        "correct": "B",
        "tag": "AI"
    }
];

// Quiz state
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const categoryBadge = document.getElementById('category-badge');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress-bar');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const answersSummary = document.getElementById('answers-summary');

// Select 5 random questions with at least one from each category
function selectQuestions() {
    const categories = ['AI', 'IGNIS', 'kosmos'];
    const selected = [];
    const remaining = [...quizData];

    // Get at least one question from each category
    for (const category of categories) {
        const categoryQuestions = remaining.filter(q => q.tag === category);
        if (categoryQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
            const question = categoryQuestions[randomIndex];
            selected.push(question);
            
            // Remove selected question from remaining
            const indexInRemaining = remaining.indexOf(question);
            remaining.splice(indexInRemaining, 1);
        }
    }

    // Fill up to 5 questions with random ones from remaining
    while (selected.length < 5 && remaining.length > 0) {
        const randomIndex = Math.floor(Math.random() * remaining.length);
        selected.push(remaining[randomIndex]);
        remaining.splice(randomIndex, 1);
    }

    // Shuffle the selected questions
    return selected.sort(() => Math.random() - 0.5);
}

// Display current question
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update question info
    questionNumber.textContent = `Pytanie ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    categoryBadge.textContent = question.tag;
    categoryBadge.className = `badge ${question.tag}`;
    
    // Update question text
    questionText.textContent = question.question;
    
    // Create answer buttons
    answersContainer.innerHTML = '';
    const answers = ['A', 'B', 'C', 'D'];
    
    answers.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <span class="letter">${letter}</span>
            <span class="text">${question[letter]}</span>
        `;
        button.onclick = () => selectAnswer(letter, button);
        answersContainer.appendChild(button);
    });
    
    // Reset next button
    nextBtn.disabled = true;
}

// Handle answer selection
function selectAnswer(letter, button) {
    const question = selectedQuestions[currentQuestionIndex];
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    allButtons.forEach(btn => btn.disabled = true);
    
    // Check if answer is correct
    const isCorrect = letter === question.correct;
    
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        // Highlight correct answer
        allButtons.forEach(btn => {
            if (btn.querySelector('.letter').textContent === question.correct) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Save user answer
    userAnswers.push({
        question: question.question,
        userAnswer: letter,
        correctAnswer: question.correct,
        isCorrect: isCorrect,
        category: question.tag,
        answers: {
            A: question.A,
            B: question.B,
            C: question.C,
            D: question.D
        }
    });
    
    // Enable next button
    nextBtn.disabled = false;
}

// Move to next question or show results
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show results screen
function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Display score
    finalScore.textContent = score;
    
    // Display message based on score
    const percentage = (score / selectedQuestions.length) * 100;
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfekcyjnie! Znasz odpowiedzi na wszystkie pytania!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '🎯 Świetny wynik! Masz doskonałą wiedzę!';
    } else if (percentage >= 60) {
        resultMessage.textContent = '👍 Dobra robota! Całkiem nieźle!';
    } else if (percentage >= 40) {
        resultMessage.textContent = '📚 Niezły wynik, ale jest miejsce na poprawę!';
    } else {
        resultMessage.textContent = '💪 Nie poddawaj się! Spróbuj jeszcze raz!';
    }
    
    // Display answers summary
    answersSummary.innerHTML = '<h3 style="margin-bottom: 20px; font-size: 1.2rem;">Podsumowanie odpowiedzi:</h3>';
    
    userAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `summary-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        const statusIcon = answer.isCorrect ? '✓' : '✗';
        const statusText = answer.isCorrect ? 'Poprawnie' : 'Niepoprawnie';
        
        item.innerHTML = `
            <div class="summary-question">
                ${statusIcon} Pytanie ${index + 1}: ${answer.question}
            </div>
            <div class="summary-answer ${answer.isCorrect ? 'correct' : 'incorrect'}">
                Twoja odpowiedź: ${answer.userAnswer}. ${answer.answers[answer.userAnswer]}
            </div>
            ${!answer.isCorrect ? `
                <div class="summary-answer correct">
                    Prawidłowa odpowiedź: ${answer.correctAnswer}. ${answer.answers[answer.correctAnswer]}
                </div>
            ` : ''}
        `;
        
        answersSummary.appendChild(item);
    });
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedQuestions = selectQuestions();
    
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Start quiz
function startQuiz() {
    selectedQuestions = selectQuestions();
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    displayQuestion();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Log that quiz is ready
console.log(`Quiz gotowy! Załadowano ${quizData.length} pytań z 3 kategorii.`);
