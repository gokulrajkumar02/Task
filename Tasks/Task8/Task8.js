const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const continueBtn = document.getElementById("continueBtn");
const stopBtn = document.getElementById("stopBtn");

const timerValue = document.getElementById("timerArea")
const stopedTime = document.getElementById("stopedTime")

let timerTime = 0;
let boolStartStop = false;
let boolPauseContinue = false;

startBtn.addEventListener("click", () => { 
    timerTime = (boolStartStop) ? timerTime : 0;
    boolStartStop = true;
    timer = setInterval(() =>{ 
        timerTime++;
        const timerSec = timerTime % 60 < 10 ? ("0" + timerTime % 60) : timerTime % 60;
        const timerMin = Math.floor((timerTime / 60 ) % 60) < 10 ? ("0" + Math.floor((timerTime / 60 ) % 60)) :Math.floor((timerTime / 60 ) % 60) ;
        const timerHour = Math.floor(( timerTime / 60 ) / 60) < 10 ? ("0" + Math.floor(( timerTime / 60 ) / 60)) : Math.floor(( timerTime / 60 ) / 60);
        timerValue.innerText = `${timerHour}:${timerMin}:${timerSec}`
    },1000)
}) 

stopBtn.addEventListener("click",() => { 
    (boolStartStop)? (
    clearInterval(timer),
    boolStartStop = false,
    // lastTime.innerText = `Stoped Time : ${timerHour}:${timerMin}:${timerSec}`
    stopedTime.innerText = "Timer Stoped At :"+ timerValue.innerText,
    timerValue.innerText = "00:00:00"
    ) : alert("Timer is off!!");
    
}) 

pauseBtn.addEventListener("click", () => {  
    (boolStartStop) ?
        clearInterval(timer) :
        alert("Timer is off!!"); 
    boolPauseContinue = true;
    // console.log("kmkmgt54j")
}) 

continueBtn.addEventListener("click", () => { 
    (boolStartStop) ? (boolPauseContinue ? startBtn.click() :  alert("You don't paused the timer")) : alert("Timer is off");
    boolPauseContinue = false;
}) 