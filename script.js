fetch("/schedule.txt")
    .then(response => {
      if(!response.ok) {
        throw new Error("Bad Response")
      }
      return response.text()
    })
    .then(text => document.getElementById("portfolio-code").innerText = text)
    .catch(errror => document.getElementById("portfolio-code").innerText = "Unable to fetch portfolio, try again later")

fetch("/menu.txt")
    .then(response => {
      if(!response.ok) {
        throw new Error("Bad Response")
      }
      return response.text()
    })
    .then(text => document.getElementById("portfolio-code2").innerText = text)
    .catch(errror => document.getElementById("portfolio-code2").innerText = "Unable to fetch portfolio, try again later")
fetch("/games2.txt")
    .then(response => {
      if(!response.ok) {
        throw new Error("Bad Response")
      }
      return response.text()
    })
    .then(text => document.getElementById("portfolio-code3").innerText = text)
    .catch(errror => document.getElementById("portfolio-code3").innerText = "Unable to fetch portfolio, try again later")

// const fs = require('fs');
// const data = fs.readFileSync('C:/Users/agupta-22/Magic-Mirror/games2.txt',
//             {encoding:'utf8', flag:'r'});
// let split_string = () => {
//     const str1 = 'Hello, I am Arun Banik';
//     const arr = str1.split('Details');
//     document.getElementById('dFyn').innerText = arr.join('Details \n');
// }
// split_string();
