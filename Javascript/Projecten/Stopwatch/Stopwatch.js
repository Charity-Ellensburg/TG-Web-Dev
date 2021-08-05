let miliSec = 0;
let sec = 0;
let min = 0;

let displayMiliSec = 0;
let displaySec = 0;
let displayMin = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    miliSec++;

    if(miliSec / 100 === 1){
        miliSec = 0;
        sec++;
    
        if(sec / 60 === 1){
            sec = 0;
            min++;
        }
    }

    if(miliSec < 10){
        displayMiliSec = "0" + miliSec.toString();
    }
        else{
            displayMiliSec = miliSec;
        }

    if(sec < 10){
        displaySec = "0" + sec.toString();
    }
        else{
            displaySec = sec;
        }

    if(min < 10){
        displayMin = "0" + min.toString();
    }
        else{
            displayMin = min;
        }

    document.getElementById("display").innerHTML = displayMin + ":" + displaySec + ":" + displayMiliSec;
}

function start(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10);
        status = "started";
    }
     }


function pause(){
    if(status === "started")
    window.clearInterval(interval);
    status = "stopped"
}

function stop(){
    window.clearInterval(interval);
    miliSec = 0;
    sec = 0;
    min = 0;
    document.getElementById("display").innerHTML = "00:00:00"
    status = "stopped"
}
// window.setInterval(stopWatch, 10);

