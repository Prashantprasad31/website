const scriptURL = 'https://script.google.com/macros/s/AKfycbysxZJJ33Lgdr-SJIiphOG2A7yOUYY1if7YM-JsT5kma6HUeUkts26k7m5WW_q7uXaM9g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


document.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById("timestampField");
    var currentDate = new Date();
    var currentDatetime = currentDate.getFullYear() + '-' +
                         ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
                         ('0' + currentDate.getDate()).slice(-2) + 'T' +
                         ('0' + currentDate.getHours()).slice(-2) + ':' +
                         ('0' + currentDate.getMinutes()).slice(-2);
    timestampField.value = currentDatetime;
});