const audios = [];

function clearAudios() {
    for (const audio of audios) {
        audios.pop();
    }
}
function mute() {
    var checkboxValue = document.getElementById("mutebutton").checked;
    for (const audio of audios) {
        audio.mute = checkboxValue;
        if (checkboxValue == true) {
            audio.pause();
            audio.load();
        }
    }

}
function playAlarm() {
    let audio;
    if (document.getElementById("mutebutton").checked == false) {
        if (document.getElementById("alarmchooser").checked == false) {
            audio = new Audio("media/audio/alarm.mp3");
            audios.push(audio);
        }
        else {
            audio = new Audio("media/audio/alarm-basic.mp3");
            audios.push(audio);
        }
        audio.volume = document.getElementById("volumeslider").value / 100;
        audio.play();
    }
}