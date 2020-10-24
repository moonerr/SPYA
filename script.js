


// choose player
function displayData(elem) {

    var playerId = $(elem).attr("id");
    document.getElementById(playerId).style.backgroundColor = "greenyellow";
    if (playerId == "p3") {
        document.getElementById("normal").style.display = "none";
        document.getElementById("spy").style.display = "block";
    }
    else {
        document.getElementById("spy").style.display = "none";
        document.getElementById("normal").style.display = "block";
    }
   
}

// set timer for making sentence for each player

var timeLeft = 30;
var elem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);
function countdown() {
    if(timeLeft == -1) {
    clearTimeout(timeId);
        doSomething();
    } else {
    elem.innerHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }

}
