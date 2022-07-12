import * as all from  "/../../home/js/script.js";

// console.log (all.lightButton)
all.checkLogInUser()
// all.lightButton.onclick = all.activeLightMood
// all.bar.onclick = all.showNavBar
// window.addEventListener("load" , all.loadingPage);
// all.checkLogInUser()
// all.signInBtn.onclick = all.signIn
// all.signUpBtn.onclick = all.signUp

all.contentNumOfContent.innerHTML = users[indexOfUser].numberOfProducts
/**************************************** */
let hiddenText = document.querySelector(".about-text-hidden"),
aboutLearnMoreButton = document.querySelector(".about-learn-more"),
aboutSeeLessButton = document.querySelector(".about-see-less");
aboutLearnMoreButton.addEventListener("click" , function (){
    this.style.display = "none"
    hiddenText.style.display = "block";
    aboutSeeLessButton.style.display = "block";
})
aboutSeeLessButton.addEventListener("click" , function (){
    this.style.display = "none"
    hiddenText.style.display = "none";
    aboutLearnMoreButton.style.display = "block";
})
/**************************************** */