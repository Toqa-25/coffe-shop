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

});






