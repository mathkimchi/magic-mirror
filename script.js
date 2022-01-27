fetch("/var/www/PeddieBookExchange/Magic-Mirror/schedule.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code").innerText = text)
  .catch(errror => document.getElementById("portfolio-code").innerText = "Unable to fetch portfolio, try again later")

fetch("/var/www/PeddieBookExchange/Magic-Mirror/menu.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code2").innerText = text)
  .catch(errror => document.getElementById("portfolio-code2").innerText = "Unable to fetch portfolio, try again later")
fetch("/var/www/PeddieBookExchange/Magic-Mirror/games.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code3").innerText = text)
  .catch(errror => document.getElementById("portfolio-code3").innerText = "Unable to fetch portfolio, try again later")
fetch("/var/www/PeddieBookExchange/Magic-Mirror/calendar1.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code4").innerText = text)
  .catch(errror => document.getElementById("portfolio-code4").innerText = "Unable to fetch portfolio, try again later")
fetch("/var/www/PeddieBookExchange/Magic-Mirror/weather.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code5").innerText = text + ' °F')
  .catch(errror => document.getElementById("portfolio-code5").innerText = "Unable to fetch portfolio, try again later")
fetch("/var/www/PeddieBookExchange/Magic-Mirror/counter.asd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code6").innerText = text)
  .catch(errror => document.getElementById("portfolio-code6").innerText = "Unable to fetch portfolio, try again later")

