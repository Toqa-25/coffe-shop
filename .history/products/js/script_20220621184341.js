// import * as all from  "/../../home/js/script.js";
import * as all from  "/../../home/js/script.js";

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
// localStorage.setItem("products", JSON.stringify(products));


let productGroup = products
let manue = document.querySelector(".manue-content")

let drowNeadedProducts;
(drowNeadedProducts = function () {
    productGroup = localStorage.getItem("products") ?[... JSON.parse(localStorage.getItem("products"))]: products
     if (productGroup) {
    let drowingProducts = productGroup.map((arrayItem)  => {
        return `
        <div class="manue-product" id ="${arrayItem.prodId}" data-index="${arrayItem.prodId-1}">
        <img src="images/products/${arrayItem.prodImg}" alt="" class="manue-product-img">
        <h3 class="manue-product-name capitalize">${arrayItem.prodName}</h3>
        <p class="manue-product-price">${arrayItem.prodPrice}
         <span class="before-price">${arrayItem.beforeProdPrice}</span>
        </p>
        <button class="btn manue-product-btn">add to cart </button>
        <button class="btn fav"  > fav </button>
        </div>`
        })
        manue.innerHTML = drowingProducts.join("")
    }
    console.log("drowing")
})(JSON.parse(localStorage.getItem("products")) || productGroup);
/**************************************** */

// drow products function ;
let productsArray = []
function numberOfProduct(num){
    for (let i=0 ; i< num ; i++){
        productsArray.push(products[i])
        console.log(productsArray)
    }
}

/**************************************** */
let logInUserName = localStorage.getItem("logInUserName") ,
 users =  JSON.parse(localStorage.getItem("newUsers")) ,
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")],
 productAddFavoriteButtons = [...document.querySelectorAll(".fav")],
 indexOfUser , userProducts ;

/*******************/
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
    checkExisitUserName()
    productAddToCartButtons.map(productAddToCartButton => {
        productAddToCartButton.onclick = function (e){
            console.log (e.currentTarget.parentElement)
            let currenElement = e.currentTarget,
                parentOfCurrentElement = currenElement.parentElement,
                productIndex = parentOfCurrentElement.dataset.index;
              
                // delete  users[indexOfUser].userProducts
                users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
        
                localStorage.setItem("newUsers" , JSON.stringify(users))
                
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
/**************************************** */
function saveFavorite() {
 
//  let productGroup = JSON.parse(localStorage.getItem("products"));
 //  if(localStorage.getItem("favoriteProduct"))
//  let favoriteItem = productGroup.find((e) => e.prodId == id);
//  let unique = favoriteArray.find((el) => el.id === favoriteItem.id);
//  unique
//    ? console.log("true")
//    : (favoriteArray = [...favoriteArray, favoriteItem]);
 // favoriteArray.map((e) => (e["like"] = true));
//  localStorage.setItem("favoriteProduct", JSON.stringify(favoriteArray));
//  favoriteItem["like"] = true;
//  productGroup.map((item) => {
//    if (item.prodId === favoriteItem.prodId) {
//      item["like"] = true;
//    }
//  });
 localStorage.setItem("products", JSON.stringify(productGroup));
 console.log(JSON.parse(localStorage.getItem("products")));

 console.log("fav")

}


/*********************************************************** */
function addFavoriteProductToUserCart(){
    checkExisitUserName()
    productAddFavoriteButtons.map(productAddFavoriteButton => {
        productAddFavoriteButton.onclick = function (e){
            console.log (e.currentTarget.parentElement)
            let currenElement = e.currentTarget,
                parentOfCurrentElement = currenElement.parentElement,
                productIndex = parentOfCurrentElement.dataset.index;
                productGroup = localStorage.getItem("products") ? [...JSON.parse(localStorage.getItem("products"))]: products
                console.log (productGroup[productIndex].prodId)
                saveFavorite(productGroup[productIndex].prodId)
                
                // delete  users[indexOfUser].userProducts
                // users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
        
                // localStorage.setItem("newUsers" , JSON.stringify(users))
                
                // drowNeadedProducts(productGroup)
        }
    })
    
}

addFavoriteProductToUserCart()
/*********************************************************** */
// function addFavoritProduct(){
//     checkExisitUserName()
//     productAddFavoriteButtons.map(productAddFavoriteButton => {
//         productAddFavoriteButton.onclick = testOk
//         // function (e){
//             // let currentProducts = JSON.parse(localStorage.getItem("products"))
//             // let currenElement = e.currentTarget,
//                 // parentOfCurrentElement = currenElement.parentElement,
//                 // productIndex = parentOfCurrentElement.dataset.index;
//                 // currenElement.classList.add("favorite")
//                 // console.log(currentProducts[productIndex].prodId)
//                 // saveFavorite(currentProducts[productIndex].prodId)
//                 // currenElement.classList.toggle("favorite")
//                 // onclick=''
//                 // currentProducts[productIndex].like = "like"

//                 // checkFavoriteClass (currenElement , productIndex )
//                 // if (currenElement.classList.contains("favorite")){
//                 //       currentProducts[productIndex].like = "like"
//                 // }
//                 // else{
//                 //     delete   currentProducts[productIndex].like 
                 
//                 // }
//                 // localStorage.setItem("products", JSON.stringify(currentProducts));
//                 // manue.innerHTML = ""

//                 // drowNeadedProducts(JSON.parse(localStorage.getItem("products")))
//                 // drowNeadedProducts(currentProducts)
               
                
//         // }
//     })

// // drowProducts()
// }

// addFavoritProduct()
// function  checkFavoriteClass (ele , index ){
//     if (ele.classList.contains("favorite")){
//                       currentProducts[index].like = "like"
//                 }
//                 else{
//                     delete   currentProducts[index].like 
                 
//                 }
// }


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



