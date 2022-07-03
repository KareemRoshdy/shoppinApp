//  DEFINE ALL PRODUCTS
let products = JSON.parse(localStorage.getItem("products"));

let products_container = document.querySelector(".products");
// FUNCTION DRAW PRODUCTS
(function drawProductsUI() {
  for (let i = 0; i < products.length; i++) {
    products_container.innerHTML += `
      <div class="product-item">
      <img
        src="${products[i].imageURL}"
        class="product_item_img"
        alt="product"
      />
      <div class="product_item_desc">
        <h2><a onclick = 'saveItemData(${products[i].id})'>${products[i].title} </a><span class="price">${products[i].price}EGP</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <span>size: ${products[i].size}</span>
      </div>
      <div class="product_item_action">
        <button class="add_to_cart btn" onclick = 'addToCart(${products[i].id})'>
          Add To Cart<i class="fas fa-shopping-cart"></i>
        </button>
        <i  onclick = 'addToFavorite(${products[i].id})' class="fas fa-heart"></i>
      </div>
    </div>
    `;
  }
})();

// =========================================//

// Add to cart
let shopping_cart = document.querySelector(".shopping_cart");
let favorite_cart = document.querySelector(".favorite_cart");
let products_list = document.querySelector(".products_list");
let products_fav_list = document.querySelector(".products_fav_list .content");
let fav_list = document.querySelector(".products_fav_list");

let products_container_list = document.querySelector(".products_list .content");
shopping_cart.addEventListener("click", () => {
  fav_list.classList.remove("active");
  products_list.classList.toggle("active");
});
favorite_cart.addEventListener("click", () => {
  products_list.classList.remove("active");
  fav_list.classList.toggle("active");
});

// =========================================//

// FUNCTION ADD TO CART

let num_of_products = document.querySelector(".num_of_products");
if (localStorage.numOfProducts) {
  num_of_products.innerHTML = localStorage.numOfProducts;
} else {
  localStorage.numOfProducts = 0;
}

let addItem;
if (localStorage.productInCart) {
  addItem = JSON.parse(localStorage.productInCart);
} else {
  addItem = [];
}

function addToCart(id) {
  //  CHECK LOGIN USER
  if (localStorage.username) {
    num_of_products.style.display = "flex";

    // the item choose to adding into the cart
    let myItem = products.find((item) => item.id === id);

    let item = addItem.some((i) => i.id === myItem.id);

    if (item) {
      addItem = addItem.map((i) => {
        if (i.id === myItem.id) i.qty++;
        return i;
      });
    } else {
      num_of_products.innerHTML = ++localStorage.numOfProducts;
      localStorage.numOfProducts = localStorage.numOfProducts;
      addItem.push(myItem);
    }
    products_container_list.innerHTML = "";
    addItem.forEach((item) => {
      products_container_list.innerHTML += `
      <li class="product_item">
      <img src="${item.imageURL}" alt="" />
      <div class="product_info">
        <h3>${item.title}</h3>
        <p>${item.price} EGP</p>
        <p>Quantity: ${item.qty}</p>
      </div>
      <button class="remove">remove</button>
      </li>
      `;
    });

    // adding item to array and database
    localStorage.productInCart = JSON.stringify(addItem);

    // Draw ui in shopping cart
  } else {
    location = "login.html";
  }
}

// Add To Favorite function

let num_of_fav = document.querySelector(".num_of_fav");

if (localStorage.numOfFav) {
  num_of_fav.innerHTML = localStorage.numOfFav;
} else {
  localStorage.numOfFav = 0;
}

let addToFav;
if (localStorage.favoriteProducts) {
  addToFav = JSON.parse(localStorage.favoriteProducts);
} else {
  addToFav = [];
}
function addToFavorite(id) {
  //  CHECK LOGIN USER
  if (localStorage.username) {
    num_of_fav.style.display = "flex";
    // the item choose to adding into the cart
    let myItem = products.find((item) => item.id === id);

    let item = addToFav.some((i) => i.id === myItem.id);

    if (item) {
      addToFav = addToFav.map((i) => {
        if (i.id === myItem.id) return i;
      });
    } else {
      num_of_fav.innerHTML = ++localStorage.numOfFav;
      localStorage.numOfFav = localStorage.numOfFav;

      addToFav.push(myItem);
    }
    products_fav_list.innerHTML = "";
    addToFav.forEach((item) => {
      products_fav_list.innerHTML += `
      <li class="product_item">
      <img src="${item.imageURL}" alt="" />
      <div class="product_info">
        <h3>${item.title}</h3>
        <p>${item.price} EGP</p>
      </div>
      <button class="remove">remove</button>
      </li>
      `;
    });

    // adding item to array and database
    localStorage.favoriteProducts = JSON.stringify(addToFav);

    // Draw ui in shopping cart
  } else {
    location = "login.html";
  }
}

(function favIntoCart() {
  if (localStorage.favoriteProducts) {
    num_of_fav.style.display = "flex";
    num_of_fav.innerHTML = localStorage.numOfFav;
    let items = JSON.parse(localStorage.favoriteProducts);

    items.map((e) => {
      products_fav_list.innerHTML += `
      <li class="product_item">
      <img src="${e.imageURL}" alt="" />
      <div class="product_info">
        <h3>${e.title}</h3>
        <p>${e.price} EGP</p>
      </div>
      <button class="remove">remove</button>
      </li>
      `;
    });
  }
})();
// =========================================//

(function productsIntoCart() {
  if (localStorage.productInCart) {
    num_of_products.style.display = "flex";
    num_of_products.innerHTML = localStorage.numOfProducts;
    let items = JSON.parse(localStorage.productInCart);

    items.map((e) => {
      products_container_list.innerHTML += `
      <li class="product_item">
      <img src="${e.imageURL}" alt="" />
      <div class="product_info">
        <h3>${e.title}</h3>
        <p>${e.price} EGP</p>
        <p>Quantity ${e.qty}</p>
      </div>
      <button class="remove">remove</button>
      </li>
      `;
    });
  }
})();

function saveItemData(id) {
  localStorage.productID = id;
  window.location = "cartDetails.html";
}

// Search Function
let search_input = document.getElementById("search");

function search(title, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].title === title) {
      console.log(myArray[i]);
    }
  }
}

search_input.addEventListener("input", () => {
  let inputVal = search_input.value;
  let div = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].title.includes(inputVal)) {
      div += `
      <div class="product-item">
      <img
        src="${products[i].imageURL}"
        class="product_item_img"
        alt="product"
      />
      <div class="product_item_desc">
        <h2><a onclick = 'saveItemData(${products[i].id})'>${products[i].title} </a><span class="price">${products[i].price}EGP</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <span>size: ${products[i].size}</span>
      </div>
      <div class="product_item_action">
        <button class="add_to_cart btn" onclick = 'addToCart(${products[i].id})'>
          Add To Cart<i class="fas fa-shopping-cart"></i>
        </button>
        <i class="fas fa-heart"></i>
      </div>
    </div>
      `;
    }
  }
  products_container.innerHTML = div;
});
