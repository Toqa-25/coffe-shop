import * as all from  "/../../home/js/script.js";
/************ vars data *************/ 
let  manue = document.querySelector(".manue-content");
let logInUserName = localStorage.getItem("logInUserName") ,
users =  JSON.parse(localStorage.getItem("newUsers")) ,
indexOfUser =  localStorage.getItem("indexOfUser") ;

let  favoritArray = users[indexOfUser].favoritArray
console.log ("no")
console.log (favoritArray)

/************ run functions  *************/ 
all.checkLogInUser()   //  check login user
// drowProducts(favoritArray)  // drow products

/************ draft  ************/ 
// drowProducts(favoritArray)





