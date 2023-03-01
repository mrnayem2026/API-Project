

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

// Take countryContainer for append Coutry Card 

const displayCountry = date => {
    let countryContainer = document.getElementById('countryContainer');

    let countryName = date[0].name.common
    let countryFlag = date[0].flags.png
    let countryRegion = date[0].region
    let countryCapital = date[0].capital[0]
    let countryIndependent = date[0].independent
    let countryoPulation = date[0].population

    date.forEach(region => {
         let regionDiv = document.createElement("div");
    regionDiv.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
    regionDiv.innerHTML = `
    <a href="#">
    <img class="rounded-t-lg p-5" src="${countryFlag}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </div>
    `
    countryContainer.appendChild(regionDiv);
    })
   
    console.log(date);





    // console.log(date[0]);
}