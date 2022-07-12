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
lightButton.onclick = function (){
    lightButtonCircle.classList.toggle("light-option");
    body.classList.toggle("light");
    console.log ("bar")
}
console.log(lightButton)