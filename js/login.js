let loginBtn = document.getElementById('login-btn').addEventListener('click', findUser, false);
let forgetPassword = document.getElementById('forget-password').addEventListener('click', passwordAlert, false);

function findUser(){
    let emailAddress = document.getElementById('email-address').value;
    let password = document.getElementById('password').value;
    users.forEach((user) => {
        if (user.emailaddress === emailAddress && user.password === password){
            loginUser('true', user.id);
            return;
        }
        else{
            loginUser('false', user.id);
        }
    });
}

function loginUser(state, id){
    if (state === 'true'){
        localStorage.setItem('loggedIn', id);
        window.location.href = "shop.html";
    }
    else if(state === 'false'){
        localStorage.setItem('loggedIn', false);
        alert('Incorrect login - try again');
    }
}

function passwordAlert(){
    alert('An email has been sent to you. In the mean time, try password ;)');
}