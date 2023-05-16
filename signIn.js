
const email = "minkaungst@gmail.com";
const password = "mkst#007";

var attempts = 0;

var success = () => {
    document.getElementById('result').innerHTML = "Login Success!";
}

var fail = () => {

    attempts++;

    if (attempts >= 3) {
        document.getElementById('result').innerHTML = "Login Fail! Try again later";
        document.getElementById('email').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('submit').disabled = true;
    }
  
    else {
        document.getElementById('result').innerHTML = "Invalid username or password. You have " + (3 - attempts) + " attempts left.";
    }
}

function login() {

    const entEmail = document.getElementById('email').value;
    const entPassword = document.getElementById('password').value;

    if (entEmail === email && entPassword === password) 
    {
        success();
    } 
    else {
        fail();
    }
}
