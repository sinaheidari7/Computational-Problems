
/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");
var num= Math.random();
console.log(num)
   if (num>=0.5) {
    p.innerHTML= "tails"
   }
   else {
     p.innerHTML= "heads"
   }
  // set p.innerHTML equal to heads or tails

}
