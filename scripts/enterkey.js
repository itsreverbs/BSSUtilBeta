var timerbuttons = document.getElementsByClassName("timerbuttons");
var timerinputs = document.getElementsByClassName("timerdisplays");

for (let i = 0; i < timerinputs.length; i++) {
    let input = timerinputs[i];
    let button = timerbuttons[i];

    //disable default functionality for enter key pressed down
    input.onkeydown = function(event) {
        return event.keyCode !=13;
    }
    //click start timer button when enter key is released
    input.onkeyup = function(event) {
        if (event.keyCode === 13) {
            button.click();
        }
    }
}
