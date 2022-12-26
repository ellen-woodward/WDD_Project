// find a way of deleting one item at a time
// fix total items being displayed

var cart = JSON.parse(localStorage.getItem('cart'));
const cartDiv = document.getElementById('cartDiv');
const deleteCart = document.getElementById('delete-cart').addEventListener('click', emptyCart, false);
let total = document.getElementById('total');

// RENDER CART ITEMS by iterating through product.js
function renderCartItems() {
    cartDiv.innerHTML = "";
    cart.forEach((item) => {
      cartDiv.innerHTML += `
      <div class="card rounded-3 mb-4">
      <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            <img
              src="${item.imgSrc}"
              class="img-fluid rounded-3" alt="Cotton T-shirt">
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p class="lead fw-normal mb-2">${item.name}</p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="btn btn-link px-2"
              onclick="changeNumberofUnits('minus', ${item.id})">
              <i class="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" value="${item.units}" type="number"
              class="form-control form-control-sm" />

            <button class="btn btn-link px-2"
              onclick="changeNumberofUnits('plus', ${item.id})">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 class="mb-0">&euro;${item.price * item.units}</h5>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
          `;
    });
  }
  
  renderCartItems();

  function changeNumberofUnits(action, id){
    cart = cart.map((item) => {
        let units = item.units;
        if(item.id === id){
            if(action === 'plus'){
                units++;
                changeTotalItems('plus');
            }
            else if(action === 'minus' && units > 1){
                units--;
                changeTotalItems('minus');
            }
            else{
                alert('Invalid Number of Item!');
            }
        }
        return{
            ...item,
            units,
        };
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  function updateCart(){
    renderCartItems();
  }

  function emptyCart(){
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    cartDiv.innerHTML = "Your cart is empty";
    changeTotalItems('empty');
  }

  function changeTotalItems(action){

    let totalItems = localStorage.getItem('total');
    
    if(action === 'plus'){
        totalItems++;
    }
    else if(action === 'minus'){
        totalItems--;
    }
    else if(action === 'empty'){
      totalItems = 0;
    }
    localStorage.setItem('total', totalItems);
    displayTotal(); // function from main.js
}
