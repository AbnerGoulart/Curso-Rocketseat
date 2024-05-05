const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")

const randomNumber = Math.round(Math.random() *10)
let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")

    document.querySelector(".screenTwo h2")
    .innerText = `Parabéns!! Você acertou em ${xAttempts} tentativas`
  }
  
  inputNumber.value = ""
  xAttempts++
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function (){
  screenOne.classList.remove("hide")
  screenTwo.classList.add("hide")
  xAttempts = 1
})