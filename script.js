fetch("C:/Users/agupta-22/Magic-Mirror/schedule.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code").innerText = text)
  .catch(errror => document.getElementById("portfolio-code").innerText = "Unable to fetch portfolio, try again later")

fetch("C:/Users/agupta-22/Magic-Mirror/menu.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code2").innerText = text)
  .catch(errror => document.getElementById("portfolio-code2").innerText = "Unable to fetch portfolio, try again later")
fetch("C:/Users/agupta-22/Magic-Mirror/games.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code3").innerText = text)
  .catch(errror => document.getElementById("portfolio-code3").innerText = "Unable to fetch portfolio, try again later")
fetch("C:/Users/agupta-22/Magic-Mirror/calendar1.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code4").innerText = text)
  .catch(errror => document.getElementById("portfolio-code4").innerText = "Unable to fetch portfolio, try again later")
fetch("C:/Users/agupta-22/Magic-Mirror/weather.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code5").innerText = text + ' °F')
  .catch(errror => document.getElementById("portfolio-code5").innerText = "Unable to fetch portfolio, try again later")
fetch("C:/Users/agupta-22/Magic-Mirror/counter.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code6").innerText = text)
  .catch(errror => document.getElementById("portfolio-code6").innerText = "Unable to fetch portfolio, try again later")

