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
let objItemValue ="name"
newUser[objItemValue] = "toqa"
signUpFormUserName.addEventListener("change" , (e) => checkExisitData(signUpFormUserName , "name"  , "userName" ))
signUpFormEmail.addEventListener("change" , (e) => checkExisitData(signUpFormEmail , "email" ,  "emal" ))
signUpFormPassword.addEventListener("change" , (e) => {
    if(signUpFormPassword.value != "") {
        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value );
        newUser.password = signUpFormPassword.value
    }else{
        Swal.fire(`please enter your password`)
    }
})



signUpForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
if (newUser["name"] && newUser['email'] && newUser.password){
    localStorage.setItem( "signUpFormUserName" , newUser["name"]);
    localStorage.setItem( "signUpFormEmail" , newUser['email']);
    if (signUpFormConfirmPassword.value != ""  && signUpFormConfirmPassword.value == newUser.password){
       localStorage.setItem("signUpFormPassword" , signUpFormPassword.value );

        newUsers = [...newUsers , newUser ]
       localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
       signUpFormUserName.value = ""
       signUpFormEmail.value = ""
       signUpFormPassword.value = ""
       signUpFormConfirmPassword.value = ""
     

    }
    else{

        Swal.fire(`there are difference between `)
    }
}
});

function checkExisitData(input , objItemValue  , itemNameMsg ){
    if (input.value != ""){
        let inputValue = input.value
       newUsers.map(newUserItem => {
           if (newUserItem[objItemValue] !== input.value  ){
               newUser[objItemValue] = input.value
            }
            else{         
           Swal.fire(`this ${itemNameMsg} is Exisit please change it`)
            }
        })
    }
    console.log (newUser)

}