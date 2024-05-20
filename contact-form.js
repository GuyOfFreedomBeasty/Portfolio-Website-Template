const scriptURL = 'https://script.google.com/macros/s/AKfycbwVKcBzLUevOwpoz7nbWAmBvNqyCiR-IV8NajutbCrJVvFUP7OGN-zPZrn870DR3eHewQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {

      msg.innerText = "Message Sent Successfully!";
      msg.style.color = "rgb(0, 255, 0)"

      setTimeout(function() {
        msg.innerText = "";
      }, 5000);
      form.reset()
    })

    .catch(error => {
      msg.innerText = "Error Sending The Message";
      msg.style.color = "rgb(255, 0, 0)"

      setTimeout(function() {
        msg.innerText = "";
      }, 5000);
    })
})
