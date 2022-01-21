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

   