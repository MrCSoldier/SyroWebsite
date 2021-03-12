var objAccouts = [
    {
        username: "testu",
        password: "testp"
    },

]
let existingUsernames = {  } 

function submitRegistration() {
    let rgstrUsername = document.getElementById("registerUsername").value
    let rgstrEmail = document.getElementById("registerEmail").value
    let rgstrPassword = document.getElementById("registerPassword").value
    let confirmPassword = document.getElementById("confirmPassword").value

    if (rgstrPassword = confirmPassword) {
        alert("Passwords are not matching")
    }
    if (rgstrEmail == null || rgstrEmail == undefined) {
        alert("Please enter a valid email")
    }
    if (rgstrUsername == null || rgstrUsername == undefined) {
        
    }
}

function pgBack() {
    window.history.back();
}

function submitCredentials() {
    //alert("Submit button press detected!")
    let  username = document.getElementById("username").value //document.getElementsById("username").value
    let password = document.getElementById("password").value

    for (i = 0; i < objAccouts.length; i++) {
        if(username == objAccouts[i].username && password == objAccouts[i].password) {
            alert("Success!")
            return;
        }
    }
    alert("There are no matching credentials. Please try again.")
}











function register() {

    let regUsr = document.getElementById("registerUsername").value
    let regEmail = document.getElementById("registerEmail").value
    let regPswrd = document.getElementById("registerPassword").value
    let confirmRegPswrd = document.getElementById("confirmRegisterPassword").value

    if (regPswrd != confirmRegPswrd) {
        alert("The Password does not match with the Password Verification Field/Text Box")
    }

    if (existingUsernames.Contains(regUsr)) {

    } 

}


















