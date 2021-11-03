import pystuff from '/node.js'
const AnyList = require('anylist');

const any = new AnyList({email: 'tothienbao6a@gmail.com', password: 'tothienbao2004'});
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  console.log(pystuff.toString());

  console.log(window.location.href);