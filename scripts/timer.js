
//constants for durations
const MINUTE = 60;
const HOUR = 3600;
const DAY = 86400;

//the globals that handle intervals
var x = [];
var idIndex = 0;

//starts the timer
//duration: length of the timer
//pid: paragraph id for the timer to be updated
//bid: button id to be disabled when the timer starts
function startTimer(duration, pid, bid, resetbid) {
    //end time of the timer
    var timerEnd = new Date().getTime() + (duration * 1000) + 100;

    //sets the name of the associated reset button to the index of the interval
    //this is necessary to reset the proper timer
    document.getElementById(resetbid).setAttribute("name", idIndex.toString());
    idIndex++;

    //update every second
    x.push(setInterval(function () {
        //get current date/time
        var now = new Date().getTime();

        //duration of the countdown
        var distance = timerEnd - now;
        document.getElementById(bid).disabled = true;

        setCookie(pid + "Distance", distance);
        setCookie("LastKnownTime", now);
        //calculate days, hours, minutes, seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var finalTime = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        //output result on that timer's pid
        document.getElementById(pid).value = finalTime;



        //write text when countdown finishes
        if (distance < 0) {
            endTimer(pid, bid, resetbid);
        }
    }, 500));
}

//resets the timer
function resetTimer(duration, pid, bid, resetbid) {
    clearAudios();
    //get the button, handles uncertainty
    var resetButton = document.getElementById(resetbid);
    if (resetButton.innerText == "Reset to Default") {
        resetButton.innerText = "Are you sure?";

        // setTimeout(function () {
        //         resetButton.innerText = "Reset to Default";
        //     }, 1500);
        resetButton.addEventListener("mouseleave", function () {
            resetButton.innerText = "Reset to Default";
        });
    } else {
        setCookie(pid + "Distance", "");
        setCookie(pid + "LastKnownTime", "");
        resetButton.innerText = "Reset to Default";
        //get the interval id to be cleared
        var clearId = resetButton.getAttribute("name");
        clearInterval(x[parseInt(clearId)]);
        //re enable button
        document.getElementById(bid).disabled = false;
        //only update the list if the timer is done
        if (document.getElementById(pid).value == "Timer done!") {
            updateList(bid);
        }
        //write the default time to the screen
        duration = duration * 1000;
        var days = Math.floor(duration / (1000 * 60 * 60 * 24));
        var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((duration % (1000 * 60)) / 1000);
        document.getElementById(pid).value = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
    }
}

function parseInput(value) {
    const valueArray = value.split(" ");
    var days = (valueArray[0] == undefined) ? 0 : parseInt(valueArray[0]);
    var hours = (valueArray[1] == undefined) ? 0 : parseInt(valueArray[1]);
    var minutes = (valueArray[2] == undefined) ? 0 : parseInt(valueArray[2]);
    var seconds = (valueArray[3] == undefined) ? 0 : parseInt(valueArray[3]);

    if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return -1;
    }
    var totalInSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
    return totalInSeconds;
}

function driveTimer(pid, bid, resetbid) {
    var ogValue = document.getElementById(pid).value;
    var realValue = parseInput(ogValue);
    if (realValue == -1) {
        var audio = new Audio("media/audio/missedthatone.mp3");
        audio.volume = document.getElementById("volumeslider").value / 100;
        audios.push(audio);
        audio.play();
        setTimeout(function () { alert("Please enter 4 numbers") }, 100);
        return;
    }
    startTimer(realValue, pid, bid, resetbid);

}

function endTimer(pid, bid, resetbid) {
    updateList(bid);
    var resetButton = document.getElementById(resetbid);
    var clearId = resetButton.getAttribute("name");
    clearInterval(x[parseInt(clearId)]);
    document.getElementById(pid).value = "Timer done!";
    playAlarm();
}

var bidArray = [];

function updateList(bid) {
    var name = document.getElementById(bid).name;
    var list = document.getElementById("thelist");

    if (bidArray.includes(bid)) {
        var newVal = list.value.replace("- " + name + " -", "");
        list.value = newVal;
        var index = bidArray.indexOf(bid);
        bidArray.splice(index, 1);
    }
    else {
        bidArray.push(bid);
        var ogvalue = list.value;
        list.value = "- " + name + " -" + ogvalue;
    }
}
