
var success = () => {
    document.getElementById('result').innerHTML = "You have just signed up to this site!";
}

var fail = () => {
    document.getElementById('result').innerHTML = "Sorry! Try Again. Password didn't match.";
}

function signIn () {
    const usrEmail = document.getElementById('reg-email').value;
    const usrPassword = document.getElementById('reg-password').value;
    const usrConfirmPassword = document.getElementById('confirm-password').value;

    if (usrPassword === usrConfirmPassword) {
        success();
    } else {
        fail();
    }
}


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    signUp();
});