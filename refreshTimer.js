//const refreshSite = require("./index.html")
var timer = document.getElementById("timer").value

if (timer > 0) {
    Sleep(timer * 1000)
    window.location.replace("./index.html")
}