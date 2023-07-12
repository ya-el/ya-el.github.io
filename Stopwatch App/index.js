const timer = document.querySelector('.js-timer');

let secondsIntervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer(){
    stopTimer();
    secondsIntervalId = setInterval(() => {
        seconds++;
        if (seconds === 60){
            seconds = 0;
            minutes ++;
            if (minutes === 60){
                minutes = 0;
                hours ++;
                if(hours === 24){
                    resetTimer();
                }
            }
        }
        displayTimer();
    }, 1000)
}

document.querySelector('.js-start-button')
    .addEventListener('click', () => {
        startTimer();
    })

document.querySelector('.js-stop-button')
    .addEventListener('click', () => {
        stopTimer();
    })

document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
        resetTimer();
    })

function stopTimer(){
    clearInterval(secondsIntervalId);
}

function resetTimer(){
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer();
}

function displayTimer(){
    timer.innerHTML = `
        <div class="time">
            ${pad(hours)}:${pad(minutes)}:${pad(seconds)}
        </div>
    `;
}
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
