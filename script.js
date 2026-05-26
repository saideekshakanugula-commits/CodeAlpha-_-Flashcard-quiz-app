let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML is HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling webpages."
    }
];

let currentCard = 0;

function displayCard() {
    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;

    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        displayCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        displayCard();
    }
}

function addCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question && answer) {
        flashcards.push({
            question: question,
            answer: answer
        });

        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";

        alert("Flashcard Added!");
    }
}

function editCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question && answer) {
        flashcards[currentCard] = {
            question: question,
            answer: answer
        };

        displayCard();
        alert("Flashcard Updated!");
    }
}

function deleteCard() {
    flashcards.splice(currentCard, 1);

    if (currentCard > 0) {
        currentCard--;
    }

    displayCard();
    alert("Flashcard Deleted!");
}

displayCard();