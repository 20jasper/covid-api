// fetch('https://api.covid19api.com/countries')
//     .then(response => response.json())
//     .then(data => console.log(data));
fetch('https://api.covid19api.com/world')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#newConfirmed').innerText = data[0]['NewConfirmed']
        document.querySelector('#newDeaths').innerText = data[0]['NewDeaths']

        document.querySelector('#totalConfirmed').innerText = data[0]['TotalConfirmed']
        document.querySelector('#totalDeaths').innerText = data[0]['TotalDeaths']





        console.log(data)
    });
