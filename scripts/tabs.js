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
    setCookie("lastTab", tabName);
}

if (getCookie("rememberTab") == "true" && getCookie("lastTab") != "") {
    document.getElementsByName(getCookie("lastTab"))[0].click();
} else {
    document.getElementById("defaultTab").click();
}
