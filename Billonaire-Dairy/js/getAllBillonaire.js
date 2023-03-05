// Fetch AllBilonair data form server {Start} 



const fetchDataBiilonair = async () => {
    let URL = 'https://forbes400.onrender.com/api/forbes400/getAllBillionaires';
    const res = await fetch(URL)
    const data = await res.json()
    displayAllBillonair(data);
}

// Fetch AllBilonair data form server {End} 


const displayAllBillonair = (data) => {


    data = data.splice(0, 5)
    data.forEach(item => {
        const { personName, countryOfCitizenship, industries, rank, finalWorth } = item
        let tableRowContainer = document.getElementById('table-row-container');
        let tableRow = document.createElement('tr');
        tableRow.classList.add('text-xl', 'font-medium')
        tableRow.innerHTML += `
       <td>${personName}</td>
       <td>${countryOfCitizenship}</td>
       <td>${ industries[0]}</td>
       <td>${rank}</td>
       <td>${finalWorth}</td> 
       `
       tableRowContainer.append(tableRow);
    })

}


fetchDataBiilonair()