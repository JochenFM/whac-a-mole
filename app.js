const squares = document.querySelectorAll('.square') //find all squares and store them under squares
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60 
let timerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]//each of nine square randomly chosen, rounded down with floor 
    randomSquare.classList.add('mole')//mole putting itself in a random square every time I refresh the page

    hitPosition = randomSquare.id

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
}) 

function moveMole() {
    timerId = setInterval(randomSquare, 1000)//start timer with page load but would work withut that line. With it, timer button can be added
}
moveMole()


function countDown() {
    currentTime --
    timeLeft.textContent = currentTime //time left wird als currentTime angezeigt

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)//countdown function invoked every 1000ms, and each second 1s abgezogen von current time