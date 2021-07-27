const textW = document.querySelector('.text-wrapper');
const textArea = document.querySelector('#textArea');
var originText = document.querySelector('#text').innerHTML
const resetButton = document.querySelector('#reset')
const theTimer = document.querySelector('.timer')
textArea.value = ""
var stories = [`A lorry driver, David is driving 200 penguins to London Zoo. But his lorry breaks down on the motorway, when another lorry driver, Robert stops in the front of him, David asks for help, and explains that he is taking the penguins to the zoo. Robert says, "Ok. I can help you."
Some hours later, Robert drivers back and passes David. David is still on the lorry, and look happy.
"I thought I told you to take those penguins to the zoo." David says.
Robert replies, "I did, but I had some money left, so I'm going to the cinema now."`, `One day, a father and his little son were going home. At this age, the boy was interested in all kinds of things and was always asking questions. Now, he asked, "What's the meaning of the word 'Drunk', dad?" "Well, my son," his father replied, "look, there are standing two policemen. If I regard the two policemen as four then I am drunk."
"But, dad," the boy said, " there's only ONE policeman!"`, `A man who sold brooms went into a barber's shop to get shaved. The barber brought one of his brooms. After he had shaved him, he asked for the price of the brooms.
"Two pence," said the man.
"No, no," said the barber. "I will give you a penny, and if you don't think that is enough, you may take your broom back!"
The man took it and asked what he had to pay his shave.
"A penny," said the barber.
"I will give you a half penny, and if that is not enough, you may put my beard on again."`, `Donny is my little brother. He is a naughty boy.
On Sunday mo
ing Donny went into the yard and played with a dog. Sometimes a bird would come down to stay on the top's of the dog's house. Then Donny threw a stone at it. Suddenly the little boy began crying. Mother ran to Donny and asked him what was wrong. He said, "I've broken sister's plate. She has beaten me." "Why?" "I threw it at a bird, and it went straight to the plate."
Such was my naught brother.`, `A little panda picks up a pumpkin and wants to take it home. But the pumpkin is too big. The panda can't take it home.
Suddenly she sees a bear riding a bike toward her. She watches the bike. "I know! I have a good idea." she jumps and shouts happily, "I can roll a pumpkin. It's like a wheel."
So she rolls the pumpkin to her home. When her mother sees the big pumpkin, she is surprised, "Oh, my God! How can you carry it home?" the little panda answers proudly, "I can't lift it, but I can roll it." Her mother smiled and says，"What a clever girl! Use you heard to do something,"`, `Tom is a little boy, and he is only seven years old. Once he goes to a cinema. It is the first time for him to do that. He buys a ticket and goes in. But after two or three minutes he comes out, and buys the second ticket and goes in again. After a few minutes he comes out again and buys the third ticket. Two or three minutes after that he comes out and asks for another ticket. But a girl asks him,"Why do you buy so many tickets? How many friends do you meet?" "No, I have no friends here, but a big woman always stops me at the door and cuts up my ticket."`, `A little kid fell in love with another little kid, a school mate. Sometimes the kids think they fall in love when they have
a crush on someone else in the class, when they're eight or ten years old or something like that. So the eight-year-old kid came back home and asked his father, "Father, is it expensive to be married?" And the father said, "Yes, son, it is very expensive." So the son asked, "How much does it cost?" And the father said, "I don't know, son. I'm still paying."`]
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

function changetext() {
    const random = Math.floor(Math.random() * stories.length);
    document.querySelector('#text').innerHTML = stories[random]
    originText = stories[random]
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