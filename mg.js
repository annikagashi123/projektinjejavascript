function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");
    
    if (username === "anika" && password === "anika") {
        document.querySelector("mrena").style.display = "none";
        document.querySelector("mrena2").style.display = "block";
        createBoard();
    } else {
        errorMessage.textContent = "Përdorues ose fjalëkalim i gabuar!";
    }
}


  const grid = document.querySelector(".fund");
const movesDisplay = document.getElementById("levizje");
const resetBtn = document.getElementById("reset");
const darkModeToggle = document.getElementById("darkmode");
let moves = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

const images = [
    "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
    "portokall.PNG", "qershi.PNG", "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
    "portokall.PNG", "qershi.PNG"
];

images.sort(() => 0.5 - Math.random());

function createBoard() {
    images.forEach((imgSrc, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = imgSrc;

        const img = document.createElement("img");
        img.src = imgSrc;
        card.appendChild(img);

        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.querySelector("img").style.display = "block";
    
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard = true;
    
    checkForMatch();
}

function checkForMatch() {
    moves++;
    movesDisplay.textContent = `Moves: ${moves}`;

    if (firstCard.dataset.image === secondCard.dataset.image) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.querySelector("img").style.display = "none";
            secondCard.querySelector("img").style.display = "none";
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

resetBtn.addEventListener("click", () => {
    grid.innerHTML = "";
    moves = 0;
    movesDisplay.textContent = "Moves: 0";
    images.sort(() => 0.5 - Math.random());
    createBoard();
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

createBoard();