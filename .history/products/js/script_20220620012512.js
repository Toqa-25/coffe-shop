// import * as all from  "/../../home/js/script.js";
import * as all from  "/../../home/js/script.js";

all.checkLogInUser()

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


    },
    {
        prodId:4,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-4.jpg"        


    },
    {
        prodId:5,
        prodName: "tasty and healthy",
        prodPrice : "$15",
        beforeProdPrice : "$17",
        prodImg :"img-5.jpg"        


    },
    {
        prodId:6,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-6.jpg"        


    },
    {
        prodId:7,
        prodName: "tasty and healthy",
        prodPrice : "$12.965",
        beforeProdPrice : "$15",
        prodImg :"img-7.jpg"        


    },
    {
        prodId:8,
        prodName: "tasty and healthy",
        prodPrice : "$12",
        beforeProdPrice : "$15",
        prodImg :"img-8.jpg"        


    },
    {
        prodId:9,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-9.jpg"        


    },
    {
        prodId:10,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-10.jpg"        


    },
    {
        prodId:11,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-11.jpg"        


    },
    {
        prodId:12,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-12.jpg"        


    },
    {
        prodId:13,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-13.jpg"        


    },
    {
        prodId:14,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-14.jpg"        


    },
    {
        prodId:15,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-15.jpg"        


    },
    {
        prodId:16,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-16.jpg"        


    },
    {
        prodId:17,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-17.jpg"        


    },
    {
        prodId:18,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-18.jpg"        


    },
    {
        prodId:19,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-19.jpg"        


    },
    {
        prodId:20,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-20.jpg"        


    },
    {
        prodId:21,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-21.jpg"        


    },
    {
        prodId:22,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-22.jpg"        


    },
    {
        prodId:23,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-23.jpg"        


    },
    {
        prodId:24,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-24.jpg"        


    },
    {
        prodId:25,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17",
        prodImg :"img-25.jpg"        


    }
]
localStorage.setItem("products", JSON.stringify(products))
/**************************************** */
let manue = document.querySelector(".manue-content")
function testOk(e){
    console.log ("test" )
}

// drow products function ;
let productsArray = []
function numberOfProduct(num){
    for (let i=0 ; i< num ; i++){
        productsArray.push(products[i])
        console.log(productsArray)
    }
}

function drowNeadedProducts(array){
    // numberOfProduct(9)
    console.log(productsArray)
    manue.innerHTML = ""

    let drowingProducts = array.map(arrayItem => {
return `
<div class="manue-product" id ="${arrayItem.prodId}" data-index="${arrayItem.prodId-1}">
<img src="images/products/${arrayItem.prodImg}" alt="" class="manue-product-img">
<h3 class="manue-product-name capitalize">${arrayItem.prodName}</h3>
<p class="manue-product-price">${arrayItem.prodPrice}
 <span class="before-price">${arrayItem.beforeProdPrice}</span>
</p>
<button class="btn manue-product-btn">add to cart </button>
<div class=" heart-item" onclick=`test()`>
<i class=" ${arrayItem.like ? "fas" : "far"} fa-heart" ></i>
</div>
</div>
`
})
manue.innerHTML = drowingProducts.join("")
}
drowNeadedProducts(products)
// <button class="heart-item"  onclick="testOk(e)">
// </button>
// <i class="${arrayItem.like ? "fas" : "far"} fa-heart" onclick="test(e)"  ></i> 
// <i class=" ${arrayItem.like ? "fas" : "far"} fa-heart" ></i> 
/**************************************** */
// check exisit login username
let logInUserName = localStorage.getItem("logInUserName") ,
 users =  JSON.parse(localStorage.getItem("newUsers")) ,
 productAddToCartButtons = [...document.querySelectorAll(".manue-product-btn")],
 productAddFavoriteButtons = [...document.querySelectorAll(".heart-item")],
 indexOfUser ,userProducts ;

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
    // users[indexOfUser].product.numberOfProds = 1
    // console.log("yes")
    // console.log("no")
    // console.log ("userProducts => " , userProducts)
    // console.log ("exisiteProduct => " , exisiteProduct)
    // console.log ("Product => " , product)
}
function addNewProducToUserProducts(index){
    users[indexOfUser].userProducts = [products[index]]
    users[indexOfUser].userProducts[0].numberOfProds = 1
}

/*********************************************************** */
console.log (productAddFavoriteButtons)
function addFavoritProduct(){
    checkExisitUserName()
    // console.log(productsArray)

    productAddFavoriteButtons.map(productAddFavoriteButton => {
        let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")): products ;
        productAddFavoriteButton.onclick = function (e){
            let currenElement = e.currentTarget,
                parentOfCurrentElement = currenElement.parentElement,
                productIndex = parentOfCurrentElement.dataset.index;

                currenElement.classList.add("favorite")
                products[productIndex].like = "like"

                // if (currenElement.classList.contains("favorite")){
                //       products[productIndex].like = "like"
                // }
                // else{
                //     delete   products[productIndex].like 
                 
                // }
                localStorage.setItem("products", JSON.stringify(products));

                // drowNeadedProducts(products)
                console.log (productsArray)
                console.log (products[productIndex])
                // console.log (products[productIndex])
           
                
        }
    })

// drowProducts()
}

// addFavoritProduct()
    


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



