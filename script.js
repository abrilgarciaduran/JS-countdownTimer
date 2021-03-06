let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 1) {
            clearInterval(countdown);
        }
        displayTimeLeft(secondsLeft);

    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    document.title = display;
    timerDisplay.textContent = display;
}
function displayEndTime(endTime) {
    const end = new Date(endTime);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTimeDisplay.textContent = `Regresar a las ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
};
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60)
    this.reset;
})