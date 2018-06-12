"use strict";

const pages = document.getElementsByTagName("section");

function changePage(page) {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = (i === page) ? "block" : "none";
    }
}

function closePage() {
    window.close();
}

function openPhone() {
    window.open("https://img.gadgethacks.com/img/74/84/63633655937000/0/best-way-record-calls-your-oneplus-3-3t.w1456.jpg", "", "width=500,height=880,left=800,top=50");
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
            clearInterval(interval);
            timerParagraph[timerId].innerHTML = `0:00`;
        }
    }, 1000);
}

changePage(0);

Notification.requestPermission().then(function(result) {
    console.log(result);
});

/*setTimeout(function() {
    let reminderNotif = new Notification("Påminnelse", { body: text, icon: img });
    reminderNotif.onclick = function() {
        window.focus();
        //window.open(window.location.href);
        reminderNotif.close();
    };
}, 10000);*/