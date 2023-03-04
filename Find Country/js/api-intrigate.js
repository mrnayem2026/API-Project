

// For Region Start
document.getElementById('submitBtn').addEventListener('click', function () {

    // Take Value By id of  'inputFilde'
    let inputValue = document.getElementById('inputFilde').value;
    let URL = `https://restcountries.com/v3.1/region/${inputValue}`;
    fetch(URL)
        .then(res => res.json())
        .then(date => displayCountry(date))

    // !inputFilde Clear 
    // document.getElementById('inputFilde').value = '';
})
// For Region End

// Take countryContainer for append Country Card and display Country start

const displayCountry = date => {
    let countryContainer = document.getElementById('countryContainer');
    let errorMessage = document.getElementById('errorMessage');
    let showAllDateContainer = document.getElementById('showAllDateContainer');
 
    countryContainer.textContent = '';

    // Error check
    if (date.status === 404) {
        errorMessage.classList.remove('hidden');
        showAllDateContainer.classList.add('hidden')
    } else {

        // Date array  length check for show button 
        if (date.length > 0) {
            showAllDateContainer.classList.remove('hidden');
             // date array splice 0 from 9 
            date = date.splice(0, 9);
            // show country in display use array method 'forEach' 
            date.forEach(regionn => {
                let countryFlag = regionn.flags.png
                let countryName = regionn.name.common
                let countryCapital = regionn.capital[0]
                let countryRegion = regionn.region
                let countryIndependent = regionn.independent
                let countryoPulation = regionn.population

                let regionDiv = document.createElement("div");
                regionDiv.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
                regionDiv.innerHTML = `
            <a href="#">
            <img class="rounded-t-lg p-5" src="${countryFlag}" alt="" />
            </a>
            <div class="p-5"> 
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Country Name : ${countryName}</h5>
                <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Capital City: <span class="text-red-400"> ${countryCapital} </span> </p>
                <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Region: <span class="text-red-400"> ${countryRegion} </span> </p>
                <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Indipendent: <span class="text-red-400"> ${countryIndependent} </span> </p>
                <p class="mb-2 font-normal text-lg text-lime-500 dark:text-lime-300">Population: <span class="text-red-400"> ${countryoPulation} </span> </p>


                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-bs font-semi-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ditails Info
                </a>
            </div>
            `
                countryContainer.appendChild(regionDiv);
            })
        
             document.getElementById('showAllDateBtn').addEventListener('click',function(){
             date.forEach(regionn => {
                    let countryFlag = regionn.flags.png
                    let countryName = regionn.name.common
                    let countryCapital = regionn.capital[0]
                    let countryRegion = regionn.region
                    let countryIndependent = regionn.independent
                    let countryoPulation = regionn.population
        
                    let regionDiv = document.createElement("div");
                    regionDiv.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
                    regionDiv.innerHTML = `
                <a href="#">
                <img class="rounded-t-lg p-5" src="${countryFlag}" alt="" />
                </a>
                <div class="p-5"> 
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Country Name : ${countryName}</h5>
                    <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Capital City: <span class="text-red-400"> ${countryCapital} </span> </p>
                    <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Region: <span class="text-red-400"> ${countryRegion} </span> </p>
                    <p class="mb-1 font-normal text-lg text-lime-500 dark:text-lime-300">Indipendent: <span class="text-red-400"> ${countryIndependent} </span> </p>
                    <p class="mb-2 font-normal text-lg text-lime-500 dark:text-lime-300">Population: <span class="text-red-400"> ${countryoPulation} </span> </p>
            
            
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-bs font-semi-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ditails Info
                    </a>
                </div>
                `
                    countryContainer.appendChild(regionDiv);
                })
             })
        }   
        errorMessage.classList.add('hidden');
        
    }
}

// Take countryContainer for append Country Card and display Country End

// search enter key  {Not working}
document.getElementById('inputFilde').addEventListener('keypress', function (e, date) {
    if (e.key === 'Enter') {
        displayCountry(date)
    }
});


