// import * as all from  "/../../home/js/script.js";

let body = document.querySelector("body"),
loadinSection = document.querySelector(".loading-section"),
lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".circle"),
barIcon = document.querySelector(".bar-icon-icon "),
navListItem = document.querySelector(".nav-item-list"),
navListIcons = document.querySelectorAll(".nav-item-icons"),
navListIconsArray = [...document.querySelectorAll(".nav-item-icon-item")];
/**************************************** */
window.addEventListener("load" , loadingPage)
lightButton.onclick = activeLightMood
barIcon.onclick = finalToggleActiveClass

 function loadingPage(){
    loadinSection.style.display="none";
    body.style.cssText = "overflow-y: auto;"
}
function activeLightMood(){
    lightButtonCircle.classList.toggle("light-option");
    body.classList.toggle("light");
    // console.log("dark")
}
function finalToggleActiveClass(){
    barIcon.parentElement.classList.toggle("active")
    checkActiveElement(barIcon , navListItem , "show-nav-list"  )
    console.log ("no")
}

function checkActiveElement(IconItem , IconItemChild , IconItemChildClass ){
    // console.log (IconItem.parentElement)
    if (IconItem.parentElement.classList.contains("active")){
        IconItemChild.classList.add(IconItemChildClass)
    }
    else{
        IconItemChild.classList.remove(IconItemChildClass)
    }

}
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
signUpFormEmail.addEventListener("blur" , (e) => checkExisitData(signUpFormEmail , "email" ,  "email" ))
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
    //    newUser.name = localStorage.getItem( "signUpFormUserName")
    //    newUser.email = localStorage.getItem( "signUpFormEmail")
    //    newUser.password = localStorage.getItem( "signUpFormPassword")
        newUsers = [...newUsers , newUser ]
       localStorage.setItem("newUsers" , JSON.stringify(newUsers) );
       window.location = "../../sign-in/index.html"  
          signUpFormUserName.value = ""
          signUpFormEmail.value = ""
          signUpFormPassword.value = ""
          signUpFormConfirmPassword.value = ""
     
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