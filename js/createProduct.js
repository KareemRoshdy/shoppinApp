let product_name = document.getElementById("product_name");
let product_img = document.getElementById("product_img");
let size = document.querySelector("#size");
let img_container = document.querySelector(".img");
let product_form = document.getElementById("product_form");
let product_price = document.getElementById("product_price");

let productSizeVal;

size.addEventListener("change", getProductSize);
product_form.addEventListener("submit", createProduct);

// Functions
function getProductSize(e) {
  productSizeVal = e.target.value;
}

function createProduct(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.products);
  let nameVal = product_name.value;
  let price = product_price.value;

  let obj = {
    id: allProducts.length + 1,
    title: nameVal,
    qty: 1,
    size: productSizeVal,
    price: price,
  };

  let newProducts = [...allProducts, obj];
//   console.log(newProducts);
    localStorage.products = JSON.stringify(newProducts);
}
