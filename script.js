const products = [
{
id:0,
image:"https://i.ibb.co/dPWrX3M/images-9.jpg",
title:"Sport sneaker",
price:"$40.00",
}, 
{
id:1,
image:"https://i.ibb.co/7RTKC5c/download.webp",
title:"Blade sneaker",
price:"$50.00",

}, 
{
  id:2,
image:"https://i.ibb.co/wcp4FjY/shopping-3.webp",
title:"Chunky shoe",
price:"$70.00",
}, 

{
 id:3,
image:"https://i.ibb.co/LhY8wJ9/shopping-6.webp",
title:"Sole sneaker",
price:"$60.00",
},
//shoes//
{
id:4, 
image:"https://i.ibb.co/4W8JpLn/shopping-2.webp",
title:"Pointed shoe",
price:"$80.00",
}, 
{
id:5,
image:"https://i.ibb.co/VgCGj8J/shopping-5.webp",
title:"Leather shoe",
price:"$90.00",
}, 
{
id:6,
image:"https://i.ibb.co/k1pwkCw/shopping-7.webp",
title:"Leather shoe",
price:"$80.00", 
},
{
id:7,
image:"https://i.ibb.co/GxWyGDw/shopping-8.webp",
title:"derby shoe",
price:"$40.00", 
}
];
document.getElementById("card").innerHTML=products.map(item=>{
const { image, title, price} = item;
return `
<div class="cartSection">
<div class="cartBox">
<img src=${image} class="image">
</div>
<div class="bottom">
<h5 class="title">${title} </h5>
<p class="price">${price} </p>
<button id="button" onclick="addtocart()">Add to cart</button>
</div>
</div>
<br>
`
}).join("")

let quantity=document.getElementById("quantity");
let carticon=document.getElementById("carticon")
let purchase = document.querySelector(".purchase");
let cartHeading=document.getElementById("cartHeading")
let total=document.querySelector(".total")
carticon.addEventListener("click", ()=>{
purchase.style.display="block"
})
let closeBtn= document.querySelector(".closeBtn")
closeBtn.addEventListener("click", ()=>{
purchase.style.display="none"
})
function addtocart(){
let cart=""
let count=7;
alert("all cart added above")
total.style.display="block"
purchase.style.display="block";
cartHeading.style.display="none"
document.getElementById("cartUpdate").innerHTML=products.forEach(product=>{
const {image, title, price} =product
cart+= `<div id="cartUpdate">
<img src=${image} class="image2"></img>
<p>${title}</p>
<h4>${price}</h4>
</div>
</div>

`
})
document.getElementById("cartUpdate").innerHTML=cart
document.getElementById("quantity").innerHTML=products.forEach(counts=>{
count=`<p>${counts.id}</p>`
})
document.getElementById("quantity").innerHTML= count;
}
