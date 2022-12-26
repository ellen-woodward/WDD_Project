let totalCart = document.getElementById('total');

totalCart.addEventListener('load', displayTotal(), false);

async function displayTotal(){
    let totalItems = localStorage.getItem('total');
    totalCart.innerHTML = totalItems;
}