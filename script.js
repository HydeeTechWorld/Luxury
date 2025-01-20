const product = [
{
//sneakers//
id:0,
image:"https://i.ibb.co/dPWrX3M/images-9.jpg",
title:"sport sneaker",
price:40,
}, 
{
id:1,
image:"https://i.ibb.co/7RTKC5c/download.webp",
title:"Blade sneaker",
price:50,

}, 
{
id:2,
image:"https://i.ibb.co/wcp4FjY/shopping-3.webp",
title:"Chunky shoe",
price:100,
}, 

{
id:3,
image:"https://i.ibb.co/LhY8wJ9/shopping-6.webp",
title:"Sole sneaker",
price:60,
},
//shoes//
{
id:4,
image:"https://i.ibb.co/4W8JpLn/shopping-2.webp",
title:"Pointed shoe",
price:80,
}, 
{
id:5,
image:"https://i.ibb.co/VgCGj8J/shopping-5.webp",
title:"Leather shoe",
price:50,
}, 
{
id:6,
image:"https://i.ibb.co/k1pwkCw/shopping-7.webp",
title:"Leather shoe",
price:80,
},
{
id:6,
image:"https://i.ibb.co/GxWyGDw/shopping-8.webp",
title:"derby shoe",
price:100,
}
]
document.getElementById("card").innerHTML=product.map(item=>{
  let i=0;
const {image,title, price} = item
return `
<div class="cartSection">
<div class="cartBox">
<img src=${image} class="image" alt="">
</div>
<div class="bottom">
<h5 class="title">${title}</h5>
<p class="price">$${price}.00</p>
<button id="button" onclick="addtocart()">Add to cart</button>
</div>
</div>
<br>
`
}).join("")

let cart=[]
function addtocart() {
if(cart.length==0){
document.getElementById("card2").innerHTML="hi"
}else{
document.getElementById("count").innerHTML=1
}
}