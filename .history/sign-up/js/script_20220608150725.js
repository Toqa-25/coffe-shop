import * as all from  "/../../home/js/script.js";

console.log (all.lightButton)
// run function 
window.addEventListener("load" , all.loadingPage);
all.lightButton.onclick = all.activeLightMood
all.barIcon.onclick = all.finalToggleActiveClass
all.userIcon.onclick = all.finalToggleActiveClass
all.shoppingIcon.onclick = all.finalToggleActiveClass
all.searchIcon.onclick = all.finalToggleActiveClass
/**************************************** */
// let hiddenText = document.querySelector(".about-text-hidden"),
//  aboutLearnMoreButton = document.querySelector(".about-learn-more"),
//  aboutSeeLessButton = document.querySelector(".about-see-less");

// aboutLearnMoreButton.addEventListener("click" , function (){
//     this.style.display = "none"
//     hiddenText.style.display = "block";
//     aboutSeeLessButton.style.display = "block";
// })
// aboutSeeLessButton.addEventListener("click" , function (){
//     this.style.display = "none"
//     hiddenText.style.display = "none";
//     aboutLearnMoreButton.style.display = "block";
// })