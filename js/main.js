// put id on user details - user-details-btn

let totalCart = document.getElementById('total');

totalCart.addEventListener('load', displayTotal(), false);

async function displayTotal(){
    let totalItems = localStorage.getItem('total');
    totalCart.innerHTML = totalItems;
}

// let userDetailsBtn = document.getElementById('user-details-btn');
// userDetailsBtn.style.display = 'none';