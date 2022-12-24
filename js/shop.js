let cart;
let total = document.getElementById('total');
let totalItems = 0;

const productsDiv = document.querySelector(".products");
// const cartBtn = document.getElementById("cart").addEventListener('click', openCart, false);
// const closeBtn = document.getElementById("closeBtn").addEventListener('click', closeCart, false);
// const cartSidebar = document.getElementById("cartSidebar");

// RENDER PRODUCTS
function renderProdcuts() {
    products.forEach((product) => {
      productsDiv.innerHTML += `
              <div class="col mb-5">
              <div class="card h-100">
                  <img class="card-img-top" src="${product.imgSrc}" alt="${product.name}" />
                  <div class="card-body p-4">
                      <div class="text-center">
                          <h5 class="fw-bolder">${product.name}</h5>
                          &euro;${product.price}
                      </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="addToCart(${product.id})" href="#">Add to cart</a></div>
                  </div>
              </div>
          </div>
          `;
    });
  }
  
  renderProdcuts();

// Cart Array
if (localStorage.getItem('cart') == null){
    cart = [];
    total.innerHTML = 0;
}
else{
    cart = JSON.parse(localStorage.getItem('cart'));
    total.innerHTML = cart.length;

}

//ADD TO CART
function addToCart(id){
    // check if product is already in cart
    if(cart.some((item) => item.id === id)){
        changeNumberofUnits('plus', id);
    }
    else{
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            units: 1,
        });
    }
    totalItems++;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// UPDATE CART
function updateCart(){
    total.innerHTML = totalItems;
    // renderCartItems();
    // renderCartSubtotal();
}

function changeNumberofUnits(action, id){
    cart = cart.map((item) => {
        let units = item.units;
        if(item.id === id){
            if(action === 'plus'){
                units++;
                totalItems++; // not work?
            }
            else if(action === 'minus'){
                units--;
                totalItems--;
            }
        }
        return{
            ...item,
            units,
        };
    });
    updateCart();
}