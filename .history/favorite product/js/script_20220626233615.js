import * as all from  "/../../home/js/script.js";
import drowFunction  from "/../"

/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ,
userProducts , favoritArray ;
// products data
 favoritArray = users[indexOfUser].favoritArray

console.log (favoritArray)

/************ run functions  *************/ 
all.checkLogInUser()   //  check login user
runDrowProductsFuction()  // drow products

/************ creating functions  ************/ 
// drowing element function 
function drowProducts( array) {
    manue.innerHTML= "";
    for (let i=0 ; i< array.length ; i++){
        //   delete array[i].like
                manue.innerHTML += `
                <div class="manue-product" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                <h3 class="manue-product-name capitalize">${array[i].prodName}</h3>
                <p class="manue-product-price">${array[i].prodPrice} <span class="before-price">${array[i].beforeProdPrice}</span></p>
                <button class="btn manue-product-btn">add to cart </button>
                 <div class=" heart-icon ${ array[i].like ? "fav" : "heart-item"} ">
                <i class=" ${
                    array[i].like ? "fas" : "far"
                  }  fa-heart " ></i>
                </div>
                </div>`;
    }
let productAddToCartButtons = []
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")]
 let  productAddFavoriteButtons = []
 productAddFavoriteButtons = [...document.querySelectorAll(".heart-item ")];
 let  productDeleteFavoriteButtons = []
 productDeleteFavoriteButtons = [...document.querySelectorAll(".fav")];

 addProductToUserCart(productAddToCartButtons)
 saveFavorite(productAddFavoriteButtons)
 unSaveFavorite(productDeleteFavoriteButtons)
 
}

// running dorwProducts function 
 function runDrowProductsFuction(){
    if (logInUserName && indexOfUser){
        drowProducts(userProducts)
    }
    else{
        drowProducts(products)
    }
 }

// checking Exisit logIn User
function checkExisitUserName(){
    if (! logInUserName){ 
        // Swal.fire(`Please signUp or SignIn`)
        console.log ("no user")
    }
}
checkExisitUserName()
// adding products to user cart
function addProductToUserCart(productAddToCartButtons){
    productAddToCartButtons.map(productAddToCartButton => {
        productAddToCartButton.onclick = function (e){
            if (! logInUserName){ 
                Swal.fire(`Please signUp or SignIn`)
            }else{
                let currenElement = e.currentTarget,
                    parentOfCurrentElement = currenElement.parentElement,
                    productIndex = parentOfCurrentElement.dataset.index;             
                    // delete  users[indexOfUser].userProducts
                    users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
                    localStorage.setItem("newUsers" , JSON.stringify(users))
            }

        }
    })

}

// checking user products
function checkUsersExisitProducts ( index ){
    let userProducts = [...users[indexOfUser].userProducts] ,
    product = products[index] ;
    let exisiteProduct =    userProducts.find (userProduct  =>  userProduct == product )
        if (exisiteProduct){
        exisiteProduct.numberOfProds += 1
    }
    else{
        product.numberOfProds = 1
        users[indexOfUser].userProducts = [...userProducts , product ]
    }
}
// adding products for user 
function addNewProducToUserProducts(index){
    users[indexOfUser].userProducts = [products[index]]
    users[indexOfUser].userProducts[0].numberOfProds = 1
}

// /*******************/
function saveFavorite(productsArray) {
    productsArray.map(productsArrayItem => {
        productsArrayItem.onclick = function (e){
            if (! logInUserName){ 
                Swal.fire(`Please signUp or SignIn`)
            }
            else{
        let currentElement = e.currentTarget,
            parentOfCurrentElement = currentElement.parentElement,
            productIndex = parentOfCurrentElement.dataset.index;
          
            currentElement.classList.add("fav")
       
            userProducts[productIndex].like="like"
            localStorage.setItem("products", JSON.stringify(products));

            users[indexOfUser].favoritArray ? users[indexOfUser].favoritArray = [...users[indexOfUser].favoritArray , products[productIndex] ] : users[indexOfUser].favoritArray = [ products[productIndex] ]
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProducts)
            }   
    }
})
}
// /*******************/
function unSaveFavorite(productsArray) {
    productsArray.map(productsArrayItem => {
        productsArrayItem.onclick = function (e){
            if (! logInUserName){ 
                Swal.fire(`Please signUp or SignIn`)
            }
            else{
        let currentElement = e.currentTarget,
            parentOfCurrentElement = currentElement.parentElement,
            productIndex = parentOfCurrentElement.dataset.index;
            let userFavoritArray =  [...users[indexOfUser].favoritArray]
             let favoritArray = userFavoritArray.filter((e) => e.prodId != products[productIndex].prodId);
            // let favoriteItem = 
            console.log (products[productIndex])
            console.log (userFavoritArray)
            console.log (favoritArray)
            console.log ("unsave" , productIndex)
            // delete products[productIndex].like
            delete userProducts[productIndex].like
            // localStorage.setItem("products", JSON.stringify(products));

            users[indexOfUser].favoritArray = [...favoritArray ] 
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProducts)
            }    
    }
})
}
//    if (users[indexOfUser].favoritArray){
//    }
 
//  favoriteItem["like"] = true;
//  productGroup.map((item) => {
//    if (item.id === favoriteItem.id) {
//      item["like"] = true;
//    }
//  });
//  localStorage.setItem("products", JSON.stringify(productGroup));

// drowNeadedProducts(productGroup);
// }
// /**************************************** */
// function saveFavorite() {
//  productGroup = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")): products
    
//  drowNeadedProducts()
//  console.log("fav")

// }


// /*********************************************************** */
// function addFavoriteProductToUserCart(){
//     let  productAddFavoriteButtons = [...document.querySelectorAll(".fav")]
//     checkExisitUserName()
//     productAddFavoriteButtons.map(productAddFavoriteButton => {
//         productAddFavoriteButton.onclick = saveFavorite
        
        
//     })
    
// }

// addFavoriteProductToUserCart()
/*********************************************************** */


/****************** draft ********************** */
//  function drowProducts (){
//     // products = products
//     let numOfProducts = 9
//     manue.innerHTML = "" ; 
//     for (let i=0 ; i<= numOfProducts ; i++){
//         manue.innerHTML += `
//         <div class="manue-product" id ="${products[i].prodId}" data-index="${products[i].prodId-1}">
//         <img src="images/products/${products[i].prodImg}" alt="" class="manue-product-img">
//         <h3 class="manue-product-name capitalize">${products[i].prodName}</h3>
//         <p class="manue-product-price">${products[i].prodPrice} <span class="before-price">${products[i].beforeProdPrice}</span></p>
//         <button class="btn manue-product-btn">add to cart </button>
//          <div class=" heart-item">
//         <i class=" ${
//             products[i].like ? "fas" : "far"
//           }  fa-heart " ></i>
//         </div>
//         </div>
//         `
//     }
//     // manue.innerHTML += ``;
// }
// drowProducts ()


// localStorage.removeItem("products") 
// delete users[0].favoritArray
// localStorage.setItem("newUsers" , JSON.stringify(users))
// let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsData


// console.log (productAddToCartButtons)
// console.log (productAddFavoriteButtons)
// console.log (productDeleteFavoriteButtons)

// function checkExisitUserName(){
//     if (logInUserName){
//          users.map(( userItem , index) =>{
//         if ( userItem.name == logInUserName){
//             indexOfUser = index
//         }
//         })  
//     }        
//     else {
//         Swal.fire(`Please signUp or SignIn`)
//     }
// }