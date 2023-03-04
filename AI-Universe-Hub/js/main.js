// Fetch Date for show ai card Start 
let fetchData = [];
const aiCards = async (dataLimit, sorted = false) => {
  let URL = 'https://openapi.programming-hero.com/api/ai/tools'
  let res = await fetch(URL)
  let data = await res.json()
  fetchData = data.data.tools;
  displayAiCards(data.data.tools, dataLimit);
  showCardsBySorted(data.data.tools,dataLimit,sorted);
}
// Fetch Date for show ai card End


// Display Card Start 
const displayAiCards = (data, dataLimit) => {

  // display maximum 6 Ai Tools Start
  let showAllDateContainer = document.getElementById('showAllDateContainer');
  if (dataLimit && data.length > 6) {
    data = data.slice(0, 6);
    showAllDateContainer.classList.remove('hidden');
  }
  else {
    showAllDateContainer.classList.add('hidden');
  }
  // display maximum 6 Ai Tools Start

  //  display all ai tools  start
  data.forEach(data => {
    // console.log(data.id);
    document.getElementById('aiCardContainer').innerHTML += `   
      <div class="card mt-3 w-96 bg-base-100 shadow-xl border ">
      <figure class="px-10 pt-10">
        <img src="${data.image}" alt="Shoes" class="Ai Tools" />
      </figure>
      <div class="card-body">
        <h2 class="text-3xl  font-black">Features</h2>
        <p class="font-normal text-sm">1. <span>${data.features[0]}</span></p>
        <p class="font-normal text-sm">2. <span>${data.features[1]}</span></p>
        <p class="font-normal text-sm">3. <span>${data.features[2]}</span></p>
        <hr class="border">    
       <section class="flex justify-between">
          <div>
              <h1 id="cardTitle" class="text-3xl  font-black">${data.name}</h1> <br>
              <p><img src="./icon/icon.png" alt="Date Icon" class="inline" > ${data.published_in} </p>
          </div>
          <div class="card-actions pt-5">
              <label  for="my-modal-3" class="btn btn-outline btn-error text-sm font-bold" onclick="showAiToolsDetails('${data.id}')">Details</label >               
          </div>
       </section>         
      </div>
    </div> 
      `
  })
  // stop spinner or loader
  toggleSpinner(false);
  //  display all ai tools  end

}
// Display Card End

// "showAllDateBtn" for show all ai Card [Start] 
document.getElementById('showAllDateBtn').addEventListener('click', function () {
  // start spinner or loader
  toggleSpinner(true);
  document.getElementById('aiCardContainer').textContent = ''
  aiCards()
  showAllDateContainer.classList.add('hidden');
})
// "showAllDateBtn" for show all ai Card [End] 

// Loder of Spinner Start 
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('lodder');
  if (isLoading) {
    loaderSection.classList.remove('hidden')
  }
  else {
    loaderSection.classList.add('hidden');
  }
}
// Loder of Spinner End 



// Show Ai tools Details Start
const showAiToolsDetails = async (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(URL)
  const data = await res.json()
  displayAiToolsDetails(data.data);
}
// Show Ai tools Details End

