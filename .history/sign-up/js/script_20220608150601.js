import * as all from  "/../../home/js/script.js";

console.log (all.lightButton)
all.lightButton.onclick = all.activeLightMood
all.bar.onclick = all.showNavBar

window.addEventListener("load" , all.loadingPage);

lightButton.onclick = activeLightMood
barIcon.onclick = finalToggleActiveClass
userIcon.onclick = finalToggleActiveClass
shoppingIcon.onclick = finalToggleActiveClass
searchIcon.onclick = finalToggleActiveClass
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