import * as all from  "/../../home/js/script.js";
// export {manue , logInUserName , users , indexOfUser }
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ,
userProducts , productArray , numOfProducts = 0 ;

if ( users[indexOfUser].userProducts){
    userProducts.map(userProduct => {
        numOfProducts += userProduct.numberOfProds
    }) 
    
}
    users[indexOfUser].numberOfProducts = numOfProducts
    localStorage.setItem("newUsers" , JSON.stringify(users) )

// users =  JSON.parse(localStorage.getItem("newUsers")) 
let productsData = [
    {
        prodId:1,
        prodName: "tasty and healthy",
        prodPrice : 15.965,
        beforeProdPrice : 17,
        prodImg :"img-1.jpg" ,
        prodDesc : "1 tasty and healthy  $15.965 $17 "       

    },
    {
        prodId:2,
        prodName: "tasty and healthy",
        prodPrice : 14.965,
        beforeProdPrice : 17,
        prodImg :"img-2.jpg"  ,
        prodDesc : "2 tasty and healthy"      


    },
    {
        prodId:3,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-3.jpg"   ,
        prodDesc : "3 tasty and healthy"        


    }
    ,
    {
        prodId:4,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-4.jpg"   ,
        prodDesc : "4 tasty and healthy"        


    }
    ,
    {
        prodId:5,
        prodName: "tasty and healthy",
        prodPrice : 10,
        beforeProdPrice : 15,
        prodImg :"img-5.jpg"   ,
        prodDesc : "5 tasty and healthy"        


    }
    ,
    {
        prodId:6,
        prodName: "tasty and healthy",
        prodPrice : 9,
        beforeProdPrice : 11,
        prodImg :"img-6.jpg"   ,
        prodDesc : "6 tasty and healthy"        


    }
    ,
    {
        prodId:7,
        prodName: "tasty and healthy",
        prodPrice : 5.99,
        beforeProdPrice : 15,
        prodImg :"img-7.jpg"   ,
        prodDesc : "7 tasty and healthy"        


    }
    ,
    {
        prodId:8,
        prodName: "tasty and healthy",
        prodPrice : 6.5,
        beforeProdPrice : 10,
        prodImg :"img-8.jpg"   ,
        prodDesc : "8 tasty and healthy"        


    }
    ,
    {
        prodId:9,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-9.jpg"   ,
        prodDesc : "9 tasty and healthy"        


    }
    ,
    {
        prodId:10,
        prodName: "tasty and healthy",
        prodPrice : 10.5,
        beforeProdPrice : 13,
        prodImg :"img-10.jpg"   ,
        prodDesc : "10 tasty and healthy"        


    }
    ,
    {
        prodId:11,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-11.jpg"   ,
        prodDesc : "11 tasty and healthy"        


    }
    ,
    {
        prodId:12,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-12.jpg"   ,
        prodDesc : "12 tasty and healthy"        


    }
    ,
    {
        prodId:4,
        prodName: "tasty and healthy",
        prodPrice : 10.965,
        beforeProdPrice : 17,
        prodImg :"img-4.jpg"   ,
        prodDesc : "4 tasty and healthy"        


    }
]
let products = productsData

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
                <p class="manue-product-price">$${array[i].prodPrice} <span class="before-price">$${array[i].beforeProdPrice}</span></p>
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
        userProducts =   [...productsData.map ((product) => {
            if (users[indexOfUser].favoritArray ){
                let favoritArray = [...users[indexOfUser].favoritArray]
                favoritArray.map(favoritArrayItem => {
                    if (product.prodId == favoritArrayItem.prodId){
                        product = favoritArrayItem             
                    }
                })
            }
                    return product
        })]
        drowProducts(userProducts)
        localStorage.setItem("products" , JSON.stringify(userProducts))
        productArray = JSON.parse(localStorage.getItem("products"))
    }
    else{
        drowProducts(products)
        localStorage.setItem("products" , JSON.stringify(productsData))
        productArray = JSON.parse(localStorage.getItem("products"))
    }
 }

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
                    users[indexOfUser].numberOfProds ++
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
       
            userProducts[productIndex].like="like";
            localStorage.setItem("products", JSON.stringify(userProducts));

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
            
            delete userProducts[productIndex].like
            localStorage.setItem("products", JSON.stringify(userProducts));

            users[indexOfUser].favoritArray = [...favoritArray ] 
            if (users[indexOfUser].userProducts){
                users[indexOfUser].userProducts.map(el => {
                    if (el.prodId == products[productIndex].prodId ){
                        delete el.like
                    }
                })
            }
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProducts)
            }    
    }
})
}

// search function
let searchInput = document.querySelector("#search");
// console.log (productArray)
searchInput.addEventListener("keyup", function (e) {
    productArray = JSON.parse(localStorage.getItem("products"))
    console.log ("value => " , e.target.value.trim())
    let searchedItem = productArray.filter((el) => el.prodDesc.includes(e.target.value));
      console.log ("searchArray => " , searchedItem)
      drowProducts(searchedItem)

});


/*********************************************************** */


// checking Exisit logIn User
//  delete users[indexOfUser].userProducts
// localStorage.setItem("newUsers" , JSON.stringify(users))

/****************** draft ********************** */
