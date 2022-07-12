// import * as all from  "/../../home/js/script.js";
import * as all from  "/../../home/js/script.js";



/**************************************** */

function checkEmail(){
    if (signInFormEmail.value.trim() != "" ){
         if (user.email == signInFormEmail.value.trim())  {
         }
         else{
             Swal.fire(`we can't find this email please sign up first`)
         }
 }
 else{
  Swal.fire(`Email input is empty`)
 } 
}
function checkPassword(){
    if (signInFormPassword.value.trim() != "" ){
         if (user.password == signInFormPassword.value.trim())  {
         }
         else{
             Swal.fire(`Incorrect password `)
         }
 }
 else{
  Swal.fire(`password input is empty`)
 } 
}
