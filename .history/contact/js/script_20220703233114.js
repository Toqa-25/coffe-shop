import * as all from  "/../../home/js/script.js";
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ;
let products = JSON.parse(localStorage.getItem("products"))
let  favoritArray = users[indexOfUser].favoritArray,
userProducts  = users[indexOfUser].userProducts ;

/************ run functions  *************/ 

if (logInUserName){
    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts

}
/************ creating function   ************/ 

//drowing favorite products
function drowProductsInCartIcon( array) {
    all.shoppingIconItems.innerHTML= "";
    if (logInUserName && userProducts){
    for (let i=0 ; i< array.length ; i++){
        //   delete array[i].like
        all.shoppingIconItems.innerHTML += `
                <li class="product-list-item" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                <h6 class="manue-product-name capitalize">${array[i].prodName}</h6>
                <h6 class=""> ${array[i].numberOfProds} ${array[i].numberOfProds > 1 ? "items" : "item" } </h6>
                 </li>
               `;
    }
}
else{
    all.shoppingIconItems.innerHTML= "No products in cart";

}
 
}
drowProductsInCartIcon( userProducts)
/************ draft  ************/ 
// drowProducts(favoritArray)
console.log ("no")
console.log (favoritArray)





