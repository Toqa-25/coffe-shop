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
if (userProductsArray && userProductsArray.length >= 1 ){

    drowProducts(userProductsArray)  // drow products
}
//  delete users[indexOfUser].userProducts
// localStorage.setItem("newUsers" , JSON.stringify(users))
// let users =  JSON.parse(localStorage.getItem("newUsers")) ,
// logInUserName = localStorage.getItem("logInUserName"),
//     indexOfUser =  localStorage.getItem("indexOfUser") ,
//     userProducts  = users[indexOfUser].userProducts  ;
    // if (logInUserName){
        
    //     contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
    // }else{
        
    //     contentNumOfContent.innerHTML = numOfProducts
    // }
    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
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
                <p class="manue-product-price"> $ ${array[i].prodPrice} </p>
                <p class="">you add ${array[i].numberOfProds} ${array[i].numberOfProds > 1 ? "items" : "item" } of this product </p>
                <p class=""> total price  ${array[i].numberOfProds * array[i].prodPrice} </p>
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
 let minusroductCartButtons = []
 minusroductCartButtons = [...document.querySelectorAll(".minus")]
 let productRemoveCartButtons = []
 productRemoveCartButtons = [...document.querySelectorAll(".close")]
 let  productAddFavoriteButtons = []
 productAddFavoriteButtons = [...document.querySelectorAll(".heart-item ")];
 let  productDeleteFavoriteButtons = []
 productDeleteFavoriteButtons = [...document.querySelectorAll(".fav")];


 minusProductFromUserCart(minusroductCartButtons)
 removeAllProductFromUserCart(productRemoveCartButtons)
 saveFavorite(productAddFavoriteButtons)
 unSaveFavorite(productDeleteFavoriteButtons)
 
}
// minus products to user cart
function minusProductFromUserCart(minusroductCartButtons){
    minusroductCartButtons.map(minusroductCartButton => {
        minusroductCartButton.onclick = function (e){
                let currenElement = e.currentTarget,
                    parentOfCurrentElement = currenElement.parentElement,
                    productIndex = parentOfCurrentElement.dataset.index;             
                    // delete  users[indexOfUser].userProducts
                    checkUsersExisitProducts ( productIndex ) 
                    userProductsArray = users[indexOfUser].userProducts
                    drowProducts(userProductsArray)
                    if ( userProductsArray.length == []  ){
                        delete users[indexOfUser].userProducts
                    }
                    users[indexOfUser].numberOfProducts -=1
                    localStorage.setItem("newUsers" , JSON.stringify(users))
                    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
                
                    userProducts  = users[indexOfUser].userProducts
                    drowProductsInCartIcon( userProducts)
                    
        }
    })

}

// checking user products
 function checkUsersExisitProducts ( index ){
    let userProducts = [...users[indexOfUser].userProducts] ,
    product = products[index] ;
    let exisiteProduct =    userProducts.find (userProduct  =>  userProduct.prodId == product.prodId )
        if (exisiteProduct && exisiteProduct.numberOfProds > 1 ){
        exisiteProduct.numberOfProds -= 1
        localStorage.setItem("newUsers" , JSON.stringify(users))

        }
        else if ( exisiteProduct && exisiteProduct.numberOfProds == 1){
            userProducts = userProducts.filter (el => el.prodId != exisiteProduct.prodId)    
        // product.numberOfProds = 1
        users[indexOfUser].userProducts = [...userProducts  ]
        localStorage.setItem("newUsers" , JSON.stringify(users))

    }
console.log ("minus")
}
// Remove  product for user cart
function removeAllProductFromUserCart(productRemoveCartButtons){
    productRemoveCartButtons.map(productRemoveCartButton => {
        productRemoveCartButton.onclick = function (e){
                let currenElement = e.currentTarget,
                    parentOfCurrentElement = currenElement.parentElement,
                    productIndex = parentOfCurrentElement.dataset.index,
                    product = products[productIndex];             

                    userProductsArray = userProductsArray.filter (el => el.prodId != product.prodId)    
                    users[indexOfUser].userProducts = [...userProductsArray  ]
                    
                    drowProducts(userProductsArray)
                    if ( userProductsArray.length == []  ){
                        delete users[indexOfUser].userProducts
                    }
                    users[indexOfUser].numberOfProducts -= product.numberOfProds
                    // users[indexOfUser].numberOfProducts ++
                    localStorage.setItem("newUsers" , JSON.stringify(users))
                    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
                    userProducts  = users[indexOfUser].userProducts
                    drowProductsInCartIcon( userProducts)
        }
    })

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
            userProductsArray = users[indexOfUser].userProducts
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
            userProductsArray = users[indexOfUser].userProducts
            drowProducts(userProductsArray)
            }    
    
})
}

  //drowing favorite products
  function drowProductsInCartIcon( array) {
    shoppingIconItems.innerHTML= "";
    if (logInUserName && userProducts){
    for (let i=0 ; i< array.length ; i++){
        //   delete array[i].like
        shoppingIconItems.innerHTML += `
                <li class="product-list-item" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                <h6 class="manue-product-name capitalize">${array[i].prodName}</h6>
                <h6 class=""> ${array[i].numberOfProds} ${array[i].numberOfProds > 1 ? "items" : "item" } </h6>
                 </li>
               `;
    }
}
else{
    shoppingIconItems.innerHTML= "No products in cart";

}
 
}
drowProductsInCartIcon( userProducts)
/************ draft  ************/ 
// drowProducts(favoritArray)
// console.log ("no")
// console.log (favoritArray)





