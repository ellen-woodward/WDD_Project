const productsEl = document.querySelector(".products");

// RENDER PRODUCTS
function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
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
let cart = [];

//ADD TO CART
function addToCart(id){
    // check if product is already in cart
    if(cart.some((item) => item.id === id)){
        alert("Product already in cart");
    }
    else{
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            units: 1,
        });
    }

    updateCart();
}

// UPDATE CART
function updateCart(){
    // renderCartItems();
    // renderCartSubtotal();
}