const img = "img/bus.gif";
const text = "Dags att gå till bussen!";

setTimeout(function() {
    let reminderNotif = new Notification("Påminnelse", { body: text, icon: img });
    reminderNotif.onclick = function() {
        //window.focus();
        //window.open(window.location.href);
        window.open("https://newbie13xd.github.io/sns-project");
        reminderNotif.close();
    };
}, 10000);