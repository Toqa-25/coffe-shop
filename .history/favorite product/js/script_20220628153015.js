import * as all from  "/../../home/js/script.js";
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ;
let products = JSON.parse(localStorage.getItem("products"))
let  favoritArray = users[indexOfUser].favoritArray

/************ run functions  *************/ 
all.checkLogInUser()   //  check login user
drowProducts(favoritArray)  // drow products

/************ creating function   ************/ 
//drowing favorite products
function drowProducts( array) {
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
// adding products to user cart
function addProductToUserCart(productAddToCartButtons){
    productAddToCartButtons.map(productAddToCartButton => {
        productAddToCartButton.onclick = function (e){ 
                let currenElement = e.currentTarget,
                    parentOfCurrentElement = currenElement.parentElement,
                    productIndex = parentOfCurrentElement.dataset.index;             
                    // delete  users[indexOfUser].userProducts
                    users[indexOfUser].userProducts ? checkUsersExisitProducts ( productIndex ) : addNewProducToUserProducts(productIndex)
                    localStorage.setItem("newUsers" , JSON.stringify(users))
                    
            

        }
    })

}

// checking user products
 function checkUsersExisitProducts ( index ){
    let userProducts = [...users[indexOfUser].userProducts] ,
    product = products[index] ;
    let exisiteProduct =    userProducts.find (userProduct  =>  userProduct.prodId == product.prodId )
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
// unsave products
function unSaveFavorite(productsArray) {
    productsArray.map(productsArrayItem => {
        productsArrayItem.onclick = function (e){
       
        let currentElement = e.currentTarget,
            parentOfCurrentElement = currentElement.parentElement,
            productIndex = parentOfCurrentElement.dataset.index;
            
           favoritArray = favoritArray.filter((e) =>  e.prodId != products[productIndex].prodId);


            users[indexOfUser].favoritArray = [...favoritArray ] 
            if (users[indexOfUser].userProducts){
                users[indexOfUser].userProducts.map(el => {
                    if (el.prodId == products[productIndex].prodId ){
                      delete  el.like
                    }
                })
            }
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(favoritArray)
               
    }
})
}
/************ draft  ************/ 
// drowProducts(favoritArray)
console.log ("no")
console.log (favoritArray)





