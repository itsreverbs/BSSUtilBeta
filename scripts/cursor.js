const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.onmouseover = function() {
        this.style.cursor="url('media/cursors/cursor.png'),auto";
    }
    button.onmousedown = function() {
        this.style.cursor="url('media/cursors/cursoronclick.png'),auto";
    }
    button.onmouseup = function() {
        this.style.cursor="url('media/cursors/cursor.png'),auto";
    }
}