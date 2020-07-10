var min = 0;
var sec = 0;
var msec = 0;

var minHead = document.getElementById('min');
var secHead =  document.getElementById('sec');
var msecHead = document.getElementById('msec');

var interval;


function timer(){
    msec++;
    msecHead.innerHTML = msec;

    if(msec >= 10){
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,100);
    document.getElementById('start').disabled = true;
    document.getElementById('start').style.backgroundColor = "seagreen"
}


function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    document.getElementById('start').style.backgroundColor = "blue"
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    msecHead.innerHTML = msec;
    document.getElementById('start').disabled = false;
    document.getElementById('start').style.backgroundColor = "blue"
    pause();
}