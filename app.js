const squares = document.querySelectorAll('.square') //find all squares and store them under squares
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]//each of nine square randomly chosen, rounded down with floor 
}

randomSquare()