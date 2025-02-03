fetch('http://api.weatherapi.com/v1/current.json?key=2a7253ec31224106b7335750250102&q=Brasília')
.then(response => response.json())
.then(data => {
})
.catch(error => console.log('Error', error)); 