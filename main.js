//Declare variables that we need
var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;

//Define vars to carry "display" value
var displayMs = 0;
var displaySec = 0;
var displayMin = 0;
var displayHr = 0;

//Define var to carry setInterval() function
var interval = null;

//Define var to carry stopwatch status
var status = "stopped";

//Define stopwatch function which contains miliseconds, seconds, minutes and hour logics
function stopwatch(){

    ms++;

    //Incrementing the values
    if(ms/100 ===1){
        ms = 0;
        sec++;

        if(sec / 60 === 1){
            sec = 0;
            min++;

            if(min / 60 === 1){
                min = 0;
                hr++;
            }

        }
    }

    //If miliseconds/seconds/minutes/hours are only one digit, add a leading 0 to the value
      if(ms < 10){
        displayMs = "0" + ms.toString();
    }
    else{
        displayMs = ms;
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

    if(hr < 10){
        displayHr = "0" + hr.toString();
    }
    else{
        displayHr = hr;
    }

    //Showing the time on html page
    document.getElementById("display").innerHTML = displayHr + ":" + displayMin + ":" + displaySec + "." + displayMs;

}



function startstop(){

    if(status === "stopped"){

        //Calling the stopwatch function (by making use of the setInterval() function)
        interval = window.setInterval(stopwatch, 10);
        document.getElementById("startstop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        status = "stopped";

    }

}

//Resetting the stopwatch
function reset(){

    window.clearInterval(interval);
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startstop").innerHTML = "Start";

}