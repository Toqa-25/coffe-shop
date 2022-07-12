let body = document.querySelector("body"),
lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".dark-light .circle"),
bar = document.querySelector(".bar")
bar.onclick = function (){
    lightButtonCircle.classList.toggle("nav-bar-list")
}
/*********************************************** */
//   body function 
lightButton.onclick = function (){
    lightButtonCircle.classList.toggle("light-option")
    body.classList.toggle("light")
}