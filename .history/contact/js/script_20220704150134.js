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
signUpFormUserName = document.getElementById("user-name"),
signUpFormEmail = document.getElementById("email"),
signUpFormPassword = document.getElementById("password"),
signUpFormConfirmPassword = document.getElementById("re-password");

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



// signUpForm.addEventListener("submit", function (event) {   
//  event.preventDefault() ;
// if (newUser["name"] && newUser['email'] && newUser.password){
//     newUser['id']= (newUsers.length + 1)
//     localStorage.setItem( "signUpFormUserName" , newUser["name"]);
//     localStorage.setItem( "signUpFormEmail" , newUser['email']);
//     if (signUpFormConfirmPassword.value.trim() != ""  && signUpFormConfirmPassword.value.trim() == newUser.password){
//        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
    //    newUser.name = localStorage.getItem( "signUpFormUserName")
    //    newUser.email = localStorage.getItem( "signUpFormEmail")
    //    newUser.password = localStorage.getItem( "signUpFormPassword")
//         newUsers = [...newUsers , newUser ]
//        localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
//        window.location = "../../sign-in/index.html"  
//           signUpFormUserName.value = ""
//           signUpFormEmail.value = ""
//           signUpFormPassword.value = ""
//           signUpFormConfirmPassword.value = ""
     
//     }
//     else{         
//         Swal.fire(`the confirm password are not the same`)
//      }
// }
// });

// function checkExisitData(input , objItemValue  , itemNameMsg ){
//     if (input.value.trim() != "" ){
//         if ( localStorage.getItem("newUsers")){
//             let inputValue = input.value.trim()
//            newUsers.map(newUserItem => {
//                if (newUserItem[objItemValue] !== input.value.trim()  ){
//                    newUser[objItemValue] = input.value.trim()
//                 }
//                 else{     
//                     input.value = ""    
//                Swal.fire(`this ${itemNameMsg} is Exisit please change it`)
//             }
//         })
//     }
//     else{
//         newUser[objItemValue] = input.value.trim()
//     }    
// }
// }






