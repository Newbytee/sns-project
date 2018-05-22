"use strict";

let pages = document.getElementsByTagName("section");

function changePage(page) {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = (i === page) ? "block" : "none";
    }
}

function startTimer(timerId = 0, minutes = 10) {
    const timerParagraph = document.getElementsByClassName("timerField");
    let seconds = 0;
    let secondsString;
    
    timerParagraph[timerId].innerHTML = `${minutes}:${seconds}`;
    let interval = setInterval(function() {
        if (seconds === 0) {
            minutes--;
            seconds = 60;
        }
        seconds--;
        if (seconds < 10) {
            secondsString = `0${seconds}`;
        } else {
            secondsString = `${seconds}`;
        }
        timerParagraph[timerId].innerHTML = `${minutes}:${secondsString}`;
        if (minutes === 0) { 
            clearInterval(interval)
            timerParagraph[timerId].innerHTML = `0:00`;
        }
    }, 1000);
}

changePage(0);