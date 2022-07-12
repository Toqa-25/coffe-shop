import * as all from  "/../../home/js/script.js";

/**************************************** */
let hiddenText = document.querySelector(".about-text-hidden"),
aboutLearnMoreButton = document.querySelector(".about-learn-more"),
aboutSeeLessButton = document.querySelector(".about-see-less");

aboutLearnMoreButton.addEventListener("click" , function (){
    this.style.display = "none"
    hiddenText.style.display = "block";
    aboutSeeLessButton.style.display = "block";
})
aboutSeeLessButton.addEventListener("click" , function (){
    this.style.display = "none"
    hiddenText.style.display = "none";
    aboutLearnMoreButton.style.display = "block";
})
/**************************************** */
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ,
userProducts  = users[indexOfUser].userProducts;

// var favoriteCard ,  charvonArrow ;
if (logInUserName){
    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
    editeFavoriteCart ()

}
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

/**********************************************************/   
var  charvonArrow ;
function editeFavoriteCart (){
    all.favoriteCard .innerHTML = ""
//    favoriteCard.classList.add("favorite-cart");
   all.favoriteCard.innerHTML =  `  <div class="chervon"><i class="fa-solid fa-angles-left"></i></div>
   <a href="../favorite product/index.html" class="link-none"><i class="fa-solid fas fa-heart"></i></a>
   <a href="../user-products-in card/index.html" class="link-none"> <i class="fa-solid fa-cart-shopping"></i>
   </a>`
//    all.lightButton.before(favoriteCard)
    charvonArrow = document.querySelector(".chervon") 
   charvonArrow.onclick = function (){
       console.log ("no about")
       all.favoriteCard.classList.toggle("show-favorite-card")
   }
} 
