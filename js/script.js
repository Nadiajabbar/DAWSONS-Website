const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    function changeSlide() {
        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");
    }

    setInterval(changeSlide, 4000);
}

function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}
function updateMiniCart(){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

document.getElementById("cart-count").innerHTML=cart.length;

let items=document.getElementById("mini-items");

items.innerHTML="";

let total=0;

cart.forEach(item=>{

items.innerHTML+=`

<p>

${item.name}

<span style="float:right">

Rs.${item.price*item.quantity}

</span>

</p>

`;

total+=item.price*item.quantity;

});

document.getElementById("mini-total").innerHTML=

"<strong>Total : Rs."+total+"</strong>";

}

updateMiniCart();
function searchProduct() {

    let search = document.getElementById("search").value.toLowerCase();

    if(search.includes("almond")){
        window.location.href="products.html#almond";
    }

    else if(search.includes("cashew")){
        window.location.href="products.html#cashew";
    }

    else if(search.includes("pista") || search.includes("pistachio")){
        window.location.href="products.html#pista";
    }

    else if(search.includes("walnut")){
        window.location.href="products.html#walnut";
    }

    else if(search.includes("dates")){
        window.location.href="products.html#dates";
    }

    else if(search.includes("raisins")){
        window.location.href="products.html#raisins";
    }

    else{

        alert("Product not found!");

    }

}