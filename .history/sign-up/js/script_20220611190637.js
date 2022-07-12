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

let newUsers = localStorage.getItem("newUsers") ? JSON.parse(localStorage.getItem("newUsers")) : [] ;
let newUser = {};
signUpFormUserName.addEventListener("change" , (e) => checkExisitData(signUpFormUserName , "name" , "signUpFormUserName" , "userName" ))
// if (signUpFormEmail.value != ""){
//     localStorage.setItem("signUpFormEmail" , signUpFormEmail.value )
//     newUser.email = signUpFormEmail.value
// }
signUpFormEmail.addEventListener("change" , (e) => checkExisitData(signUpFormEmail , "email" , "signUpFormEmail" , "emal" ))

signUpFormEmail.addEventListener("change" , (e) => {
    localStorage.setItem("signUpFormPassword" , signUpFormPassword.value )
})
signUpFormConfirmPassword.addEventListener("change" , (e) => {
 if (signUpFormConfirmPassword.value != "" && signUpFormConfirmPassword.value == signUpFormPassword.value){
    localStorage.setItem("signUpFormPassword" , signUpFormPassword.value )
}else{
    Swal.fire(`There is difference between passwords`)
}
)
function checkExisitData(input , objItemValue , localStorgeItemName , itemNameMsg ){
    if (input.value != ""){
       newUsers.map(newUserItem => {
           if (newUserItem[objItemValue] != input.value.trim()  ){
               localStorage.setItem(localStorgeItemName , input.value.trim() )
               newUserItem[objItemValue] = input.value.trim()
           }
           else{         
           Swal.fire(`this ${itemNameMsg} is Exisit please change it`)
               console.log(`this ${itemNameMsg} is Exisit`)
            }
        })
    }
    console.log(`this ${itemNameMsg} is Exisit`)

}

signUpForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
 newUsers = JSON.parse(localStorage.getItem("newUsers")) 

if (signUpFormPassword.value != ""){
        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value )
 }
 if (signUpFormConfirmPassword.value != "" && signUpFormConfirmPassword.value == signUpFormPassword.value){
     localStorage.setItem("signUpFormConfirmPassword" , signUpFormConfirmPassword.value )
     newUser.password = signUpFormPassword.value
 }

 newUsers = [...newUsers , newUser ]
localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
signUpFormUserName.value = ""
signUpFormEmail.value = ""
signUpFormPassword.value = ""
signUpFormConfirmPassword.value = ""


 
});
