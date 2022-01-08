
// initialize settings
var muteButton = document.getElementById("mutebutton");
var alarmChooser = document.getElementById("alarmchooser");
var volumeSlider = document.getElementById("volumeslider");
var percentLabel = document.getElementById("percent");
var rememberTabCheckbox = document.getElementById("remembertab");
if (getCookie("mute") == "true") {
    muteButton.click();
}
if (getCookie("alarmPreference") == "basic") {
    alarmChooser.click();
    console.log("sdf");
}
if (getCookie("volume") != "") {
    volumeSlider.value = getCookie("volume");
    percentLabel.innerText = getCookie("volume") + "%";
}
if (getCookie("rememberTab") == "true") {
    rememberTabCheckbox.click();
}

// initialize timers
const inputs = document.getElementsByClassName("timerdisplays");
const timerButtons = document.getElementsByClassName("timerbuttons");
for (let i = 0; i < inputs.length; i++) {

    let input = inputs[i];
    let button = timerButtons[i];
    if (getCookie(input.id + "Distance") != "") {

        let distance = getCookie(input.id + "Distance");
        var timeAtOpen = new Date().getTime();
        let lastKnownTime = getCookie("LastKnownTime");

        let timePassed = timeAtOpen - lastKnownTime;
        // 200 adds a little extra time to compensate for site loading upon exit
        distance -= timePassed - 200;

        if (distance < 0) {
            distance = 0;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        input.value = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        button.click();
        console.log("heya");
    }
}
