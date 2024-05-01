

const product = [
   {
      id: 0,
      image: "images/Shoes.jpg",
      title: "Sport Shoes",
      price: 10000,
   },
   {
      id: 1,
      image: "images/tShirt.jpg",
      title: "Black T-Shirt",
      price: 500,
   },
   {
      id: 2,
      image: "images/ps5.jpg",
      title: "Play Station 5",
      price: 70000,
   },
   {
      id: 3,
      image: "images/mac.jpg",
      title: "Mac Book",
      price: 170000,
   },
   {
      id: 4,
      image: "images/pants.jpg",
      title: "Blue Pants",
      price: 1200,
   }
];



const categories = [...new Set(product.map((item) => { return item }))]
let i = 0


document.getElementById("root").innerHTML = categories.map((item) => {
   var { image, title, price } = item;
   return (
      `
      <div class="box">
         <div class="img-box">
            <img class="images"  src=${image}></img>
         </div>
      <div class="bottom">
      <p>${title}</p>
      <h2>Rs.${price}</h2>
      `+ "<button onclick='addToCart(" + (i++) + ")'>Add to Cart</button>" +
      `</div>
      </div>`
   )
}).join("");


var cart = [];


function addToCart(index) {
   const selectedItem = product[index];
   cart.push({ ...selectedItem });
   displayCart();
}

function delElement(index) {
   cart.splice(index, 1);
   displayCart();
}

function displayCart(a) {
   let j = 0;
   total = 0;
   document.getElementById("count").innerHTML = cart.length;
   if (cart.length == 0) {
      document.getElementById("total").innerHTML = "Rs." + 0 + ".00";
      document.getElementById("cartItem").innerHTML = "Your cart is empty";
   }
   else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
         var { image, title, price } = items;
         total += price;
         document.getElementById("total").innerHTML = "Rs." + total + ".00";

         return (
            `
            <div class='cart-item'>
            <div class='row-img'>
            <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:13px;'>${title}</p>
            <h2 style='font-size:15px; color: black;'>Rs.${price}.00</h2> 
            `+
            "<div onclick='delElement(" + (j++) + ")' class='delete'> X </div> </div>"
         );
      }).join("");

   }
}