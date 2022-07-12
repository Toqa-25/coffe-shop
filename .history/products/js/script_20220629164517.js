import * as all from  "/../../home/js/script.js";
// export {manue , logInUserName , users , indexOfUser }
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ,
userProducts , userOwnProducts =   users[indexOfUser].userProducts  , productArray , numOfProducts = 0 ;
// delete users[indexOfUser].numberOfProds
if ( userOwnProducts){
//   userProducts =   users[indexOfUser].userProducts  
userOwnProducts.map(userProduct => {
        numOfProducts += userProduct.numberOfProds
    }) 
    // console.log ()
}

    users[indexOfUser].numberOfProducts = numOfProducts
    localStorage.setItem("newUsers" , JSON.stringify(users) )
    all.contentNumOfContent.innerHTML = numOfProducts 

// users =  JSON.parse(localStorage.getItem("newUsers")) 
if (logInUserName){
    all.contentNumOfContent.innerHTML = numOfProducts

}
console.log (users[indexOfUser].numberOfProducts)
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
        prodPrice : 9.65,
        beforeProdPrice : 13,
        prodImg :"img-12.jpg"   ,
        prodDesc : "12 tasty and healthy"        


    }
    ,
    {
        prodId:13,
        prodName: "tasty and healthy",
        prodPrice : 18,
        beforeProdPrice : 22,
        prodImg :"img-13.jpg"   ,
        prodDesc : "13 tasty and healthy"        


    }
    ,
    {
        prodId:14,
        prodName: "tasty and healthy",
        prodPrice : 18,
        beforeProdPrice : 22,
        prodImg :"img-14.jpg"   ,
        prodDesc : "14 tasty and healthy"        


    }
    ,
    {
        prodId:15,
        prodName: "tasty and healthy",
        prodPrice : 15,
        beforeProdPrice : 19,
        prodImg :"img-15.jpg"   ,
        prodDesc : "15 tasty and healthy"        


    }
    ,
    {
        prodId:16,
        prodName: "tasty and healthy",
        prodPrice : 8,
        beforeProdPrice : 12,
        prodImg :"img-16.jpg"   ,
        prodDesc : "16 tasty and healthy"        


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
                <h4 class="manue-product-name capitalize">${array[i].prodName}</h4>
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
                    users[indexOfUser].numberOfProducts ++
                    localStorage.setItem("newUsers" , JSON.stringify(users))
                    all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
            }
            userOwnProducts  = users[indexOfUser].userProducts
            drowProductsInCartIcon( userOwnProducts)

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
    //drowing favorite products
    function drowProductsInCartIcon( array) {
        all.shoppingIconItems.innerHTML= "";
        if (logInUserName && userProducts){
        for (let i=0 ; i< array.length ; i++){
            //   delete array[i].like
            all.shoppingIconItems.innerHTML += `
                    <li class="product-list-item" id ="${array[i].prodId}" data-index="${array[i].prodId-1}">
                    <img src="images/products/${array[i].prodImg}" alt="" class="manue-product-img">
                    <h6 class="manue-product-name capitalize">${array[i].prodName}</h6>
                    <h6 class=""> ${array[i].numberOfProds} ${array[i].numberOfProds > 1 ? "items" : "item" } </h6>
                     </li>
                   `;
        }
    }
    else{
        all.shoppingIconItems.innerHTML= "No products in cart";
    
    }
     
    }
    drowProductsInCartIcon( userOwnProducts)
/****************** slider ********************** */
{/* <div class="review-item ">   
<div class="review-item-img">
    <img src="images/review/img-1.png" alt="">
    <h4 class="review-item-name capitalize">joan due</h4>
</div>
<p class="review-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur aperiam? Sed, explicabo fugiat. Ipsam, minus? Deleniti necessitatibus est, libero possimus placeat nisi quisquam!</p>
<div class="review-item-rate">
    <i class="fa-solid fa-star review-icon"></i>
    <i class="fa-solid fa-star review-icon"></i>
    <i class="fa-solid fa-star review-icon"></i>
    <i class="fa-solid fa-star review-icon"></i>
    <i class="fa-solid fa-star-half-stroke review-icon"></i>
</div>
</div> */}
let reviewData = [
    {
       reviewId :1,
       reviewDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur",
       reviewImg : "img-1.png",
       reviewName : "ahmad hassan",
       reviewRate:`<i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star-half-stroke review-icon"></i>`
    }
    ,
    {
       reviewId :2,
       reviewDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur",
       reviewImg : "img-2.png",
       reviewName : "hassan ali",
       reviewRate:`<i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>`
    }
    ,
    {
       reviewId :3,
       reviewDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur",
       reviewImg : "img-3.png",
       reviewName : "nour ahmad",
       reviewRate:`<i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star-half-stroke review-icon"></i>`
    }
    ,
    {
       reviewId :4,
       reviewDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur",
       reviewImg : "img-4.png",
       reviewName : "yazen soliman",
       reviewRate:`<i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star-half-stroke review-icon"></i>`
    }
    ,
    {
       reviewId :5,
       reviewDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deleniti beatae nam provident animi consequatur",
       reviewImg : "img-5.png",
       reviewName : "zain ali",
       reviewRate:`<i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star review-icon"></i>
       <i class="fa-solid fa-star-half-stroke review-icon"></i>`
    }
    ,
]
let lefttCharvon = document.querySelector(".left-charvon.active"),
rightChervon = document.querySelector(".right-charvon.active") ,
reviewItem = document.querySelector(".review-item") ,
reviewIndex = 0

function showSlider (element){
    reviewItem.innerHTML =""
    reviewItem.innerHTML = `<div class="review-item-img" id ="me">
    <img src="images/review/${element.reviewImg}" alt="">
    <h4 class="review-item-name capitalize">${element.reviewName}</h4>
</div>
<p class="review-item-text">${element.reviewDesc}</p>
<div class="review-item-rate">
${element.reviewRate}
</div>`
}
showSlider (reviewData[0])
rightChervon.onclick = function (){
    reviewIndex ++
    showSlider (reviewData[reviewIndex])
    console.log ("next")
}
/****************** draft ********************** */
