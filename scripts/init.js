
function toggleLocalStorage(id, name, checkedValue, defaultValue) {
    let element = document.getElementById(id);
    if (element.checked) {
        localStorage.setItem(name, checkedValue)
    } else {
        localStorage.setItem(name, defaultValue);
    }
}
// initialize settings
var muteButton = document.getElementById("mutebutton");
var alarmChooser = document.getElementById("alarmchooser");
var volumeSlider = document.getElementById("volumeslider");
var percentLabel = document.getElementById("percent");
var rememberTabCheckbox = document.getElementById("remembertab");
var giftedCheckbox = document.getElementById("giftedbox");

if (localStorage.getItem("mute") == "true") {
    muteButton.click();
}
if (localStorage.getItem("alarmPreference") == "basic") {
    alarmChooser.click();
    console.log("sdf");
}
if (localStorage.getItem("volume") != null) {
    volumeSlider.value = localStorage.getItem("volume");
    percentLabel.innerText = localStorage.getItem("volume") + "%";
}
if (localStorage.getItem("giftedBox") == "true") {
    giftedCheckbox.click();
}
if (localStorage.getItem("rememberTab") == "true") {
    rememberTabCheckbox.click();
}
// initialize timers
const inputs = document.getElementsByClassName("timerdisplays");
const timerButtons = document.getElementsByClassName("timerbuttons");
for (let i = 0; i < inputs.length; i++) {

    let input = inputs[i];
    let button = timerButtons[i];
    if (localStorage.getItem(input.id + "Distance") != null) {

        let distance = localStorage.getItem(input.id + "Distance");
        var timeAtOpen = new Date().getTime();
        let lastKnownTime = localStorage.getItem("LastKnownTime");

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
    }
}
