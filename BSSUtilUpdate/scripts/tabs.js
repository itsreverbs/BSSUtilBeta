//drives functionality of the tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    localStorage.setItem("lastTab", tabName);
}
if (localStorage.getItem("rememberTab") == "true" && localStorage.getItem("lastTab") != null) {
    document.getElementsByName(localStorage.getItem("lastTab"))[0].click();
} else {
    document.getElementById("defaultTab").click();
}
