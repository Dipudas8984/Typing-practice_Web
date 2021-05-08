const textW = document.querySelector('.text-wrapper');
const textArea = document.querySelector('#textArea');
const originText = document.querySelector('.text').innerHTML
const resetButton = document.querySelector('#reset')
const theTimer = document.querySelector('.timer')

let timer = [0,0,0,0];
let interval;
let timeRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }

    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100)- (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function reset() {
    clearInterval(interval);
    interval = null;
    let timer = [0,0,0,0];
    timeRunning = false;

    textArea.value = ""
    theTimer.innerHTML = "00:00:00";
    textW.style.borderColor = 'green';
}

function spellCheck() {
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    if (textEntered == originText) {
        textW.style.borderColor = 'orange';
        clearInterval(interval);

    }else{
        if (textEntered == originTextMatch) {
            textW.style.borderColor = 'green';
        }else {
            textW.style.borderColor = 'red';
        }
    }
    console.log();
}

function start() {
    let textLength = textArea.value.length;
    if (textLength === 0) {
        timeRunning = true;
        interval =  setInterval(runTimer, 10);
    }
}

textArea.addEventListener('keypress', start, false);
textArea.addEventListener('keyup', spellCheck, false);
resetButton.addEventListener('click', reset, false)
