var amount=0;
function myFunction(change)
{ amount=amount+ parseFloat(change);
   var amountfix= amount.toFixed(2)
    document.getElementById("mydata").innerHTML= "$"+amountfix;
}
