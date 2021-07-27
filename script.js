const textW = document.querySelector('.text-wrapper');
const textArea = document.querySelector('#textArea');
var originText = document.querySelector('#text').innerHTML
const resetButton = document.querySelector('#reset')
const theTimer = document.querySelector('.timer')
textArea.value = ""
let timer = [0,0,0,0];
let interval;
let timeRunning = false;

function addText(){

    originText = document.getElementById('addtext').value
    if (originText.length < 700){

        if (originText.replace(/ /g, "") != ''){
            document.querySelector('#text').innerHTML = originText
        }
        else {
            var originText = document.querySelector('#text').innerHTML
            document.getElementById('addtext').value = ''
        }
    }
    else {
        alert("cannot add text more than 700 characters")
        document.getElementById('addtext').value = ''
    }

}

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
        timetaken = theTimer.innerHTML.split(':');
        var totalTime =  timetaken[0] + timetaken[1]/60 

        console.log(((textEntered.length)/5)/totalTime);
        console.log(textEntered.length, totalTime);
        



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
textArea.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        reset();
    }
})
resetButton.addEventListener('click', reset, false)
function greet() {
    

}