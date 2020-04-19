// SELECTORS
const gameCards = document.querySelectorAll(".game-card");
const score = document.getElementById("score");
const gameCardContainer = document.querySelector(".game-cards-container");
const winScreen = document.querySelector(".winning-screen")
const shuffleButton = document.getElementById("shuffle")
const playAgain = document.getElementById("playAgainButton");
const winInnerText = document.getElementById("win-text-content");
const lives = document.getElementById("lives");
const theme = document.getElementById("theme");
const themePopUp = document.querySelector(".choose-theme-popup");

var scoreVal = 0;
var livesVal = 3;
var openCards = 0;

// EVENT LISTENERS
for (var i = 0; i < gameCards.length; i++) {
    gameCards[i].addEventListener("click", turnCard)
}
shuffleButton.addEventListener("click", shuffleCards)
playAgain.addEventListener("click", function () {
    location.reload();
})
theme.addEventListener("click", switchThemes)
document.getElementById("option-1").addEventListener("click", loadHP);
document.getElementById("option-2").addEventListener("click", loadFriends);
document.getElementById("option-3").addEventListener("click", loadHIMYM);

// FUNCTIONS
function turnCard(e) {
    const card = e.target;
    if (openCards < 2) {
        this.firstElementChild.classList.add("turn-left");
        openCards += 1
    }
    var time = 1500;
    delay = setTimeout(matchCard, time);

}


function matchCard() {
    clearTimeout(delay)
    if (openCards == 2) {
        openCards = 0;
        // if they match increase score
        const openCardsList = document.querySelectorAll(".turn-left");
        const card1 = openCardsList[0].parentElement.lastElementChild.id;
        const card2 = openCardsList[1].parentElement.lastElementChild.id;
        openCardsList[0].classList.remove("turn-left");
        openCardsList[1].classList.remove("turn-left");
        if (card1 == card2) {
            openCardsList[0].classList.add("turn-right");
            openCardsList[1].classList.add("turn-right");
            livesVal = 3;
            lives.innerText = livesVal;

            scoreVal++;
            score.innerText = scoreVal;
            openCardsList[0].parentElement.classList.add("dim");
            openCardsList[1].parentElement.classList.add("dim");
        }
        else {
            if (livesVal > 0) {
                livesVal--;
                lives.innerText = livesVal;

            }
            if (livesVal == 0) {
                loseGame();
            }

        }
    }
    if (scoreVal == 6)
        winGame();
}

function winGame() {
    setTimeout(() => { gameCardContainer.classList.add("fade-out"); }, 1000);
    setTimeout(() => { winScreen.classList.add("fade-in"); }, 1000);
}
function loseGame() {
    setTimeout(() => { gameCardContainer.classList.add("fade-out"); }, 1000);
    winInnerText.innerText = "You lost :(";
    setTimeout(() => { winScreen.classList.add("fade-in"); }, 1000);
}
function resetDim() {
    const dimcards = document.querySelectorAll(".dim");
    for (var i = 0; i < dimcards.length; i++) {
        dimcards[i].classList.remove("dim");
    }
}
function resetRight() {
    const rightCards = document.querySelectorAll(".turn-right");
    for (var i = 0; i < rightCards.length; i++) {
        rightCards[i].classList.remove("turn-right");
    }

}
function resetScores() {
    scoreVal = 0;
    livesVal = 3;
    openCards = 0;
    lives.innerText = livesVal;
    score.innerText = scoreVal;
}
function shuffleCards() {

    resetScores();
    resetRight();
    resetDim();
    let startIndex = Math.floor(Math.random() * 12);
    for (var i = 1; i <= gameCards.length; i++) {
        let index1 = startIndex % gameCards.length;
        let index2 = (startIndex + i) % gameCards.length;
        let tempCard = gameCards[index1].innerHTML;
        gameCards[index1].innerHTML = gameCards[index2].innerHTML;
        gameCards[index2].innerHTML = tempCard;
        startIndex++;
    }
}

function switchThemes() {
    themePopUp.style.display = "block"
}
function loadFriends() {
    resetScores();
    resetRight();
    resetDim();
    shuffleCards()
    theme.innerText = "Friends";
    for (var i = 0; i < 2; i++) {
        document.getElementsByClassName("one")[i].style.backgroundImage = "url('./images/ChandlerBing.png')"
        document.getElementsByClassName("two")[i].style.backgroundImage = "url('./images/MonicaGeller.jpg')"
        document.getElementsByClassName("three")[i].style.backgroundImage = "url('./images/JoeyTribbiani.png')"
        document.getElementsByClassName("four")[i].style.backgroundImage = "url('./images/RossGeller.png')"
        document.getElementsByClassName("five")[i].style.backgroundImage = "url('./images/RachelGreen.png')"
        document.getElementsByClassName("six")[i].style.backgroundImage = "url('./images/PhoebeBuffay.png')"
    }
    themePopUp.style.display = "none"
}
function loadHP() {
    resetScores();
    resetRight();
    resetDim();
    shuffleCards()
    theme.innerText = "Harry Potter"
    for (var i = 0; i < 2; i++) {
        document.getElementsByClassName("one")[i].style.backgroundImage = "url('./images/HarryPotter.jpg')"
        document.getElementsByClassName("two")[i].style.backgroundImage = "url('./images/HermioneGranger.png')"
        document.getElementsByClassName("three")[i].style.backgroundImage = "url('./images/RonWeasley.jpg')"
        document.getElementsByClassName("four")[i].style.backgroundImage = "url('./images/SeverusSnape.jpg')"
        document.getElementsByClassName("five")[i].style.backgroundImage = "url('./images/Voldemort.jpg')"
        document.getElementsByClassName("six")[i].style.backgroundImage = "url('./images/SiriusBlack.jpg')"
    }
    themePopUp.style.display = "none"
}
function loadHIMYM() {
    resetScores();
    resetRight();
    resetDim();
    shuffleCards()
    theme.innerText = "How I met Your Mother"
    for (var i = 0; i < 2; i++) {
        document.getElementsByClassName("one")[i].style.backgroundImage = "url('./images/Ted.jpg')";
        document.getElementsByClassName("two")[i].style.backgroundImage = "url('./images/RobinScherbatsky.png')"
        document.getElementsByClassName("three")[i].style.backgroundImage = "url('./images/Tracy.jpg')"
        document.getElementsByClassName("four")[i].style.backgroundImage = "url('./images/Lily.png')"
        document.getElementsByClassName("five")[i].style.backgroundImage = "url('./images/Marshal.jpg')"
        document.getElementsByClassName("six")[i].style.backgroundImage = "url('./images/Barney.jpg')"
    }
    themePopUp.style.display = "none"
}