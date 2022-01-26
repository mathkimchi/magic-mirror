fetch("/schedule.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code").innerText = text)
  .catch(errror => document.getElementById("portfolio-code").innerText = "Unable to fetch portfolio, try again later")

fetch("/menu.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code2").innerText = text)
  .catch(errror => document.getElementById("portfolio-code2").innerText = "Unable to fetch portfolio, try again later")
fetch("/games.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code3").innerText = text)
  .catch(errror => document.getElementById("portfolio-code3").innerText = "Unable to fetch portfolio, try again later")
fetch("/calendar1.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code4").innerText = text)
  .catch(errror => document.getElementById("portfolio-code4").innerText = "Unable to fetch portfolio, try again later")
fetch("/weather.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad Response")
    }
    return response.text()
  })
  .then(text => document.getElementById("portfolio-code5").innerText = text+'°F')
  .catch(errror => document.getElementById("portfolio-code5").innerText = "Unable to fetch portfolio, try again later")