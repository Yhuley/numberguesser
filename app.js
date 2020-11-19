//UI Vars
const game = document.querySelector('#game')
const minNum = document.querySelector('.minNum')
const maxNum = document.querySelector('.maxNum')
const guessInput = document.querySelector('.guessInput')
const guessBtn = document.querySelector('.guessSubmit')
const message = document.querySelector('.message')
//Game vars

generateRightNum = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1) + 1))
}
let min = 1,
    max = 10,
    rightNum = generateRightNum(min, max),
    guesesLeft = 3

minNum.textContent = min
maxNum.textContent = max

game.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('playAgain')){
        window.location.reload()
    }
})
guessBtn.addEventListener('click',() => {
    let guess = Number(guessInput.value)

    if (isNaN(guess) || guess < min || guess > max){setMessage(`Please write number between ${min} and ${max}`, 'red')}
    else {
        if (guess === rightNum){
            //Game Won
            gameOver(true, `${rightNum} is correct!`)
        }else{
            //Wrong number
            guesesLeft -= 1

            if(guesesLeft === 0){
                //Game over
                gameOver(false, `GAME OVER. The correct answer was ${rightNum}`)
            }else {
                //Game continue - answer wrong
                guessInput.style.borderColor = 'yellow'
                guessInput.value = ''
                setMessage(`${guess} is not correct, ${guesesLeft} tries left`, 'yellow')
            }
        }
    }
})
gameOver = (isWin, msg) => {
    let color = isWin ? 'green' : 'red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    setMessage(msg, color)
    guessBtn.value = 'Play Again'
    guessBtn.className += ' playAgain'
}
setMessage = (msg, color = 'black') => {
    message.textContent = msg
    message.style.color = color
}