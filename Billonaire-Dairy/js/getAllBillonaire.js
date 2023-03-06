// Fetch AllBilonair data form server {Start} 



const fetchDataBiilonair = async () => {
    let URL = 'https://forbes400.onrender.com/api/forbes400/getAllBillionaires';
    const res = await fetch(URL)
    const data = await res.json()
    displayAllBillonair(data);
}

// Fetch AllBilonair data form server {End} 


const displayAllBillonair = (data , dataLimit = 10) => {
    data = data.splice(0, dataLimit)

    //! Sum of all Worth and show in "totlaWealth" id [Start]
    let sumOfFinalWorth = 0;
    //! Sum of all Worth and show in "totlaWealth" id [End]

    data.forEach(item => {
        const { personName, countryOfCitizenship, industries, rank, finalWorth } = item
        let tableRowContainer = document.getElementById('table-row-container');
        let tableRow = document.createElement('tr');
        tableRow.classList.add('text-xl', 'font-medium')
        tableRow.innerHTML += `
       <td>${personName} <button onclick="modalOpenInEyeIcon()"><img src="./logo/eyeIcon.png" alt="Eye Icon" class="inline ml-1"></button></td>
       <td>${countryOfCitizenship}</td>
       <td>${industries[0]}</td>
       <td>${rank}</td>
       <td>${finalWorth}</td> 
     `
        tableRowContainer.append(tableRow);
        return sumOfFinalWorth += finalWorth;
    })
    //! Sum of all Worth and show in "totlaWealth" id [Start] 
    document.getElementById('totlaWealth').innerText = sumOfFinalWorth;
    //! Sum of all Worth and show in "totlaWealth" id [End]s
}

// This function for Modal Starts 
const modalOpenInEyeIcon=()=>{
    console.log('Hello  Nayemn');
}
// This function for Modal Ends


fetchDataBiilonair()