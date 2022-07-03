let products_container = document.querySelector(".products");
let no_products = document.querySelector(".no_products");

function drawProductsUIInCart(allProducts = []) {
  //   drawProductsUIInLocal(items);

  if (JSON.parse(localStorage.productInCart).length === 0) {
    no_products.innerHTML = `<h1>There Is No Products</h1>`;
    no_products.style.cssText =
      "text-align: center; color: #f00; background-color: #cbcbcb8e; width: fit-content; margin: auto; padding: .5rem 1rem; border-radius: 4px;";
  }

  let products = JSON.parse(localStorage.productInCart || allProducts);
  let productUI = products.map((item) => {
    return `
    <div class="product-item">
       <img
          src="${item.imageURL}"
          class="product_item_img"
          alt="product"
       />
    <div class="product_item_desc">
       <h2>${item.title} <span class="price">${item.price}EGP</span></h2>
       <p>Lorem ipsum dolor sit amet consectetur.</p>
  
       <div style="display: flex; justify-content: space-around; margin: 1rem 0;">
       <span style="color:#0e3356;">size: ${item.size}</span>
       <p style="color:#0e3356;">Quantity: ${item.qty}</p>
       </div>
       
    </div>
    <div class="product_item_action">
       <button class="remove_from_cart btn" onclick = 'removeFromCart(${item.id})'>
          Remove From Cart<i class="fas fa-times"></i>
       </button>
    </div>
    </div>`;
  });
  products_container.innerHTML = productUI.join("");
}

drawProductsUIInCart();

function removeFromCart(id) {
  if (localStorage.productInCart) {
    let items = JSON.parse(localStorage.productInCart);
    let filterItems = items.filter((item) => item.id !== id);

    localStorage.productInCart = JSON.stringify(filterItems);
    drawProductsUIInCart(filterItems);

    localStorage.numOfProducts = --localStorage.numOfProducts;
  }
}
