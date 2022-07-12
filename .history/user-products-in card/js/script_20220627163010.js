import * as all from  "/../../home/js/script.js";
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ;
let products = JSON.parse(localStorage.getItem("products"))
let  userProductsArray = users[indexOfUser].userProducts

/************ run functions  *************/ 
all.checkLogInUser()   //  check login user
drowProducts(userProductsArray)  // drow products

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
                <p class="manue-product-price">${array[i].prodPrice} <span class="before-price">${array[i].beforeProdPrice}</span></p>
                <button class="btn manue-product-btn">add to cart </button>
                <div class=" heart-icon ${ array[i].like ? "fav" : "heart-item"} ">
                <i class=" ${
                    array[i].like ? "fas" : "far"
                  }  fa-heart " ></i>
                </div>
                <div class="minus">
                <i class="fa-solid fa-minus"></i>
               </div>
                <div class="close">
                <i class="fa-solid fa-xmark"></i>
                                </div>
                </div>`;
    }
 let productRemoveCartButtons = []
 productRemoveCartButtons = [...document.querySelectorAll(".minus")]
 let  productAddFavoriteButtons = []
 productAddFavoriteButtons = [...document.querySelectorAll(".heart-item ")];
 let  productDeleteFavoriteButtons = []
 productDeleteFavoriteButtons = [...document.querySelectorAll(".fav")];

 removeProductFromUserCart(productRemoveCartButtons)
 saveFavorite(productAddFavoriteButtons)
 unSaveFavorite(productDeleteFavoriteButtons)
 
}
// adding products to user cart
function removeProductFromUserCart(productRemoveCartButtons){
    productRemoveCartButtons.map(productRemoveCartButton => {
        productRemoveCartButton.onclick = function (e){
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
    let exisiteProduct =    userProducts.find (userProduct  =>  userProduct == product )
        if (exisiteProduct && exisiteProduct.numberOfProds >1 ){
        exisiteProduct.numberOfProds -= 1
    }
    else{
        product.numberOfProds = 1
        users[indexOfUser].userProducts = [...userProducts , product ]
    }
}
adding products for user 
 function addNewProducToUserProducts(index){
    users[indexOfUser].userProducts = [products[index]]
    users[indexOfUser].userProducts[0].numberOfProds = 1
}

// /*******************/
 function saveFavorite(productsArray) {
    productsArray.map(productsArrayItem => {
        productsArrayItem.onclick = function (e){
        let currentElement = e.currentTarget,
            parentOfCurrentElement = currentElement.parentElement,
            productIndex = parentOfCurrentElement.dataset.index;
          
            currentElement.classList.add("fav")
       
            products[productIndex].like="like";
            localStorage.setItem("products", JSON.stringify(products));

            users[indexOfUser].favoritArray ? users[indexOfUser].favoritArray = [...users[indexOfUser].favoritArray , products[productIndex] ] : users[indexOfUser].favoritArray = [ products[productIndex] ]
            // delete users[indexOfUser].userProducts
            // localStorage.setItem("newUsers" , JSON.stringify(users))
            if (users[indexOfUser].userProducts){
                users[indexOfUser].userProducts.map(el => {
                    if (el.prodId == products[productIndex].prodId ){
                        el.like="like"
                    }
                })
            }
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProductsArray)
            }   
    
})
}
// /*******************/
 function unSaveFavorite(productsArray) {
    productsArray.map(productsArrayItem => {
        productsArrayItem.onclick = function (e){
           
        let currentElement = e.currentTarget,
            parentOfCurrentElement = currentElement.parentElement,
            productIndex = parentOfCurrentElement.dataset.index;
            let userFavoritArray =  [...users[indexOfUser].favoritArray]
             let favoritArray = userFavoritArray.filter((e) => e.prodId != products[productIndex].prodId);
            
            delete products[productIndex].like
            localStorage.setItem("products", JSON.stringify(products));

            users[indexOfUser].favoritArray = [...favoritArray ] 
            if (users[indexOfUser].userProducts){
                users[indexOfUser].userProducts.map(el => {
                    if (el.prodId == products[productIndex].prodId ){
                        delete el.like
                    }
                })
            }
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProductsArray)
            }    
    
})
}

/************ draft  ************/ 
// drowProducts(favoritArray)
// console.log ("no")
// console.log (favoritArray)





