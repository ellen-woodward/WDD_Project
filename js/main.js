// put id on user details - user-details-btn

let totalCart = document.getElementById('total');
totalCart.addEventListener('load', displayTotal(), false);

async function displayTotal(){
    let totalItems = localStorage.getItem('total');
    totalCart.innerHTML = totalItems;
}

// let userDetailsBtn = document.getElementById('user-details-btn');
// userDetailsBtn.style.display = 'none'; 

let loginNav = document.getElementById('login');
loginNav.addEventListener('click', Logout, false);

// localStorage.setItem('loggedIn', false);
let isloggedIn = localStorage.getItem('loggedIn');
if (isloggedIn !== 'false'){
    loginNav.innerHTML = "";
    loginNav.innerHTML = "Logout";
}
else{
    loginNav.innerHTML = "";
    loginNav.innerHTML = "Login";
}

function Logout(){
    if (isloggedIn !== 'false'){ // currently logged in
        loginNav.innerHTML = "";
        loginNav.innerHTML = "Login";
        localStorage.setItem('loggedIn', false);
        window.location.href = "index.html";
    }
    else{                       // currently logged out
        window.location.href = "login.html";
    }
}
