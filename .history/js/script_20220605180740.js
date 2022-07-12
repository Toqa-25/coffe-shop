let lightButton = document.querySelector(".dark-light"),
lightButtonCircle = document.querySelector(".dark-light .circle");
document.querySelector(".bar").onclick = function (){
    console.log ("bar")
}
/*********************************************** */
//   body function 
lightButton.onclick = function (){
    this.classList.toggle("light-option")
}