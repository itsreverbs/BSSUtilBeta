
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
    console.log("Setting " + cname + " to " + cvalue);
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function toggleCookie(id, cname, cvalue1, cvalue2) {
    let element = document.getElementById(id);
    if (element.checked == true) {
        setCookie(cname, cvalue1);
    } else {
        setCookie(cname, cvalue2);
    }
}