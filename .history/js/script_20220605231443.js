let body = document.querySelector("body"),
lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".dark-light .circle");
bar = document.querySelector(".bar")
bar.onclick = function (){
    console.log ("bar")
}
/*********************************************** */
//   body function 
lightButton.onclick = function (){
    lightButtonCircle.classList.toggle("light-option")
    body.classList.toggle("light")
}