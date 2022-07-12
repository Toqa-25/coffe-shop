import * as all from  "/../../home/js/script.js";
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ;
// var products = JSON.parse(localStorage.getItem("products"))
// var  favoritArray = users[indexOfUser].favoritArray,
userProducts ;

/************ run functions  *************/ 

if (logInUserName){
    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
    userProducts  = users[indexOfUser].userProducts 
    editeFavoriteCart ()

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
/************ contact form  ************/ 
let contactForm = document.querySelector(".contact-form"),
contactFormUserName = document.getElementById("user-name"),
contactFormEmail = document.getElementById("email"),
contactFormText = document.getElementById("text-message"),
contactFormPhone = document.getElementById("phone");

let newUsers = localStorage.getItem("newUsers") ? JSON.parse(localStorage.getItem("newUsers")) : [] ;
let newUser = {};
let objItemValue ="name"
// newUser[objItemValue] = "toqa"
// signUpFormUserName.addEventListener("blur" , (e) => checkExisitData(signUpFormUserName , "name"  , "userName" ))
// signUpFormEmail.addEventListener("blur" , (e) => checkExisitData(signUpFormEmail , "email" ,  "email" ))
// signUpFormPassword.addEventListener("blur" , (e) => {
//     if(signUpFormPassword.value.trim() != "") {
//         localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
//         newUser.password = signUpFormPassword.value.trim()
//     }else{
//         Swal.fire(`please enter your password`)
//     }
// })



contactForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
if ( contactFormEmail.value.trim() != "" && contactFormText.value.trim() != "" && contactFormPhone.value.trim() != ""){
    console.log (contactFormEmail.value.trim() )
    console.log (contactFormText.value.trim() )
    console.log (contactFormPhone.value.trim() )


}
});

/************************************ */
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




