// export * as all ;
export {body , loadinSection , lightButtonCircle , lightButton , barIcon  , userIcon , userIconOptions , logOutBtn ,
    signInBtn , signUpBtn ,  navListItem , shoppingIcon , shoppingIconItems , searchIcon  , searchIconContent , navListIcons , navListIconsArray }

let body = document.querySelector("body"),
loadinSection = document.querySelector(".loading-section"),
lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".circle"),
barIcon = document.querySelector(".bar-icon-icon "),
userIcon = document.querySelector(".user-icon-icon "),
userIconOptions = document.querySelector(".user-options "),
signInBtn = document.querySelector(".sign-in"),
signUpBtn = document.querySelector(".sign-up"),
logOutBtn ,
navListItem = document.querySelector(".nav-item-list"),
shoppingIcon = document.querySelector(".shopping-icon-icon "),
shoppingIconItems = document.querySelector(".shopping-items"),
searchIcon = document.querySelector(".search-icon-icon "),
searchIconContent = document.querySelector(".search-content"),
navListIcons = document.querySelectorAll(".nav-item-icons"),
navListIconsArray = [...document.querySelectorAll(".nav-item-icon-item")];
/*********************************************** */
// run function 
window.addEventListener("load" , loadingPage)
lightButton.onclick = activeLightMood
barIcon.onclick = finalToggleActiveClass
userIcon.onclick = finalToggleActiveClass
shoppingIcon.onclick = finalToggleActiveClass
searchIcon.onclick = finalToggleActiveClass
if (signInBtn){
    // console.log ("yes sign in ")
    signInBtn.onclick = signIn
}
if (signUpBtn){
    // console.log ("yes sign up ")
    // signInBtn.onclick = signIn
    signUpBtn.onclick = signUp
}

/*********************************************** */
//   body function 

 export function activeLightMood(){
    lightButtonCircle.classList.toggle("light-option");
    body.classList.toggle("light");
    console.log("dark")
}


export function loadingPage(){
    loadinSection.style.display="none";
    body.style.cssText = "overflow-y: auto;"
}

export function finalToggleActiveClass(){
    toggleActiveClass(this)
    showOneiconItemChild()
}
export function showOneiconItemChild(){
    checkActiveElement(barIcon , navListItem , "show-nav-list"  )
    checkActiveElement(userIcon , userIconOptions , "show-user-icon-options"  )
    checkActiveElement(shoppingIcon , shoppingIconItems , "show-shopping-items"  )
    checkActiveElement(searchIcon , searchIconContent , "show-search-content"  )
}

export function checkActiveElement(IconItem , IconItemChild , IconItemChildClass ){
    // console.log (IconItem.parentElement)
    if (IconItem.parentElement.classList.contains("active")){
        IconItemChild.classList.add(IconItemChildClass)
    }
    else{
        IconItemChild.classList.remove(IconItemChildClass)
    }

}
export function toggleActiveClass(element){
    let otherIcons = navListIconsArray.filter(item => item !== element.parentElement)
    removeactivat(otherIcons)
    element.parentElement.classList.toggle("active")
  
}
export function removeactivat(array){
    array.map(otherIcon => {
    otherIcon.classList.remove("active")
})
 
    }

    // check login user
export  function checkLogInUser(){
            if (localStorage.getItem("logInUserName")){
              document.querySelector(".user-name").innerHTML = localStorage.getItem("logInUserName");
              userIconOptions.innerHTML = ""
              userIconOptions.innerHTML = ` <li class="log-out user-option-item capitalize">log out</li>`;
              logOutBtn = document.querySelector(".log-out")
              logOut()
            }
            else{
                document.querySelector(".user-name").innerHTML ="";
                userIconOptions.innerHTML = ""
                userIconOptions.innerHTML = `<li class="sign-in user-option-item capitalize">sign in</li>
                                            <li class="sign-up user-option-item capitalize">sign up</li>`;
            }
        }
        checkLogInUser()

export  function logOut(){ 
            logOutBtn.onclick = (e) => {
                localStorage.removeItem("logInUserName")
                localStorage.removeItem("indexOfUser")
                localStorage.removeItem("products")
                window.location.reload()       
}
   }

export  function signIn(){ 
                window.location = "../../sign-in/index.html"      
        }
export  function signUp(){ 
                window.location = "../../sign-up/index.html"      
   }

/****************************************************************************************/   
let users =  JSON.parse(localStorage.getItem("newUsers")) ,
     indexOfUser =  localStorage.getItem("indexOfUser") ;
