// let disabletimer = true

function loginSignup() {
    window.location.href = "./otherPages/html/loginSignup.html"
}

function submit(textField) {
    textField = document.getElementById("textBox").value
    // let inputcode =  textField.split(' ');
    alert("Submit button press detected!")
    textField = document.getElementById("textBox").value
    if (textField == "TerminHack") {
        window.replace("TerminHack.html")
    }
    // if (inputcode[0] == "timer") {
    //     timerElement = document.getElementById("timerElmnt").content = inputcode[1]
    // }
}










// ==============================================================================
// ============================== DEVELOPMENT AREA ==============================
// ==============================================================================


    
    
    
    // while (disabletimer) {
    //     window.setTimeout(async function () {
    //         window.location.reload();
    //     }, 3000); 
    // }
    // while (!disabletimer) {
    //     window.setTimeout(async function () {
    //         window.location.reload();
    //     }, 3600000);
    // }

