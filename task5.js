var getweekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

var getMonth= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

var date= new Date();
var day= date.getDate();
var month= getMonth[date.getMonth()];
var year = date.getFullYear();
var weekday=getweekday[date.getDay()]

var message="Today is "+weekday+",<br>"+month+ " "+day+ ", "+ year ;
function Myfunction() {
document.getElementById("mydata").innerHTML= message
}
