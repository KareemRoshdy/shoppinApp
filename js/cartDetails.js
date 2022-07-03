let item_details = document.querySelector(".item_details");
let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productID");
let productDetails = products.find((item) => item.id == productId);

item_details.innerHTML = `
<div class="productImg">
      <img
        src="${productDetails.imageURL}"
        alt="productImg"
        class="itemImg"
      />
    </div>
    <div class="details">
      <h2>${productDetails.title} <span>${productDetails.price}EGP</span></h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
        doloribus sit sed cumque possimus, veniam similique in dicta
        inventore ipsa.
      </p>
      <button class="btn back" onclick = 'backHome();'>Back To Home Page</button>
    </div>
`;

function backHome() {
  location = "index.html";
}
