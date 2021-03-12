var objAccouts = [
    {
        username: "Mr. C. Soldier",
        password: "Soldier"
    },
    {
        username: "testu",
        password: "testp"
    }
]


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
