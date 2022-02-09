var deadline = new Date("May 29, 2022").getTime();
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t/(1000 * 60 * 60 * 24));
document.getElementById("counterdays").innerHTML = days + " Days Left!";
if(t==0){
t=t+365
}