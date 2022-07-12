import * as all from  "/../../home/js/script.js";

console.log (all.lightButton)
// run function 
// window.addEventListener("load" , all.loadingPage);
// all.lightButton.onclick = all.activeLightMood
// all.barIcon.onclick = all.finalToggleActiveClass
// all.userIcon.onclick = all.finalToggleActiveClass
// all.shoppingIcon.onclick = all.finalToggleActiveClass
// all.searchIcon.onclick = all.finalToggleActiveClass
// all.signInBtn.onclick = all.signIn
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
signUpFormUserName.addEventListener("blur" , (e) => checkExisitData(signUpFormUserName , "name"  , "userName" ))
signUpFormEmail.addEventListener("blur" , (e) => checkExisitData(signUpFormEmail , "email" ,  "emal" ))
signUpFormPassword.addEventListener("blur" , (e) => {
    if(signUpFormPassword.value.trim() != "") {
        localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
        newUser.password = signUpFormPassword.value.trim()
    }else{
        Swal.fire(`please enter your password`)
    }
})



signUpForm.addEventListener("submit", function (event) {   
 event.preventDefault() ;
if (newUser["name"] && newUser['email'] && newUser.password){
    newUser['id']= (newUsers.length + 1)
    localStorage.setItem( "signUpFormUserName" , newUser["name"]);
    localStorage.setItem( "signUpFormEmail" , newUser['email']);
    if (signUpFormConfirmPassword.value.trim() != ""  && signUpFormConfirmPassword.value.trim() == newUser.password){
       localStorage.setItem("signUpFormPassword" , signUpFormPassword.value.trim() );
       newUser.userName = localStorage.getItem( "signUpFormUserName")
       newUser.email = localStorage.getItem( "signUpFormUserName")
       newUser.password = localStorage.getItem( "signUpFormUserName")
        newUsers = [...newUsers , newUser ]
       localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
       signUpFormUserName.value = ""
       signUpFormEmail.value = ""
       signUpFormPassword.value = ""
       signUpFormConfirmPassword.value = ""
       window.location = "../../sign-in/index.html"  
     
    }
    else{         
        Swal.fire(`the confirm password are not the same`)
     }
}
});

function checkExisitData(input , objItemValue  , itemNameMsg ){
    if (input.value.trim() != "" ){
        if ( localStorage.getItem("newUsers")){
            let inputValue = input.value.trim()
           newUsers.map(newUserItem => {
               if (newUserItem[objItemValue] !== input.value.trim()  ){
                   newUser[objItemValue] = input.value.trim()
                }
                else{     
                    input.value = ""    
               Swal.fire(`this ${itemNameMsg} is Exisit please change it`)
            }
        })
    }
    else{
        newUser[objItemValue] = input.value.trim()
    }    
}
}