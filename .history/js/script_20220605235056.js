let body = document.querySelector("body"),
lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".circle"),
bar = document.querySelector(".bar"),
navListItem = document.querySelector(".nav-item-list");
// navListItem = 
bar.onclick = function (){
    navListItem.classList.toggle("nav-bar-list")
}
/*********************************************** */
//   body function 
document.querySelector(".dark-light").onclick = function (){
    console.log ("light")
    lightButtonCircle.classList.toggle("light-option");
    body.classList.toggle("light");
}
console.log(lightButton)