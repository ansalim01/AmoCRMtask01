const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId

  return (seconds) => {
    let remainingSeconds = seconds
    clearInterval(intervalId)

    const updateTimer = () => {
      const hours = Math.floor(remainingSeconds / 3600)
      const minutes = Math.floor((remainingSeconds % 3600) / 60)
      const seconds = remainingSeconds % 60

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

      timerEl.textContent = formattedTime

      if (remainingSeconds <= 0) {
        clearInterval(intervalId)
      } else {
        remainingSeconds--
      }
    }
    // шаг таймера
    updateTimer()
    intervalId = setInterval(updateTimer, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '')
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})