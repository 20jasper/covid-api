// fetch('https://api.covid19api.com/countries')
//     .then(response => response.json())
//     .then(data => console.log(data));
fetch('https://api.covid19api.com/world')
    .then(response => response.json())
    .then(data => {
        function getData(id) {
            //get number from object
            const num = data[0][id]
            //add commas to format
            return new Intl.NumberFormat().format(num)
        }
        document.querySelector('#newConfirmed').innerText = getData('NewConfirmed')
        document.querySelector('#newDeaths').innerText = getData('NewDeaths')
        document.querySelector('#totalConfirmed').innerText = getData('TotalConfirmed')
        document.querySelector('#totalDeaths').innerText = getData('TotalDeaths')
    });
