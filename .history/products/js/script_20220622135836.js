import * as all from  "/../../home/js/script.js";

let  manue = document.querySelector(".manue-content");

// jQuery.ready():
/************ check login user *************/ 
all.checkLogInUser()

/************ drow products in page ************/ 
let products = [
    {
        prodId:1,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-1.jpg"        

    },
    {
        prodId:2,
        prodName: "tasty and healthy",
        prodPrice : "$14.965",
        beforeProdPrice : "$17",
        prodImg :"img-2.jpg"        


    },
    {
        prodId:3,
        prodName: "tasty and healthy",
        prodPrice : "$10.965",
        beforeProdPrice : "$17",
        prodImg :"img-3.jpg"        


    }
]
/**************************************** */
function drowProducts( array) {
    manue.innerHTML= "";
      for (let i=0 ; i< array.length ; i++){
                manue.innerHTML += `
                <div class="manue-product" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                <h3 class="manue-product-name capitalize">${array[i].prodName}</h3>
                <p class="manue-product-price">${array[i].prodPrice} <span class="before-price">${array[i].beforeProdPrice}</span></p>
                <button class="btn manue-product-btn">add to cart </button>
                 <div class=" heart-item fav">
                <i class=" ${
                    array[i].like ? "fas" : "far"
                  }  fa-heart " ></i>
                </div>
                </div>`;
    }
    // productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")]
let productAddToCartButtons = []
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")]
 
 productAddFavoriteButtons = [...document.querySelectorAll(".fav")];
    addProductToUserCart()

  }
  drowProducts(products);
// /**************************************** */
let logInUserName = localStorage.getItem("logInUserName") ,
 users =  JSON.parse(localStorage.getItem("newUsers")) ,
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")],
 productAddFavoriteButtons = [...document.querySelectorAll(".fav")],
 indexOfUser , userProducts ;
// /**************************************** */

function checkExisitUserName(){
    if (logInUserName){
         users.map(( userItem , index) =>{
        if ( userItem.name == logInUserName){
            indexOfUser = index
        }
        })  
    }        
    else {
        Swal.fire(`Please signUp or SignIn`)
    }
}

function addProductToUserCart(){
    // checkExisitUserName()
    productAddToCartButtons.map(productAddToCartButton => {
        productAddToCartButton.onclick = function (e){
            console.log (e.currentTarget.parentElement)
            let currenElement = e.currentTarget,
                parentOfCurrentElement = currenElement.parentElement,
                productIndex = parentOfCurrentElement.dataset.index;
              
                // users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
                
                // localStorage.setItem("newUsers" , JSON.stringify(users))
                console.log ("add")
                products.pop()
                 localStorage.setItem("products", JSON.stringify(products));
                drowProducts(products)
                // delete  users[indexOfUser].userProducts
                // productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")]
                
        }
    })

}

addProductToUserCart()
    
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
function addNewProducToUserProducts(index){
    users[indexOfUser].userProducts = [products[index]]
    users[indexOfUser].userProducts[0].numberOfProds = 1
}

// /*******************/
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

// function addProductToUserCart(){
//     checkExisitUserName()
//     productAddToCartButtons.map(productAddToCartButton => {
//         productAddToCartButton.onclick = function (e){
//             console.log (e.currentTarget.parentElement)
//             let currenElement = e.currentTarget,
//                 parentOfCurrentElement = currenElement.parentElement,
//                 productIndex = parentOfCurrentElement.dataset.index;
              
//                 // delete  users[indexOfUser].userProducts
//                 users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
        
//                 localStorage.setItem("newUsers" , JSON.stringify(users))
                
//         }
//     })

// }

// addProductToUserCart()
// function checkUsersExisitProducts ( index ){
//     let userProducts = [...users[indexOfUser].userProducts] ,
//     product = products[index] ;
//     let exisiteProduct =    userProducts.find (userProduct  =>  userProduct == product )
//         if (exisiteProduct){
//         exisiteProduct.numberOfProds += 1
//     }
//     else{
//         product.numberOfProds = 1
//         users[indexOfUser].userProducts = [...userProducts , product ]
//     }
// }
// function addNewProducToUserProducts(index){
//     users[indexOfUser].userProducts = [products[index]]
//     users[indexOfUser].userProducts[0].numberOfProds = 1
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



