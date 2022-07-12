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
let signInForm = document.querySelector(".sign-in-form"),
signInFormUserName = document.getElementById("user-name"),
signInFormEmail = document.getElementById("email"),
signInFormPassword = document.getElementById("password"),
signInFormConfirmPassword = document.getElementById("re-password");

let users = localStorage.getItem("newUsers") ? JSON.parse(localStorage.getItem("newUsers")) : [] ;
let currentUser = {};

signUpFormUserName.addEventListener("change" , (e) => checkExisitData(signUpFormUserName , "name"  , "userName" ))
signUpFormEmail.addEventListener("change" , (e) => checkExisitData(signUpFormEmail , "email" ,  "emal" ))
signUpFormPassword.addEventListener("change" , (e) => {
    if(signUpFormPassword.value.trim() != "") {
        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
        newUser.password = signUpFormPassword.value.trim()
    }else{
        Swal.fire(`please enter your password`)
    }
})



signInForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
if (newUser["name"] && newUser['email'] && newUser.password){
    newUser['id']= (newUsers.length + 1)
    localStorage.setItem( "signUpFormUserName" , newUser["name"]);
    localStorage.setItem( "signUpFormEmail" , newUser['email']);
    if (signUpFormConfirmPassword.value.trim() != ""  && signUpFormConfirmPassword.value.trim() == newUser.password){
       localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
        newUsers = [...newUsers , newUser ]
       localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
       signUpFormUserName.value = ""
       signUpFormEmail.value = ""
       signUpFormPassword.value = ""
       signUpFormConfirmPassword.value = ""
     
    }
    else{         
        Swal.fire(`the confirm password are not the same`)
     }
console.log (newUser)
}
});

function checkUserData(input , objItemValue  , itemNameMsg ){
     if (users != []){
         if (signInFormUserName.value.trim() != "" ){
                users.map(newUserItem => {
                    if (newUserItem["name"] == signInFormUserName.value.trim()  ){
                            if (newUserItem["email"] == signInFormEmail.value.trim()  ){
                                if (newUserItem["password"] == signInFormPassword.value.trim()  ){
                            
                                }
                            else{                              
                            Swal.fire(`this email not exisit`)
                            }
                                }
                            else{                              
                            Swal.fire(`this user name not exisit`)
                            }
                        }
                     else{                              
                    Swal.fire(`this user name not exisit`)
                 }
             })
         }
         else{
             newUser[objItemValue] = input.value.trim()
         }    
     }
     
}
function checkUserName()
// function checkUserData(input , objItemValue  , itemNameMsg ){
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