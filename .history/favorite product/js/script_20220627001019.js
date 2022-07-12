import * as all from  "/../../home/js/script.js";
import {manue , logInUserName , users , indexOfUser , drowProducts} from "/../../products/js/script.js"

/************ vars data *************/ 

let  favoritArray = users[indexOfUser].favoritArray

console.log (favoritArray)

/************ run functions  *************/ 
all.checkLogInUser()   //  check login user
// runDrowProductsFuction()  // drow products

/************ creating functions  ************/ 

drowProducts(favoritArray)



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
// l 