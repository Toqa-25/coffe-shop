import * as all from  "/../../home/js/script.js";

export {body , loadinSection , lightButtonCircle , lightButton , barIcon   , userIconOptions , logOutBtn ,
      navListItem , shoppingIcon , shoppingIconItems , searchIcon  , searchIconContent , navListIcons , navListIconsArray , numOfProducts  , contentNumOfContent}
console.log (all.lightButton)
// // run function 
// window.addEventListener("load" , all.loadingPage);
// all.lightButton.onclick = all.activeLightMood
// all.barIcon.onclick = all.finalToggleActiveClass
// all.userIcon.onclick = all.finalToggleActiveClass
// all.shoppingIcon.onclick = all.finalToggleActiveClass
// all.searchIcon.onclick = all.finalToggleActiveClass
// all.signUpBtn.onclick = all.signUp

/**************************************** */
let signInForm = document.querySelector(".sign-in-form"),
signInFormUserName = document.getElementById("user-name"),
signInFormEmail = document.getElementById("email"),
signInFormPassword = document.getElementById("password");

let users = localStorage.getItem("newUsers") ? JSON.parse(localStorage.getItem("newUsers")) : [] ;
let currentUsers , user , logInUserName , indexOfUser;



/******************** check userName Function ******************** */
function checkUserName(){
    if (signInFormEmail.value.trim() != "" ){
         user =  users.find(userItem => userItem.name == signInFormUserName.value.trim())  
         if (user != null)    {
             console.log (user)
         }
         else{
             Swal.fire(`we can't find this username please sign up first`)
         }
 }
 else{
  Swal.fire(`username input is empty`)
 } 
}

/******************** check checkEmail Function ******************** */
function checkEmail(){
    if (signInFormEmail.value.trim() != "" ){
         if (user.email == signInFormEmail.value.trim())  {
         }
         else{
             Swal.fire(`we can't find this email please sign up first`)
         }
 }
 else{
  Swal.fire(`Email input is empty`)
 } 
}

/******************** check checkPassword Function ******************** */
function checkPassword(){
    if (signInFormPassword.value.trim() != "" ){
         if (user.password == signInFormPassword.value.trim())  {
         }
         else{
             Swal.fire(`Incorrect password `)
         }
 }
 else{
  Swal.fire(`password input is empty`)
 } 
}

/******************** indexOfUser Function ******************** */
function setUserIndex (){
    logInUserName =  localStorage.getItem("logInUserName") 
    if (logInUserName){
        indexOfUser = users.indexOf(user)
localStorage.setItem("indexOfUser" , indexOfUser)
}
}

/******************** signIn Function ******************** */
signInForm.addEventListener("submit", function (event) {   
    event.preventDefault() ;
    if (users != []){
       checkUserName()
       checkEmail()
       checkPassword()
       localStorage.setItem("logInUserName" , user.name )
       setUserIndex ()
       all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
       setTimeout (() => { window.location ="../../index.html"} , 500) }  
       // console.log ("indexOfUser" , indexOfUser)
   })
   