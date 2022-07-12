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




