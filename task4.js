function Myfunction() {
    var total=0
    var totalsum=0
  var Outputobj=  document.getElementById("mydata")
  Outputobj.innerHTML =""
    for (i=0;i<3;i++) 
    {
        var roll1= Math.floor(Math.random() * 7);
        var roll2= Math.floor(Math.random() * 7);
      total= roll1+ roll2
     totalsum+= total
     console.log(totalsum)
 average=totalsum/6
      Outputobj.innerHTML = Outputobj.innerHTML+  roll1+"   "+roll2  ; 
     console.log(i)
     if (i<2) {
         Outputobj.innerHTML=Outputobj.innerHTML+", "
     }
  
    } 

    Outputobj.innerHTML= Outputobj.innerHTML+ "<br> Average=" +average.toFixed(2)
}