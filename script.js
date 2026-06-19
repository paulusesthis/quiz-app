const nextBtn = document.getElementById("next");
const questionHeader = document.getElementById("questionHeader");
const options = document.getElementById("options");
const completed = document.getElementById("completed");
const scoreLabel = document.getElementById("scoreLabel");
const percent = document.getElementById("percent");
const ansAlert = document.getElementById("unanswered");
const counter = document.getElementById("counter");
const scoreDisplay = document.getElementById("score");
const quizBody = document.getElementById("quizBody");

const labels = ["A", "B", "C", "D"];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which country is home to the Great Pyramid of Giza?",
        options: ["Mexico", "Greece", "Egypt", "India"],
        answer: "Egypt"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Go", "Gd"],
        answer: "Au"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Leopard"],
        answer: "Lion"
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which country is famous for inventing pizza?",
        options: ["France", "Spain", "Italy", "Germany"],
        answer: "Italy"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "95°C", "100°C", "110°C"],
        answer: "100°C"
    },
    {
        question: "Which instrument has 88 keys?",
        options: ["Violin", "Flute", "Piano", "Trumpet"],
        answer: "Piano"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "Which bird is often associated with delivering babies in folklore?",
        options: ["Eagle", "Stork", "Sparrow", "Owl"],
        answer: "Stork"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["365", "366", "364", "367"],
        answer: "366"
    },
    {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Mojave Desert"],
        answer: "Sahara Desert"
    }
];

function displayQuestion() {
    answered = false;

    questionHeader.innerHTML = "";
    options.innerHTML = "";

    const questionElement = questions[currentQuestion];

    const question = document.createElement("p");
    question.className = "font-medium text-[17px] text-gray-900 mb-5 leading-snug";
    question.textContent = questionElement.question;
    questionHeader.appendChild(question);

    const buttons = [];
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "flex flex-col gap-2.5";

    questionElement.options.forEach((option, i) => {
        const button = document.createElement("button");
        button.className = "text-left py-3 px-4 bg-white border-[1.5px] border-gray-200 rounded-xl hover:border-[#5045E7] hover:bg-[#EEEDFE] hover:text-[#3C3489] transition-colors disabled:pointer-events-none flex items-center gap-3 text-sm";

        const labelSpan = document.createElement("span");
        labelSpan.className = "w-[22px] h-[22px] rounded-full border-[1.5px] border-gray-300 flex items-center justify-center text-[11px] font-medium text-gray-400 shrink-0 transition-colors";
        labelSpan.textContent = labels[i];

        const textSpan = document.createElement("span");
        textSpan.textContent = option;

        button.appendChild(labelSpan);
        button.appendChild(textSpan);
        buttons.push({ button, labelSpan });

        button.addEventListener("click", () => {
            if (answered) return;
            answered = true;

            buttons.forEach(({ button: btn }) => {
                btn.disabled = true;
            });

            if (option === questionElement.answer) {
                score++;
                scoreDisplay.textContent = score;
                button.classList.add("border-[#1D9E75]", "bg-[#E1F5EE]", "text-[#085041]");
                labelSpan.classList.remove("border-gray-300", "text-gray-400");
                labelSpan.classList.add("border-[#1D9E75]", "bg-[#1D9E75]", "text-white");
                labelSpan.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i>';
            } else {
                button.classList.add("border-[#D85A30]", "bg-[#FAECE7]", "text-[#4A1B0C]");
                labelSpan.classList.remove("border-gray-300", "text-gray-400");
                labelSpan.classList.add("border-[#D85A30]", "bg-[#D85A30]", "text-white");
                labelSpan.innerHTML = '<i class="fa-solid fa-xmark text-[10px]"></i>';

                buttons.forEach(({ button: btn, labelSpan: lbl }) => {
                    if (btn.querySelector("span:last-child") && btn.querySelector("span:last-child").textContent === questionElement.answer) {
                        btn.classList.add("border-[#1D9E75]", "bg-[#E1F5EE]", "text-[#085041]");
                        lbl.classList.remove("border-gray-300", "text-gray-400");
                        lbl.classList.add("border-[#1D9E75]", "bg-[#1D9E75]", "text-white");
                        lbl.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i>';
                    }
                });
            }
        });

        optionsDiv.appendChild(button);
    });

    options.appendChild(optionsDiv);
    updateCount();
    updateNextBtn();
}

displayQuestion();

nextBtn.addEventListener("click", () => {
    if (!answered) {
        showAlert();
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        quizBody.classList.add("hidden");
        scoreLabel.textContent = `${score}/${questions.length}`;
        percent.textContent = `${Math.round((score / questions.length) * 100)}%`;
        completed.classList.remove("hidden");
    }
});

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    scoreDisplay.textContent = score;
    completed.classList.add("hidden");
    quizBody.classList.remove("hidden");
    displayQuestion();
}

function showAlert() {
    ansAlert.classList.remove("hidden");

    setTimeout(() => {
        ansAlert.classList.remove("opacity-0", "translate-y-5");
    }, 10);

    clearTimeout(ansAlert.hideTimeout);

    ansAlert.hideTimeout = setTimeout(() => {
        hideAlert();
    }, 3000);
}

function hideAlert() {
    ansAlert.classList.add("opacity-0", "translate-y-5");

    setTimeout(() => {
        ansAlert.classList.add("hidden");
    }, 300);
}

function updateNextBtn() {
    nextBtn.innerHTML = currentQuestion === questions.length - 1
        ? 'Submit'
        : 'Next <i class="fa-solid fa-arrow-right text-xs"></i>';
}

function updateCount() {
    counter.textContent = `${currentQuestion + 1} / ${questions.length}`;
}