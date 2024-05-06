const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const closedCookie = document.getElementById('closedCookie')
const btnReset = document.getElementById('btnReset')

closedCookie.addEventListener('click', () => {
  screenOne.classList.add('hide')
  screenTwo.classList.remove('hide')
})

btnReset.addEventListener('click', () => {
  location.reload();
});