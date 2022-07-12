import * as all from  "/../../home/js/script.js";

console.log (all.lightButton)
// run function 
window.addEventListener("load" , all.loadingPage);
all.lightButton.onclick = all.activeLightMood
all.barIcon.onclick = all.finalToggleActiveClass
all.userIcon.onclick = all.finalToggleActiveClass
all.shoppingIcon.onclick = all.finalToggleActiveClass
all.searchIcon.onclick = all.finalToggleActiveClass
/**************************************** */
let signUpForm = document.querySelector(".sign-up-form"),
signUpFormUserName = document.getElementById("user-name"),
signUpFormEmail = document.getElementById("email"),
signUpFormPassword = document.getElementById("password"),
signUpFormConfirmPassword = document.getElementById("re-password");

let newUsers = JSON.parse(localStorage.getItem("newUsers")) ? JSON.parse(localStorage.getItem("newUsers")) : [] ;
let newUser = {};
// console.log(newUsers)

signUpForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
 console.log("form")

 if (signUpFormUserName.value != ""){
     localStorage.setItem("signUpFormUserName" , signUpFormUserName.value )
     newUser.name = signUpFormUserName.value
    }
    if (signUpFormEmail.value != ""){
        localStorage.setItem("signUpFormEmail" , signUpFormEmail.value )
        newUser.email = signUpFormEmail.value
    }
    if (signUpFormPassword.value != ""){
        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value )
 }
 if (signUpFormConfirmPassword.value != "" && signUpFormConfirmPassword.value == signUpFormPassword.value){
     localStorage.setItem("signUpFormConfirmPassword" , signUpFormConfirmPassword.value )
     newUser.password = signUpFormPassword.value
 }
//  newUsers.push("1")
JSON.parse(localStorage.setItem("newUsers")), 
 console.log(newUser)

 
});
