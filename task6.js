var i=20;
function myFunction()
{
 i = i--; // the value of i will be remembered next function call
 
 if (i>0) {
     document.getElementById("mydata").innerHTML=i
 i=i-1
 }
 else {
    document.getElementById("mydata").innerHTML="liftoff!"

 }
 }
