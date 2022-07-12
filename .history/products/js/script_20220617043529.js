// import * as all from  "/../../home/js/script.js";
import * as all from  "/../../home/js/script.js";



/**************************************** */
let manue = document.querySelector(".manue-content")
console.log(manue)

function drowProducts(numOfProducts){
    manue.innerHTML = "" ;
    
    // let numOfProducts = 9
    for (let i=1 ; i<= numOfProducts ; i++){
        manue.innerHTML += `
        <div class="manue-product">
        <img src="images/products/img-${i}.jpg" alt="" class="manue-product-img">
        <h3 class="manue-product-name capitalize">tasty and healthy</h3>
        <p class="manue-product-price">$15.95 <span class="before-price">17$</span></p>
        <button class="btn manue-product-btn">add to cart </button>
        </div>
        `
    }
    // manue.innerHTML += ``;
}
drowProducts(9)
/**************************************** */
// check exisit login username

functon 