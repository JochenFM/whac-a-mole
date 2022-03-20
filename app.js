const squares = document.querySelectorAll('.square') //find all squares and store them under squares
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]//each of nine square randomly chosen, rounded down with floor 
    randomSquare.classList.add('mole')//mole putting itself in a random square every time I refresh the page
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)//start timer with page load but would work withut that line. With it, timer button can be added
}
moveMole()