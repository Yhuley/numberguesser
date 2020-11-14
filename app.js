//UI Vars
const game = document.querySelector('#game')
const minNum = document.querySelector('.minNum')
const maxNum = document.querySelector('.maxNum')
const guessInput = document.querySelector('.guessInput')
const guessBtn = document.querySelector('.guessSubmit')
const message = document.querySelector('.message')
//Game vars
let min = 1,
    max = 10,
    rightNum = 7,
    guessLeft = 3

minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click',() => {
    let guess = Number(guessInput.value)

    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please write number between ${min} and ${max}`, 'red')
    }
    debugger
    if (guess === rightNum){
        console.log(7)
        guessInput.disabled = true
        guessInput.style.borderColor = 'green'
        setMessage(`${rightNum} is correct!`, 'green')
    }else{

    }
})

setMessage = (msg, color) => {
    message.textContent = msg
    message.style.color = color
}