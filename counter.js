var deadline = new Date("May 30, 2022").getTime(); // increment the date by 1 for some reason it shows the number of days by 1 less
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t/(1000 * 60 * 60 * 24));
document.getElementById("counterdays").innerHTML = days + " Days Left!";
if(t==0){
t=t+365
}