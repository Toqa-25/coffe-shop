// export * as all ;
export {body , loadinSection , lightButtonCircle , lightButton , barIcon  , userIcon , userIconOptions , logOutBtn ,
    signInBtn , signUpBtn ,  navListItem , shoppingIcon , shoppingIconItems , searchIcon  , searchIconContent , navListIcons , navListIconsArray , numOfProducts  , contentNumOfContent}

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
numOfProducts = 0 ,
contentNumOfContent = document.querySelector(".number-of-products"),
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
sign ()
let users =  JSON.parse(localStorage.getItem("newUsers")) ,
logInUserName = localStorage.getItem("logInUserName"),
    indexOfUser =  localStorage.getItem("indexOfUser") ,
    userProducts  = users[indexOfUser].userProducts  ;
    if (logInUserName){
        contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
    
    }else{

        contentNumOfContent.innerHTML = numOfProducts
    }
/*********************************************** */

    //drowing favorite products
function drowProductsInCartIcon( array) {
    manue.innerHTML= "";
    for (let i=0 ; i< array.length ; i++){
        //   delete array[i].like
                manue.innerHTML += `
                <div class="manue-product" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                <h3 class="manue-product-name capitalize">${array[i].prodName}</h3>
                <p class="manue-product-price">$ ${array[i].prodPrice} <span class="before-price"> $${array[i].beforeProdPrice}</span></p>
                <button class="btn manue-product-btn">add to cart </button>
                 <div class=" heart-icon  fav ">
                <i class=" fas fa-heart " ></i>
                </div>
                </div>`;
    }
let productAddToCartButtons = []
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")]
 let  productDeleteFavoriteButtons = []
 productDeleteFavoriteButtons = [...document.querySelectorAll(".fav")];

 addProductToUserCart(productAddToCartButtons)
 unSaveFavorite(productDeleteFavoriteButtons)
 
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

export function sign (){
    if (signInBtn){
        signInBtn.onclick = signIn
    }
    if (signUpBtn){
        signUpBtn.onclick = signUp
    }
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



    // userProducts.map(userProduct => {
    //     numOfProducts += userProduct.numberOfProds
    // }) 
    // users[indexOfUser].numberOfProducts = numOfProducts
    // localStorge.setItem("numbeOfProducts" , numOfProducts)   
    // localStorage.setItem("newUsers" , JSON.stringify(users) )
