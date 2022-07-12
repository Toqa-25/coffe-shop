// import * as all from  "/../../home/js/script.js";
import * as all from  "/../../home/js/script.js";

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
        prodImg :"img-1.jpg"        


    },
    {
        prodId:5,
        prodName: "tasty and healthy",
        prodPrice : "$15",
        beforeProdPrice : "$17"

    },
    {
        prodId:6,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:7,
        prodName: "tasty and healthy",
        prodPrice : "$12.965",
        beforeProdPrice : "$15"

    },
    {
        prodId:8,
        prodName: "tasty and healthy",
        prodPrice : "$12",
        beforeProdPrice : "$15"

    },
    {
        prodId:9,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:10,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:11,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:12,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:13,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:14,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:15,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:16,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:17,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:18,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:19,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:20,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:21,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:22,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:23,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:24,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    },
    {
        prodId:25,
        prodName: "tasty and healthy",
        prodPrice : "$15.965",
        beforeProdPrice : "$17"

    }
]

/**************************************** */
let manue = document.querySelector(".manue-content")
console.log(manue)

function drowProducts(numOfProducts){
    manue.innerHTML = "" ;
    
    // let numOfProducts = 9
    for (let i=1 ; i<= numOfProducts ; i++){
        manue.innerHTML += `
        <div class="manue-product">
        <img src="images/products/img-${i}.jpg" alt="" class="manue-product-img">
        <h3 class="manue-product-name capitalize">tasty and healthy</h3>
        <p class="manue-product-price">$15.95 <span class="before-price">17$</span></p>
        <button class="btn manue-product-btn">add to cart </button>
        </div>
        `
    }
    // manue.innerHTML += ``;
}
drowProducts(9)
/**************************************** */
// check exisit login username
let logInUserName = localStorage.getItem("logInUserName") ,
 users =  JSON.parse(localStorage.getItem("newUsers")) ;
function checkExisitUserName(){
    if (logInUserName){
       let user =  users.find(( userItem , index) => userItem.name == logInUserName)  

// console.log ()
    }
}

// function checkUserName(){
//     if (signInFormEmail.value.trim() != "" ){
//         let user =  users.find(userItem => userItem.name == signInFormUserName.value.trim())  
//          if (user != null)    {
//              console.log (user)
//          }
//          else{
//              Swal.fire(`we can't find this username please sign up first`)
//          }
//  }
//  else{
//   Swal.fire(`username input is empty`)
//  } 
// }