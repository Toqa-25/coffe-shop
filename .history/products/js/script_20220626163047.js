import * as all from  "/../../home/js/script.js";

/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ,
userProducts ;
// products data
let productsData = [
    {
        prodId:1,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-1.jpg" ,
        prodDesc : "1 tasty and healthy  $15.965 $17 "       

    },
    {
        prodId:2,
        prodName: "tasty and healthy",
        prodPrice : "$14.965",
        beforeProdPrice : "$17",
        prodImg :"img-2.jpg"  ,
        prodDesc : "2 tasty and healthy"      


    },
    {
        prodId:3,
        prodName: "tasty and healthy",
        prodPrice : "$10.965",
        beforeProdPrice : "$17",
        prodImg :"img-3.jpg"   ,
        prodDesc : "3 tasty and healthy"        


    }
    ,
    {
        prodId:4,
        prodName: "tasty and healthy",
        prodPrice : "$10.965",
        beforeProdPrice : "$17",
        prodImg :"img-3.jpg"   ,
        prodDesc : "4 tasty and healthy".join()        


    }
]
let products = productsData
// user products data 

console.log (logInUserName)

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
        userProducts =   [...productsData.map ((product) => {
            if (users[indexOfUser].favoritArray){
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
    }
    else{
        drowProducts(products)
        localStorage.setItem("products" , JSON.stringify(products))
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
            localStorage.setItem("newUsers" , JSON.stringify(users))
            drowProducts(userProducts)
            }    
    }
})
}

// search function
let searchInput = document.querySelector("#search"),
productArray = JSON.parse(localStorage.getItem("products"));
searchInput.addEventListener("keyup", function (e) {
    let searchedItem = productArray.filter(
      (el) => el.prodDesc.toLowerCase().includes(e.target.value));
      console.log ("searchArray => " , searchedItem)
      console.log ("value => " , e.target.value.trim())
      drowProducts(searchedItem)
//   searchByTitle(e.target.value, JSON.parse(localStorage.getItem("products")));
  // searchByDesc(e.target.value, JSON.parse(localStorage.getItem("products")));

//   if (e.target.value.trim() === "") {
//     drowElements(JSON.parse(localStorage.getItem("products")));
//   }
});

function searchByTitle(productNum, productArray) {
  let searchedItem = productArray.filter(
    (el) => el.allData.toLowerCase().indexOf(productNum.toLowerCase()) !== -1
  );

//   drowElements(searchedItem);
}
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


// checking Exisit logIn User
function checkExisitUserName(){
    if (! logInUserName){ 
        // Swal.fire(`Please signUp or SignIn`)
        console.log ("no user")
    }
}
checkExisitUserName()

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