// display Ai Tools Details Start 
const displayAiToolsDetails = (data) => {



  // accuracy dynamic start
  let getScoreNumber = data.accuracy.score;
  if (getScoreNumber === null) {
    document.getElementById('accuracyScoreContainer').classList.add('hidden');
  } else {
    document.getElementById('accuracyScoreContainer').classList.remove('hidden');
    const numStr = getScoreNumber.toString(); // convert the number to a string
    const decimalIndex = numStr.indexOf('.'); // get the index of the decimal point
    const rightSideNum = numStr.substring(decimalIndex + 1); // extract the right-side numbers as a string
    const result = Number(rightSideNum); // convert the string to a number
    document.getElementById('accuracyScore').innerText = result;
  }
  // accuracy dynamic end

  //  Destruture start
  const { description, } = data;
  //  Destruture end
  if (data.pricing === null) {
    document.getElementById('price1').innerText = 'Free of Cost/'
    document.getElementById('price2').innerText = 'Free of Cost/'
    document.getElementById('price3').innerText = 'Free of Cost/'
  } else {
    document.getElementById('aiDescription').innerText = description
    document.getElementById('cardLogo').setAttribute('src', data.image_link[0])
    document.getElementById('price1').innerText = data.pricing[0].price 
    document.getElementById('price2').innerText = data.pricing[1].price 
    document.getElementById('price3').innerText = data.pricing[2].price 
    document.getElementById('plan1').innerText = data.pricing[0].plan
    document.getElementById('plan2').innerText = data.pricing[1].plan
    document.getElementById('plan3').innerText = data.pricing[2].plan
    console.log( description);
    console.log( data.image_link[0]);
  }







  
  // for features 
  // console.log(data.features);
  let objetArrayFormfeatures = Object.values(data.features)
  // console.log(objetArrayFormfeatures);
  document.getElementById('Features').textContent = ''
  objetArrayFormfeatures.forEach(data => {
  document.getElementById('Features').innerHTML += 
    `
    <li id="list4">${data.feature_name}</li>
    `
   })

  // document.getElementById('list1').innerText = objetArrayFormfeatures[0].feature_name
  // document.getElementById('list2').innerText = objetArrayFormfeatures[1].feature_name
  // document.getElementById('list3').innerText = objetArrayFormfeatures[2].feature_name

  // for Integrations
  document.getElementById('Integrations').textContent = ''
 if(data.integrations ===  null  ) {
  document.getElementById('Integrations').innerHTML += 
   `
   <li id="list4">No data Found</li>
   `
 } else {
  data.integrations.forEach(data => {
    // console.log(data);
  data === null ? 'No data Found' :  document.getElementById('Integrations').innerHTML += 
   `
   <li id="list4">${data}</li>
   `
  })
 }

  
 

  
  // cardInput and cardOutput
  if (data.input_output_examples === null) {
    document.getElementById('cardInput').innerText = "No! Not Yet! Take a break!!!"
    document.getElementById('cardOutpur').innerText = "No! Not Yet! Take a break!!!"
  } else {
    document.getElementById('cardInput').innerText = data.input_output_examples[1].input === "function sumArray(arr) {\n return arr.reduce((acc, curr) => acc + curr, 0);\n}" ? "No! Not Yet! Take a break!!!" : data.input_output_examples[1].input
    document.getElementById('cardOutpur').innerText = data.input_output_examples[1].output === "function sumArray(arr) {\n return arr.reduce((acc, curr) => acc + curr, 0);\n}" ? "No! Not Yet! Take a break!!!" : data.input_output_examples[1].output
  }

 

  //display Ai Tools Details End

}



//  sorting data start
// let showCardsBySorted = (fetchData,dataLimit,sorted) => {
//   let aiCardContainer = document.getElementById('aiCardContainer');
//   aiCardContainer.innerHTML = '';
//   const showBtn = document.getElementById('showAllDateContainer');

//   if(dataLimit === 6)
//   {
//     fetchData = fetchData.slice(0,dataLimit);
//     showBtn.classList.remove('hidden')
//   } else {
//     showBtn.classList.add('hidden')
//   }

//   if(sorted === true) {
//     const sortByDate = (a,b)  => {
//       const first = new Date(a.published_in);
//       const second = new Date(b.published_in);
//       if(first  < second  ) {
//         return 1;
//       } else if ( first > second  ){
//         return -1;
//       } else {
//         return 0;
//       }
//     };
//     fetchData.sort(sortByDate);
//   } else {
//     fetchData = fetchData
//   }
// }
//  sorting data end

const sort = (dataLimit) =>  {
  aiCards(dataLimit,true)
}

// start spinner or loader

toggleSpinner(true)
aiCards(6)
